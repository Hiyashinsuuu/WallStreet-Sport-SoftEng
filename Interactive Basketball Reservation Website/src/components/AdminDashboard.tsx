import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Calendar, Clock, User, Phone, Mail, CreditCard, LogOut, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

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

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    todayBookings: 0,
    totalRevenue: 0,
    pendingBookings: 0
  });

  // Mock bookings data
  useEffect(() => {
    const mockBookings: Booking[] = [
      {
        id: 'BK001',
        customerName: 'Juan Dela Cruz',
        email: 'juan@email.com',
        phone: '+63 917 123 4567',
        date: '2024-09-15',
        time: '8:00 AM - 10:00 AM',
        duration: '2 hours',
        paymentMethod: 'GCash',
        totalAmount: 1000,
        status: 'confirmed',
        createdAt: '2024-09-10T10:30:00Z'
      },
      {
        id: 'BK002',
        customerName: 'Maria Santos',
        email: 'maria@email.com',
        phone: '+63 917 234 5678',
        date: '2024-09-16',
        time: '6:00 PM - 8:00 PM',
        duration: '2 hours',
        paymentMethod: 'Cash on Site',
        totalAmount: 1300,
        status: 'pending',
        createdAt: '2024-09-11T14:15:00Z'
      },
      {
        id: 'BK003',
        customerName: 'Jose Rodriguez',
        email: 'jose@email.com',
        phone: '+63 917 345 6789',
        date: '2024-09-17',
        time: '10:00 AM - 12:00 PM',
        duration: '2 hours',
        paymentMethod: 'GCash',
        totalAmount: 1000,
        status: 'confirmed',
        createdAt: '2024-09-12T09:45:00Z'
      }
    ];

    setBookings(mockBookings);
    
    // Calculate stats
    const today = new Date().toISOString().split('T')[0];
    const todayCount = mockBookings.filter(b => b.date === today).length;
    const totalRevenue = mockBookings
      .filter(b => b.status === 'confirmed')
      .reduce((sum, b) => sum + b.totalAmount, 0);
    const pendingCount = mockBookings.filter(b => b.status === 'pending').length;

    setStats({
      totalBookings: mockBookings.length,
      todayBookings: todayCount,
      totalRevenue,
      pendingBookings: pendingCount
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminSession');
    toast.success('Logged out successfully!');
    onLogout();
  };

  const updateBookingStatus = (id: string, newStatus: 'confirmed' | 'cancelled') => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
    toast.success(`Booking ${newStatus} successfully!`);
  };

  const deleteBooking = (id: string) => {
    setBookings(prev => prev.filter(booking => booking.id !== id));
    toast.success('Booking deleted successfully!');
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
          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
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
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Booking ID</TableHead>
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
                    <TableCell className="text-white font-mono">{booking.id}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
}