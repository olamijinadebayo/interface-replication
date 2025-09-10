import React from 'react';

interface Tab {
  id: string;
  label: string;
  isActive: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, onTabChange }) => {
  return (
    <nav className="flex w-full items-center gap-1 text-base text-muted-foreground font-medium flex-wrap max-md:max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`items-center self-stretch flex gap-2 overflow-hidden my-auto px-3 py-2 rounded-md transition-colors ${
            tab.isActive
              ? 'text-foreground bg-muted'
              : 'text-muted-foreground bg-background hover:bg-muted/50'
          }`}
        >
          <div className="self-stretch flex items-center gap-3 my-auto">
            <div className={`self-stretch my-auto ${
              tab.isActive ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {tab.label}
            </div>
          </div>
        </button>
      ))}
    </nav>
  );
};