import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { TermsSection } from './components/TermsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Check if admin is already logged in on app load
  useEffect(() => {
    const adminSession = localStorage.getItem('isAdminLoggedIn');
    if (adminSession === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleAdminLoginClick = () => {
    setIsAdminLoginOpen(true);
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  // If admin is logged in, show the admin dashboard
  if (isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <AdminDashboard onLogout={handleAdminLogout} />
        
        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: 'white',
            },
          }}
        />
      </div>
    );
  }

  // Default customer-facing website
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation onAdminLoginClick={handleAdminLoginClick} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <BookingSection />
        <TermsSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Admin Login Modal */}
      <AdminLogin 
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLogin={handleAdminLogin}
      />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            color: 'white',
          },
        }}
      />
    </div>
  );
}