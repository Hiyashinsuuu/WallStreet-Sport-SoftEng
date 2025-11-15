import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar, Clock, User, CreditCard, LogOut, Trash2, CheckCircle, XCircle, Loader2, Download, Eye, X } from 'lucide-react';
import { toast } from 'sonner';
import { 
  useBookings, 
  useBookingStats, 
  useUpdateBookingStatus, 
  useDeleteBooking,
  useConfirmPayment,
  useDownloadReceipt,
  useDeleteReceipt
} from '../api/hooks';

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
  transactions?: Array<{
    id: string;
    referenceNumber?: string;
    screenshotPath?: string;
    status: string;
  }>;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const API_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:4000';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const { data: bookings = [], isLoading: loadingBookings, refetch } = useBookings();
  const { data: stats, isLoading: loadingStats } = useBookingStats();
  const updateStatus = useUpdateBookingStatus();
  const deleteBooking = useDeleteBooking();
  const confirmPayment = useConfirmPayment();
  const downloadReceipt = useDownloadReceipt();
  const deleteReceiptMutation = useDeleteReceipt();

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [refetch]);

  // Play notification sound when new pending booking arrives
  useEffect(() => {
    const pendingCount = bookings.filter(b => b.status === 'pending').length;
    if (pendingCount > 0) {
      // You can add sound notification here
      console.log(`📢 ${pendingCount} pending booking(s) require attention`);
    }
  }, [bookings]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminToken');
    toast.success('Logged out successfully!');
    onLogout();
  };

  const updateBookingStatus = (id: string, newStatus: 'confirmed' | 'cancelled') => {
    updateStatus.mutate({ id, status: newStatus });
  };

  const handleDeleteBooking = (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    deleteBooking.mutate(id);
  };

  const handleConfirmPayment = async (booking: Booking) => {
    const transaction = booking.transactions?.[0];
    if (!transaction?.id) {
      toast.error('No transaction found');
      return;
    }

    if (!transaction.screenshotPath) {
      toast.error('No payment proof uploaded yet');
      return;
    }

    // Download screenshot first
    try {
      await downloadReceipt.mutateAsync(transaction.id);
    } catch (err) {
      toast.error('Failed to download receipt');
      return;
    }

    // Then confirm payment (sends email)
    confirmPayment.mutate(transaction.id);
  };

  const handleDeleteReceipt = (transactionId: string) => {
    if (!confirm('Delete this receipt screenshot? This cannot be undone.')) return;
    deleteReceiptMutation.mutate(transactionId);
  };

  const viewReceipt = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowReceiptModal(true);
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

  if (loadingBookings || loadingStats) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-spin" />
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
        <div className="flex gap-3">
          <Button
            onClick={() => refetch()}
            variant="outline"
            className="border-purple-500/30 bg-black border-gray-600 text-white hover:bg-gray-800"
          >
            <Clock className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-red-500/30 border-red-500/30 text-white hover:bg-red-500/10 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Bookings</p>
                <p className="text-2xl font-bold text-white">{stats?.totalBookings || 0}</p>
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
                <p className="text-2xl font-bold text-white">{stats?.todayBookings || 0}</p>
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
                <p className="text-2xl font-bold text-white">{formatCurrency(stats?.totalRevenue || 0)}</p>
              </div>
              <CreditCard className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/50 backdrop-blur-md border-purple-500/30 relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Pending Bookings</p>
                <p className="text-2xl font-bold text-white">{stats?.pendingBookings || 0}</p>
              </div>
              <User className="w-8 h-8 text-orange-400" />
            </div>
            {(stats?.pendingBookings || 0) > 0 && (
              <div className="absolute top-2 right-2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Bookings Table */}
      <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
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
                    <TableHead className="text-gray-300">Amount</TableHead>
                    <TableHead className="text-gray-300">Reference</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id} className={booking.status === 'pending' ? 'bg-yellow-900/10' : ''}>
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
                      <TableCell className="text-white font-bold">
                        {formatCurrency(booking.totalAmount)}
                      </TableCell>
                      <TableCell>
                        {booking.transactions?.[0]?.referenceNumber ? (
                          <div className="text-blue-400 font-mono text-sm">
                            {(booking as any).transactions?.[0]?.referenceNumber}
                          </div>
                        ) : (
                          <span className="text-gray-500 text-sm">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            booking.status === 'confirmed' ? 'default' :
                            booking.status === 'pending' ? 'secondary' : 'destructive'
                          }
                          className={booking.status === 'pending' ? 'animate-pulse' : ''}
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {booking.status === 'pending' && booking.transactions?.[0]?.screenshotPath && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => viewReceipt(booking)}
                                className="bg-blue-600 hover:bg-blue-700"
                                title="View Receipt"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => handleConfirmPayment(booking)}
                                className="bg-green-600 hover:bg-green-700"
                                disabled={confirmPayment.isPending}
                                title="Confirm Payment & Send Email"
                              >
                                {confirmPayment.isPending ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <CheckCircle className="w-4 h-4" />
                                )}
                              </Button>
                            </>
                          )}
                          {booking.status !== 'cancelled' && (
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                              title="Cancel Booking"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                            disabled={deleteBooking.isPending}
                            title="Delete Booking"
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

      {/* Receipt Preview Modal */}
      <Dialog open={showReceiptModal} onOpenChange={setShowReceiptModal}>
        <DialogContent className="sm:max-w-2xl bg-black/95 backdrop-blur-md border-purple-500/30">
          <DialogHeader>
            <DialogTitle className="text-white">Payment Receipt Preview</DialogTitle>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4">
              {/* Booking Info */}
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-bold mb-2">Booking Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-400">Customer:</div>
                  <div className="text-white">{selectedBooking.customerName}</div>
                  <div className="text-gray-400">Date:</div>
                  <div className="text-white">{formatDate(selectedBooking.date)}</div>
                  <div className="text-gray-400">Time:</div>
                  <div className="text-white">{selectedBooking.time}</div>
                  <div className="text-gray-400">Amount:</div>
                  <div className="text-white font-bold">{formatCurrency(selectedBooking.totalAmount)}</div>
                  <div className="text-gray-400">Reference:</div>
                  <div className="text-blue-400 font-mono">{selectedBooking.transactions?.[0]?.referenceNumber || 'N/A'}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowReceiptModal(false)}
                  variant="outline"
                  className="flex-1 bg-black border-gray-600 text-white hover:bg-gray-800"
                >
                  Close
                </Button>
                {selectedBooking.transactions?.[0]?.id && (
                  <>
                    <Button
                      onClick={() => downloadReceipt.mutate(selectedBooking.transactions![0].id)}
                      className="flex-1 bg-blue border-pink text-white hover:bg-gray-800"
                      disabled={downloadReceipt.isPending}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Receipt
                    </Button>
                    {selectedBooking.status === 'confirmed' && (
                      <Button
                        onClick={() => {
                          handleDeleteReceipt(selectedBooking.transactions![0].id);
                          setShowReceiptModal(false);
                        }}
                        variant="destructive"
                        disabled={deleteReceiptMutation.isPending}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Delete File
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}