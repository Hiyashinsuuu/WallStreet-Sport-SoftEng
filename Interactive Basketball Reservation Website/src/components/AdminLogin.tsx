import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useLogin } from '../api/hooks';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function AdminLogin({ isOpen, onClose, onLogin }: AdminLoginProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await loginMutation.mutateAsync(credentials);
      onLogin();
      onClose();
      setCredentials({ username: '', password: '' });
    } catch (error) {
      // Error handled by mutation
    }
  };

  const handleClose = () => {
    onClose();
    setCredentials({ username: '', password: '' });
    setShowPassword(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-black/95 backdrop-blur-md border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-white text-center flex items-center justify-center gap-2">
            <Lock className="w-5 h-5 text-pink-400" />
            Admin Login
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center">
            Enter your admin credentials to access the dashboard
          </DialogDescription>
        </DialogHeader>
        
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="pl-10 bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-400"
                    placeholder="Enter admin username"
                    required
                    disabled={loginMutation.isPending}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="pl-10 pr-10 bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-400"
                    placeholder="Enter admin password"
                    required
                    disabled={loginMutation.isPending}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    disabled={loginMutation.isPending}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 bg-black border-gray-600 text-white hover:bg-gray-800"
                  disabled={loginMutation.isPending}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
              </div>
            </form>

          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}