import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Clock, Facebook, Mail } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-4 text-[48px]">
            More Than a Court — A Community
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            WallStreet Sport is dedicated to making basketball simple to play and easy to access. 
            With our online reservation system, you can check the schedule, book your slot, and focus on the game.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="h-full">
            <Card className="bg-black/50 backdrop-blur-md border-purple-500/30 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow overflow-auto">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:from-purple-900/40 hover:to-pink-900/40 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 group">
                  <MapPin className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-orange-300 group-hover:scale-110" />
                  <div>
                    <h3 className="text-white font-bold mb-1 transition-colors duration-300 group-hover:text-purple-200">Location</h3>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                      78 Corrales Extension Tapia Street<br />
                      Cagayan de Oro, 9000, Philippines
                    </p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:from-blue-900/40 hover:to-purple-900/40 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 group">
                  <Phone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-green-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div>
                    <h3 className="text-white font-bold mb-1 transition-colors duration-300 group-hover:text-blue-200">Contact Number</h3>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">0953 916 4621</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:from-green-900/40 hover:to-blue-900/40 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20 group">
                  <Clock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110 group-hover:animate-pulse" />
                  <div>
                    <h3 className="text-white font-bold mb-1 transition-colors duration-300 group-hover:text-green-200">Business Hours</h3>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Open Daily: 8:00 AM - 11:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:from-yellow-900/40 hover:to-orange-900/40 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 group">
                  <Mail className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-110 group-hover:-rotate-12" />
                  <div>
                    <h3 className="text-white font-bold mb-1 transition-colors duration-300 group-hover:text-yellow-200">Email</h3>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">srhjncmb@gmail.com</p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:from-blue-900/40 hover:to-indigo-900/40 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 group">
                  <Facebook className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110 group-hover:rotate-6" />
                  <div>
                    <h3 className="text-white font-bold mb-1 transition-colors duration-300 group-hover:text-blue-200">Facebook</h3>
                    <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">WallStreet Sport</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Placeholder */}
          <div className="h-full">
            <Card className="bg-black/50 backdrop-blur-md border-purple-500/30 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Find Us Here</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=8.495350351112936, 124.65569414197627&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
