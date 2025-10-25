import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Clock, Check, X, CalendarIcon } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface TimeSlot {
  time: string;
  displayTime: string;
  rate: number;
  available: boolean;
  period: 'morning' | 'evening';
}

interface BookingForm {
  name: string;
  contact: string;
  email: string;
  date: Date | undefined;
  timeSlot: TimeSlot | null;
  agreedToTerms: boolean;
}

export function BookingSection() {
  const [currentStep, setCurrentStep] = useState<'calendar' | 'form' | 'confirmation' | 'receipt'>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: '',
    contact: '',
    email: '',
    date: undefined,
    timeSlot: null,
    agreedToTerms: false
  });

  const timeSlots: TimeSlot[] = [
    { time: '08:00-09:00', displayTime: '8:00 AM - 9:00 AM', rate: 500, available: true, period: 'morning' },
    { time: '09:00-10:00', displayTime: '9:00 AM - 10:00 AM', rate: 500, available: true, period: 'morning' },
    { time: '10:00-11:00', displayTime: '10:00 AM - 11:00 AM', rate: 500, available: false, period: 'morning' },
    { time: '11:00-12:00', displayTime: '11:00 AM - 12:00 PM', rate: 500, available: true, period: 'morning' },
    { time: '12:00-13:00', displayTime: '12:00 PM - 1:00 PM', rate: 500, available: false, period: 'morning' },
    { time: '13:00-14:00', displayTime: '1:00 PM - 2:00 PM', rate: 500, available: true, period: 'morning' },
    { time: '14:00-15:00', displayTime: '2:00 PM - 3:00 PM', rate: 500, available: true, period: 'morning' },
    { time: '15:00-16:00', displayTime: '3:00 PM - 4:00 PM', rate: 500, available: true, period: 'morning' },
    { time: '17:00-18:00', displayTime: '5:00 PM - 6:00 PM', rate: 650, available: true, period: 'evening' },
    { time: '18:00-19:00', displayTime: '6:00 PM - 7:00 PM', rate: 650, available: false, period: 'evening' },
    { time: '19:00-20:00', displayTime: '7:00 PM - 8:00 PM', rate: 650, available: true, period: 'evening' },
    { time: '20:00-21:00', displayTime: '8:00 PM - 9:00 PM', rate: 650, available: true, period: 'evening' },
    { time: '21:00-22:00', displayTime: '9:00 PM - 10:00 PM', rate: 650, available: true, period: 'evening' },
    { time: '22:00-23:00', displayTime: '10:00 PM - 11:00 PM', rate: 650, available: true, period: 'evening' },
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setBookingForm(prev => ({ ...prev, date }));
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    if (!slot.available) return;
    setBookingForm(prev => ({ ...prev, timeSlot: slot }));
  };

  const handleFormSubmit = () => {
    if (!bookingForm.name || !bookingForm.contact || !bookingForm.email || !bookingForm.agreedToTerms) {
      toast.error('Please fill in all required fields and agree to terms');
      return;
    }
    setCurrentStep('confirmation');
  };

  const handleConfirmBooking = () => {
    // Simulate booking confirmation
    toast.success('Booking confirmed! Redirecting to payment...');
    setTimeout(() => {
      setCurrentStep('receipt');
    }, 2000);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const generateBookingRef = () => {
    return `WS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-black via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613894811137-b5ee44ba3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxncmFmZml0aSUyMHdhbGwlMjB1cmJhbiUyMGFydHxlbnwxfHx8fDE3NTczODczODN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-pink-500 via-orange-500 to-blue-400 mb-4 hover:scale-105 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(50, 205, 50, 0.6)) drop-shadow(0 0 30px rgba(255, 20, 147, 0.4))'
              }}>
            <div className="text-[48px]">Simple, Fast, and Secure</div>
          </h2>
          <p className="text-xl text-gray-300">
            Reserve your slot in 3 easy steps.
          </p>
        </div>



        {/* Step Indicators */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2 lg:space-x-4 w-full">
            {/* Step 1 */}
            <div className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 transform hover:scale-105 cursor-pointer group px-3 py-2 rounded-lg hover:bg-white/5 ${
              currentStep === 'calendar' ? 'text-pink-400' : 
              currentStep === 'form' || currentStep === 'confirmation' || currentStep === 'receipt' ? 'text-lime-400' : 
              'text-gray-400 hover:text-gray-300'
            }`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl ${
                currentStep === 'calendar' ? 'bg-gradient-to-r from-pink-500 to-orange-500 shadow-[0_0_20px_rgba(255,20,147,0.6)] animate-pulse' : 
                currentStep === 'form' || currentStep === 'confirmation' || currentStep === 'receipt' ? 'bg-gradient-to-r from-lime-500 to-yellow-500 shadow-[0_0_20px_rgba(50,205,50,0.6)]' : 
                'bg-gray-600 group-hover:bg-gray-500 shadow-gray-600/20'
              }`}>
                {currentStep === 'form' || currentStep === 'confirmation' || currentStep === 'receipt' ? 
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 animate-in zoom-in duration-300" /> : 
                  <span className="font-bold text-sm sm:text-base">1</span>
                }
              </div>
              <span className="font-bold text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Check Availability</span>
            </div>

            {/* Connector 1 */}
            <div className="flex items-center justify-center sm:block">
              <div className={`w-0.5 h-8 sm:w-8 lg:w-12 sm:h-0.5 transition-all duration-500 ${
                currentStep === 'form' || currentStep === 'confirmation' || currentStep === 'receipt' ? 
                'bg-gradient-to-r from-lime-500 to-yellow-500 shadow-sm shadow-[0_0_10px_rgba(50,205,50,0.6)]' : 
                'bg-gray-600'
              }`}></div>
            </div>

            {/* Step 2 */}
            <div className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 transform hover:scale-105 cursor-pointer group px-3 py-2 rounded-lg hover:bg-white/5 ${
              currentStep === 'form' ? 'text-orange-400' : 
              currentStep === 'confirmation' || currentStep === 'receipt' ? 'text-lime-400' : 
              'text-gray-400 hover:text-gray-300'
            }`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl ${
                currentStep === 'form' ? 'bg-gradient-to-r from-orange-500 to-pink-500 shadow-[0_0_20px_rgba(255,165,0,0.6)] animate-pulse' : 
                currentStep === 'confirmation' || currentStep === 'receipt' ? 'bg-gradient-to-r from-lime-500 to-yellow-500 shadow-[0_0_20px_rgba(50,205,50,0.6)]' : 
                'bg-gray-600 group-hover:bg-gray-500 shadow-gray-600/20'
              }`}>
                {currentStep === 'confirmation' || currentStep === 'receipt' ? 
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 animate-in zoom-in duration-300" /> : 
                  <span className="font-bold text-sm sm:text-base">2</span>
                }
              </div>
              <span className="font-bold text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Reserve Slot</span>
            </div>

            {/* Connector 2 */}
            <div className="flex items-center justify-center sm:block">
              <div className={`w-0.5 h-8 sm:w-8 lg:w-12 sm:h-0.5 transition-all duration-500 ${
                currentStep === 'confirmation' || currentStep === 'receipt' ? 
                'bg-gradient-to-r from-lime-500 to-yellow-500 shadow-sm shadow-[0_0_10px_rgba(50,205,50,0.6)]' : 
                'bg-gray-600'
              }`}></div>
            </div>

            {/* Step 3 */}
            <div className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 transform hover:scale-105 cursor-pointer group px-3 py-2 rounded-lg hover:bg-white/5 ${
              currentStep === 'confirmation' ? 'text-blue-400' : 
              currentStep === 'receipt' ? 'text-lime-400' : 
              'text-gray-400 hover:text-gray-300'
            }`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl ${
                currentStep === 'confirmation' ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse' : 
                currentStep === 'receipt' ? 'bg-gradient-to-r from-lime-500 to-yellow-500 shadow-[0_0_20px_rgba(50,205,50,0.6)]' : 
                'bg-gray-600 group-hover:bg-gray-500 shadow-gray-600/20'
              }`}>
                {currentStep === 'receipt' ? 
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 animate-in zoom-in duration-300" /> : 
                  <span className="font-bold text-sm sm:text-base">3</span>
                }
              </div>
              <span className="font-bold text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Pay & Confirm</span>
            </div>
          </div>
        </div>

        {/* Booking Interface */}
        <div className="max-w-6xl mx-auto">
          {currentStep === 'calendar' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6">
              {/* Calendar - Full Width */}
              <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-pink-400" />
                    Select a Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                    className="w-full rounded-md border border-purple-500/30 bg-black/30 text-white"
                  />
                </CardContent>
              </Card>

              {/* Time Slots - Expanded Right Side */}
              <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-pink-400" />
                    Available Time Slots for {formatDate(selectedDate)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => handleTimeSlotSelect(slot)}
                          disabled={!slot.available}
                          className={`w-full p-3 rounded-lg border-2 transition-all duration-200 ${
                            slot.available
                              ? bookingForm.timeSlot?.time === slot.time
                                ? 'border-pink-500 bg-pink-500/20 text-white'
                                : 'border-gray-600 bg-gray-800/50 text-white hover:border-pink-400 hover:bg-pink-400/10'
                              : 'border-gray-700 bg-gray-900/50 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="font-bold text-sm">{slot.displayTime}</div>
                              <div className="text-xs text-gray-400">PHP {slot.rate}/hour</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={slot.period === 'evening' ? 'destructive' : 'secondary'} className="text-xs">
                                {slot.period === 'evening' ? 'Premium' : 'Standard'}
                              </Badge>
                              {slot.available ? (
                                <span className="text-green-400 text-xs">Available</span>
                              ) : (
                                <span className="text-red-400 text-xs">Booked</span>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <CalendarIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">Please select a date first</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 'form' && (
            <Card className="bg-black/50 backdrop-blur-md border-purple-500/30 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-center">Enter Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-gray-800/50 border-gray-600 text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact" className="text-white">Contact Number *</Label>
                    <Input
                      id="contact"
                      value={bookingForm.contact}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, contact: e.target.value }))}
                      className="bg-gray-800/50 border-gray-600 text-white"
                      placeholder="09XX XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-gray-800/50 border-gray-600 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Booking Summary */}
                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="text-white font-bold mb-2">Booking Summary</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{formatDate(bookingForm.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{bookingForm.timeSlot?.displayTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rate:</span>
                      <span>PHP {bookingForm.timeSlot?.rate}/hour</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={bookingForm.agreedToTerms}
                    onCheckedChange={(checked) => setBookingForm(prev => ({ ...prev, agreedToTerms: checked as boolean }))}
                  />
                  <Label htmlFor="terms" className="text-white text-sm">
                    By proceeding, I confirm that I have read and accepted the Terms and Conditions of WallStreet Sport.
                  </Label>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setCurrentStep('calendar')}
                    variant="outline"
                    className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleFormSubmit}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    Continue to Confirmation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 'confirmation' && (
            <Card className="bg-black/50 backdrop-blur-md border-purple-500/30 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-center">Your Slot Is Almost Locked In</CardTitle>
                <p className="text-gray-300 text-center">Here are the details of your reservation. Please review before confirming.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
                  <div className="grid gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white font-bold">{formatDate(bookingForm.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white font-bold">{bookingForm.timeSlot?.displayTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Rate:</span>
                      <span className="text-white font-bold">PHP {bookingForm.timeSlot?.rate}/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Name:</span>
                      <span className="text-white font-bold">{bookingForm.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Contact:</span>
                      <span className="text-white font-bold">{bookingForm.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Email:</span>
                      <span className="text-white font-bold">{bookingForm.email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setCurrentStep('form')}
                    variant="outline"
                    className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                  >
                    Cancel Reservation
                  </Button>
                  <Button
                    onClick={handleConfirmBooking}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                  >
                    Confirm & Pay via GCash
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 'receipt' && (
            <Card className="bg-black/50 backdrop-blur-md border-green-500/30 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-green-400 text-center flex items-center justify-center gap-2">
                  <Check className="w-6 h-6" />
                  Payment Successful — You're In!
                </CardTitle>
                <p className="text-gray-300 text-center">Your slot has been confirmed. Please keep this receipt for reference.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                  <div className="grid gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white font-bold">{formatDate(bookingForm.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white font-bold">{bookingForm.timeSlot?.displayTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Name:</span>
                      <span className="text-white font-bold">{bookingForm.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Rate:</span>
                      <span className="text-white font-bold">PHP {bookingForm.timeSlot?.rate}/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount Paid (Downpayment):</span>
                      <span className="text-green-400 font-bold">PHP {Math.floor((bookingForm.timeSlot?.rate || 0) / 2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Remaining Balance:</span>
                      <span className="text-yellow-400 font-bold">PHP {Math.ceil((bookingForm.timeSlot?.rate || 0) / 2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Booking Reference #:</span>
                      <span className="text-pink-400 font-bold">{generateBookingRef()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">GCash Transaction ID:</span>
                      <span className="text-blue-400 font-bold">GC{Math.random().toString().substr(2, 10)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Payment Date/Time:</span>
                      <span className="text-white font-bold">{new Date().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-300 text-sm text-center">
                    Show this receipt upon arrival at WallStreet Sport to verify your booking. First to pay always gets the slot.
                  </p>
                </div>

                <Button
                  onClick={() => {
                    setCurrentStep('calendar');
                    setBookingForm({
                      name: '',
                      contact: '',
                      email: '',
                      date: undefined,
                      timeSlot: null,
                      agreedToTerms: false
                    });
                    setSelectedDate(undefined);
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Back to Home
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Continue Button for Calendar Step */}
          {currentStep === 'calendar' && selectedDate && bookingForm.timeSlot && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setCurrentStep('form')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 text-lg"
              >
                Continue to Booking Form
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}