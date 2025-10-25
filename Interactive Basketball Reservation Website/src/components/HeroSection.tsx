import { Button } from './ui/button';
import basketballCourtImage from 'figma:asset/597c9694f1b85c3f5d603494e54df2da21a22433.png';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('${basketballCourtImage}')`
        }}
      />



      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-pink-500 via-orange-500 to-blue-400 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105" 
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 20, 147, 0.6)) drop-shadow(0 0 40px rgba(50, 205, 50, 0.4))',
              background: 'linear-gradient(90deg, #32CD32, #FF1493, #FF8C00, #1E90FF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text'
            }}>
          Play More, Worry Less!
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Check availability, lock your time, and enjoy a stress-free play.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('booking')}
            className="relative group bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 hover:from-pink-400 hover:via-orange-400 hover:to-yellow-300 text-black font-bold px-10 py-5 rounded-xl shadow-[0_0_30px_rgba(255,20,147,0.6)] hover:shadow-[0_0_50px_rgba(255,20,147,0.9)] transform transition-all duration-300 hover:scale-110 text-lg overflow-hidden animate-pulse hover:animate-none"
            style={{
              boxShadow: '0 0 30px rgba(255, 20, 147, 0.6), 0 0 60px rgba(255, 165, 0, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
              filter: 'brightness(1.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out transform -translate-x-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-xl group-hover:animate-ping"></div>
            <span className="relative z-10 drop-shadow-md">Reserve Your Slot</span>
          </Button>
          
          <Button 
            onClick={() => scrollToSection('services')}
            variant="outline"
            className="relative group border-3 border-lime-400 bg-gradient-to-r from-lime-400/10 via-blue-500/10 to-purple-500/10 hover:from-lime-400/20 hover:via-blue-500/20 hover:to-purple-500/20 text-lime-300 hover:text-lime-200 font-bold px-10 py-5 rounded-xl shadow-[0_0_25px_rgba(50,205,50,0.5)] hover:shadow-[0_0_40px_rgba(50,205,50,0.8)] transform transition-all duration-300 hover:scale-110 text-lg overflow-hidden backdrop-blur-sm"
            style={{
              borderColor: 'rgba(50, 205, 50, 0.8)',
              boxShadow: '0 0 25px rgba(50, 205, 50, 0.5), 0 0 50px rgba(50, 205, 50, 0.3), inset 0 0 15px rgba(50, 205, 50, 0.1)',
              background: 'linear-gradient(135deg, rgba(50, 205, 50, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400/30 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-out transform -translate-x-full"></div>
            <div className="absolute inset-0 border border-lime-400/40 rounded-xl group-hover:animate-pulse"></div>
            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(50,205,50,0.8)]">View Schedule</span>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group bg-black/40 backdrop-blur-md rounded-xl p-6 border border-pink-500/40 hover:border-pink-400/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,20,147,0.4)]">
            <h3 className="text-4xl font-black text-pink-400 group-hover:text-pink-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,20,147,0.8)]">24/7</h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">Online Booking</p>
          </div>
          <div className="group bg-black/40 backdrop-blur-md rounded-xl p-6 border border-orange-500/40 hover:border-orange-400/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.4)]">
            <h3 className="text-4xl font-black text-orange-400 group-hover:text-orange-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]">PHP 500</h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">Starting Rate</p>
          </div>
          <div className="group bg-black/40 backdrop-blur-md rounded-xl p-6 border border-blue-500/40 hover:border-blue-400/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <h3 className="text-4xl font-black text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">100%</h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">Secure Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}