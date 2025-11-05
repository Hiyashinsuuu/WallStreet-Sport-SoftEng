import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Clock, Check, CalendarIcon, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAvailableSlots, useInitiatePayment, TimeSlot } from '../api/hooks';

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
  const [bookingReference, setBookingReference] = useState('');

  // TanStack Query Hooks
  const dateStr = selectedDate?.toISOString().split('T')[0];
  const { data: timeSlots = [], isLoading: loadingSlots, error: slotsError } = useAvailableSlots(dateStr);
  const initiatePayment = useInitiatePayment();

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setBookingForm(prev => ({ ...prev, date, timeSlot: null }));
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

  const handleConfirmBooking = async () => {
    const amount = bookingForm.timeSlot?.rate || 0;

    try {
      const result = await initiatePayment.mutateAsync({
        amount,
        booking: {
          name: bookingForm.name,
          email: bookingForm.email,
          contact: bookingForm.contact,
          date: bookingForm.date!.toISOString().split('T')[0],
          timeSlot: {
            time: bookingForm.timeSlot!.time,
            displayTime: bookingForm.timeSlot!.displayTime,
            rate: bookingForm.timeSlot!.rate,
            period: bookingForm.timeSlot!.period
          }
        }
      });

      setBookingReference(result.bookingReference);
      setCurrentStep('receipt');
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
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
              {/* Calendar */}
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
                    disabled={(date: Date) => date < new Date()}
                    className="w-full rounded-md border border-purple-500/30 bg-black/30 text-white"
                  />
                </CardContent>
              </Card>

              {/* Time Slots */}
              <Card className="bg-black/50 backdrop-blur-md border-purple-500/30">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-pink-400" />
                    Available Time Slots for {formatDate(selectedDate)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!selectedDate ? (
                    <div className="text-center py-12">
                      <CalendarIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">Please select a date first</p>
                    </div>
                  ) : loadingSlots ? (
                    <div className="text-center py-12">
                      <Loader2 className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-spin" />
                      <p className="text-gray-400">Loading available slots...</p>
                    </div>
                  ) : slotsError ? (
                    <div className="text-center py-12">
                      <p className="text-red-400">Failed to load slots. Please try again.</p>
                    </div>
                  ) : (
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
                              <Badge 
                                variant={
                                  slot.period === 'evening' ? 'destructive' : 
                                  slot.period === 'afternoon' ? 'default' : 
                                  'secondary'
                                } 
                                className="text-xs"
                              >
                                {slot.period === 'evening' ? 'Premium' : 
                                slot.period === 'afternoon' ? 'Standard' : 
                                'Standard'}
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
                    onCheckedChange={(checked: boolean | "indeterminate") => setBookingForm(prev => ({ ...prev, agreedToTerms: checked as boolean }))}
                  />
                  <Label htmlFor="terms" className="text-white text-sm">
                    I agree to the Terms and Conditions of WallStreet Sport.
                  </Label>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setCurrentStep('calendar')}
                    variant="outline"
                    className="flex-1 bg-black text-white hover:bg-gray-800"
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
                <CardTitle className="text-white text-center">Confirm Your Booking</CardTitle>
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
                    className="flex-1 bg-black border-gray-600 text-white hover:bg-gray-800"
                    disabled={initiatePayment.isPending}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleConfirmBooking}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                    disabled={initiatePayment.isPending}
                  >
                    {initiatePayment.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Confirm & Pay via GCash'
                    )}
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
                  Booking Confirmed!
                </CardTitle>
                <p className="text-gray-300 text-center">Your payment is being processed. Reference: {bookingReference}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
                  <div className="grid gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Booking Reference:</span>
                      <span className="text-pink-400 font-bold">{bookingReference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white font-bold">{formatDate(bookingForm.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white font-bold">{bookingForm.timeSlot?.displayTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount:</span>
                      <span className="text-green-400 font-bold">PHP {bookingForm.timeSlot?.rate}</span>
                    </div>
                  </div>
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
                  Book Another Slot
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