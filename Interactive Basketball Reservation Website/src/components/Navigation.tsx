import { useState } from "react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/49d57715d8a1bdd3658b13a217a6b337c174af11.png";

interface NavigationProps {
  onAdminLoginClick: () => void;
}

export function Navigation({ onAdminLoginClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // close menu on navigation
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logoImage}
              alt="WALLSTREET"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-2xl transition-all duration-200 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {["home", "services", "booking", "terms", "about"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-white/90 hover:text-pink-400 font-medium transition-colors duration-200 cursor-pointer text-lg`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Admin Login Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Button
              onClick={onAdminLoginClick}
              className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-500 hover:to-purple-600 text-white font-medium px-6 py-2 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 transform transition-all duration-200 hover:scale-105 hover:shadow-pink-500/25 text-lg"
            >
              Admin
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {["home", "services", "booking", "terms", "about"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-white/90 hover:text-pink-400 font-medium transition-colors duration-200 cursor-pointer text-xl text-left`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <Button
              onClick={onAdminLoginClick}
              className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-500 hover:to-purple-600 text-white font-medium px-6 py-2 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 transform transition-all duration-200 hover:scale-105 hover:shadow-pink-500/25 text-lg w-full"
            >
              Admin
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}