import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Calendar, Clock, User, CreditCard, LogOut, Trash2, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useBookings, useBookingStats, useUpdateBookingStatus, useDeleteBooking } from '../api/hooks';

interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  duration: string;
  paymentMethod: string;
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const API_URL = 'http://localhost:4000';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    todayBookings: 0,
    totalRevenue: 0,
    pendingBookings: 0
  });
  const [loading, setLoading] = useState(true);

  // Get auth token
  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };

  // Fetch bookings and stats
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bookingsRes, statsRes] = await Promise.all([
        axios.get(`${API_URL}/api/bookings`, getAuthHeaders()),
        axios.get(`${API_URL}/api/bookings/stats`, getAuthHeaders())
      ]);

      setBookings(bookingsRes.data);
      setStats(statsRes.data);
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 401) {
        toast.error('Session expired. Please login again.');
        handleLogout();
      } else {
        toast.error('Failed to fetch bookings');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminToken');
    toast.success('Logged out successfully!');
    onLogout();
  };

  const updateBookingStatus = async (id: string, newStatus: 'confirmed' | 'cancelled') => {
    try {
      await axios.patch(
        `${API_URL}/api/bookings/${id}/status`,
        { status: newStatus },
        getAuthHeaders()
      );

      // Update local state
      setBookings(prev => prev.map(booking => 
        booking.id === id ? { ...booking, status: newStatus } : booking
      ));

      toast.success(`Booking ${newStatus} successfully!`);
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to update booking');
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;

    try {
      await axios.delete(`${API_URL}/api/bookings/${id}`, getAuthHeaders());
      
      // Remove from local state
      setBookings(prev => prev.filter(booking => booking.id !== id));
      
      toast.success('Booking deleted successfully!');
      
      // Refresh stats
      fetchData();
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to delete booking');
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[48px] font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">WallStreet Sport Court Management</p>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="bg-red-500/30 border-red-500/30 text-white hover:bg-red-500/10 hover:text-white"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Bookings</p>
                <p className="text-2xl font-bold text-white">{stats.totalBookings}</p>
              </div>
              <Calendar className="w-8 h-8 text-pink-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Today's Bookings</p>
                <p className="text-2xl font-bold text-white">{stats.todayBookings}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Revenue</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(stats.totalRevenue)}</p>
              </div>
              <CreditCard className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Pending Bookings</p>
                <p className="text-2xl font-bold text-white">{stats.pendingBookings}</p>
              </div>
              <User className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex justify-between items-center">
            <span>Recent Bookings</span>
            <Button
              onClick={fetchData}
              variant="outline"
              size="sm"
              className="border-purple-500/30 bg-black border-gray-600 text-white hover:bg-gray-800"
            >
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No bookings found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-300">Customer</TableHead>
                    <TableHead className="text-gray-300">Date & Time</TableHead>
                    <TableHead className="text-gray-300">Payment</TableHead>
                    <TableHead className="text-gray-300">Amount</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div className="text-white">
                          <div className="font-medium">{booking.customerName}</div>
                          <div className="text-sm text-gray-400">{booking.email}</div>
                          <div className="text-sm text-gray-400">{booking.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-white">
                          <div>{formatDate(booking.date)}</div>
                          <div className="text-sm text-gray-400">{booking.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={booking.paymentMethod === 'GCash' ? 'default' : 'secondary'}>
                          {booking.paymentMethod}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-white font-bold">
                        {formatCurrency(booking.totalAmount)}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            booking.status === 'confirmed' ? 'default' :
                            booking.status === 'pending' ? 'secondary' : 'destructive'
                          }
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {booking.status === 'pending' && (
                            <Button
                              size="sm"
                              onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                          {booking.status !== 'cancelled' && (
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteBooking(booking.id)}
                            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}