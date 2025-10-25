import image_49d57715d8a1bdd3658b13a217a6b337c174af11 from 'figma:asset/49d57715d8a1bdd3658b13a217a6b337c174af11.png';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/6f38cc4834e96915dce6317f77e59ed28bdf9cae.png';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613894811137-b5ee44ba3cb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxncmFmZml0aSUyMHdhbGwlMjB1cmJhbiUyMGFydHxlbnwxfHx8fDE3NTczODczODN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src={image_49d57715d8a1bdd3658b13a217a6b337c174af11} 
                  alt="WALLSTREET - Street Basketball Court"
                  className="h-12 w-auto mr-3 drop-shadow-lg"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Making basketball accessible and enjoyable for everyone with our easy-to-use court reservation system.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-110"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('terms')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-6">
                Business Hours
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Monday to Sunday</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>8:00 AM to 11:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-bold text-sm">Open Daily</p>
                  <p className="text-gray-300 text-sm">No holidays, always ready for your game!</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">0953 916 4621</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">srhjncmb@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      78 Corrales Extension Tapia Street<br />
                      Cagayan de Oro, 9000, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 WallStreet Sport. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('terms')}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('terms')}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
}