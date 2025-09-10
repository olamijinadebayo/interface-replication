import React from 'react';
import { Calendar, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CashFlowChart: React.FC = () => {
  const chartData = {
    averageDailyInflow: '$12,000',
    averageDailyOutflow: '$12,000',
    totalInflow: '$12,000',
    totalOutflow: '$12,000'
  };

  return (
    <div className="space-y-6">
      {/* Date Range and Account Selector */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">Jan 6, 2022 - Jan 13, 2022</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
          <span className="text-sm">One account Selected</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
          <span className="text-sm">Checkings(192829031)</span>
          <X className="h-4 w-4" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Chart Area */}
        <div className="space-y-6">
          {/* Legend */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Inflow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Outflow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Est. Net Income</span>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="grid grid-cols-12 gap-2 h-32">
                {/* Mock chart bars */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="space-y-1">
                    <div className="bg-yellow-400 h-16 w-full rounded-sm opacity-80"></div>
                    <div className="bg-green-500 h-8 w-full rounded-sm opacity-80"></div>
                    <div className="bg-red-500 h-4 w-full rounded-sm opacity-80"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Average Daily Inflow</div>
              <div className="text-lg font-semibold text-green-600">{chartData.averageDailyInflow}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Average Daily Outflow</div>
              <div className="text-lg font-semibold text-red-600">{chartData.averageDailyOutflow}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Inflow</div>
              <div className="text-lg font-semibold text-green-600">{chartData.totalInflow}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Outflow</div>
              <div className="text-lg font-semibold text-red-600">{chartData.totalOutflow}</div>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Inflow Category</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-48 h-48 mx-auto">
              {/* Donut chart placeholder */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="30"
                  strokeDasharray="200 300"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="30"
                  strokeDasharray="100 400"
                  strokeDashoffset="-200"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="30"
                  strokeDasharray="50 450"
                  strokeDashoffset="-300"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="30"
                  strokeDasharray="50 450"
                  strokeDashoffset="-350"
                />
              </svg>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Item 1</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Item 2</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Item 3</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Item 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};