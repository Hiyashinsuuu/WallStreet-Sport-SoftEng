import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Smartphone, Banknote, Zap, Coffee } from 'lucide-react';

export function ServicesSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 bg-gradient-to-br from-purple-900/80 via-blue-900/60 via-pink-900/40 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-pink-500 to-orange-400 mb-3 text-[48px] hover:scale-105 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(50, 205, 50, 0.6)) drop-shadow(0 0 25px rgba(255, 20, 147, 0.4))'
              }}>
            Affordable Rates, Prime Court Time
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Book your court time with ease at competitive rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Standard Rate */}
          <Card className="group bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-2 border-blue-500/40 backdrop-blur-md hover:border-blue-400/80 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-blue-500/90 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                Standard
              </Badge>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-white text-lg text-[20px] font-bold group-hover:text-blue-200 transition-colors duration-300">Morning & Afternoon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-4xl font-black text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">PHP 500</span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">/hour</span>
              </div>
              <p className="text-gray-300 mb-2 font-bold group-hover:text-gray-200 transition-colors duration-300">8:00 AM – 4:00 PM</p>
              <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                Perfect for daytime games and practice sessions
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                <Clock className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span>8 hours available</span>
              </div>
            </CardContent>
          </Card>

          {/* Premium Rate */}
          <Card className="group bg-gradient-to-br from-orange-900/40 to-pink-900/40 border-2 border-orange-500/40 backdrop-blur-md hover:border-orange-400/80 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold shadow-[0_0_15px_rgba(255,165,0,0.6)]">
                Premium
              </Badge>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-white text-lg text-[20px] font-bold group-hover:text-orange-200 transition-colors duration-300">Evening & Night</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-4xl font-black text-orange-400 group-hover:text-orange-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]">PHP 650</span>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">/hour</span>
              </div>
              <p className="text-gray-300 mb-2 font-bold group-hover:text-gray-200 transition-colors duration-300">5:00 PM – 11:00 PM</p>
              <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                Prime time for after-work games and tournaments
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                <Clock className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                <span>6 hours available</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Options */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border-2 border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 text-center drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">Payment Options</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="group flex items-center gap-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-4 rounded-lg border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <Smartphone className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <div>
                <h4 className="text-white font-bold text-sm group-hover:text-blue-200 transition-colors duration-300">GCash</h4>
                <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-300">Instant digital payment</p>
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-gradient-to-r from-lime-500/30 to-yellow-500/30 p-4 rounded-lg border border-lime-500/30 hover:border-lime-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(50,205,50,0.4)]">
              <Banknote className="w-7 h-7 text-lime-400 group-hover:text-lime-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(50,205,50,0.6)]" />
              <div>
                <h4 className="text-white font-bold text-sm group-hover:text-lime-200 transition-colors duration-300">Cash on Site</h4>
                <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-300">Pay when you arrive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Need a Basketball */}
          <Card className="group bg-gradient-to-br from-orange-800/30 to-pink-800/30 border-orange-500/50 backdrop-blur-md hover:border-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-orange-500 text-white">
                ₱100
              </Badge>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-white text-lg font-bold flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                Need a Basketball?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-3xl font-black text-orange-400">PHP 100</span>
                <span className="text-gray-400"> rental</span>
              </div>
              <p className="text-gray-300 mb-2 font-bold">Professional basketball rental</p>
              <p className="text-sm text-gray-400 mb-4">
                High-quality basketballs available for rent
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>Always available</span>
              </div>
            </CardContent>
          </Card>

          {/* Food and Drinks */}
          <Card className="group bg-gradient-to-br from-green-800/30 to-blue-800/30 border-green-500/50 backdrop-blur-md hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(50,205,50,0.5)] relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-500 text-white">
                Allowed
              </Badge>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-white text-lg font-bold flex items-center justify-center gap-2">
                <Coffee className="w-5 h-5 text-green-400" />
                Food & Drinks Allowed
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-3xl font-black text-green-400">WELCOME</span>
                <span className="text-gray-400"> policy</span>
              </div>
              <p className="text-gray-300 mb-2 font-bold">Bring your own refreshments</p>
              <p className="text-sm text-gray-400 mb-4">
                Stay hydrated and energized during your game
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <Coffee className="w-4 h-4 text-green-400" />
                <span>Always welcome</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}