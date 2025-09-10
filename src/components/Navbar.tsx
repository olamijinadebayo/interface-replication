import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  FileText, 
  BarChart3, 
  Users, 
  Settings, 
  Bell,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-lg">Caelo</span>
            </Link>
            
            {/* Main Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Link to="/">
                <Button 
                  variant={isActive('/') ? 'secondary' : 'ghost'} 
                  size="sm"
                  className="gap-2"
                >
                  Dashboard
                </Button>
              </Link>
              
              <Button variant="ghost" size="sm" className="gap-2">
                Borrowers
              </Button>
              
              <Button variant="ghost" size="sm" className="gap-2">
                Portfolio
              </Button>
            </div>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search applications..." 
                className="pl-9 w-64"
              />
            </div>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </Button>
            
            {/* Settings */}
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            
            {/* User Avatar */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">Loan Officer</div>
              </div>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};