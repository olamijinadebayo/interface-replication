import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="self-stretch w-full overflow-hidden bg-background px-8 border-b border-border max-md:max-w-full max-md:px-5">
      <div className="flex min-h-[72px] w-full items-center gap-[40px_100px] justify-between flex-wrap px-8 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 items-center gap-4 my-auto max-md:max-w-full">
          <div className="self-stretch flex items-center gap-[5px] my-auto">
            <div className="w-8 h-8 bg-foreground text-background rounded flex items-center justify-center font-bold text-sm">
              C
            </div>
            <span className="font-semibold text-lg ml-2">Caelo</span>
          </div>
          <nav className="self-stretch flex min-w-60 items-center gap-1 text-base text-muted-foreground font-medium whitespace-nowrap my-auto">
            <Link to="/" className="items-center self-stretch flex gap-2 overflow-hidden text-foreground bg-muted my-auto px-3 py-2 rounded-md">
              <div className="self-stretch flex items-center gap-3 my-auto">
                <div className="text-foreground self-stretch my-auto">
                  Dashboard
                </div>
              </div>
            </Link>
            <button className="items-center self-stretch flex gap-2 overflow-hidden bg-background my-auto px-3 py-2 rounded-md hover:bg-muted/50">
              <div className="self-stretch flex items-center gap-3 my-auto">
                <div className="text-muted-foreground self-stretch my-auto">
                  Borrowers
                </div>
              </div>
            </button>
            <button className="items-center self-stretch flex gap-2 overflow-hidden bg-background my-auto px-3 py-2 rounded-md hover:bg-muted/50">
              <div className="self-stretch flex items-center gap-3 my-auto">
                <div className="text-muted-foreground self-stretch my-auto">
                  Portfolio
                </div>
              </div>
            </button>
          </nav>
        </div>
        <div className="self-stretch flex items-center gap-4 my-auto">
          <div className="self-stretch flex gap-1 my-auto">
            <button className="items-center flex gap-[40px_105px] overflow-hidden w-10 h-10 bg-background p-2.5 rounded-md hover:bg-muted/50 border border-border">
              <Bell className="aspect-[1] w-5 h-5 text-muted-foreground" />
            </button>
            <button className="items-center flex gap-[40px_105px] overflow-hidden w-10 h-10 bg-background p-2.5 rounded-md hover:bg-muted/50 border border-border">
              <Settings className="aspect-[1] w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <button className="self-stretch w-10 h-10 my-auto bg-muted rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};