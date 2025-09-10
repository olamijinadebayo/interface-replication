import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar, ChevronDown, X } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Sample data for the charts
const cashFlowData = [
  { month: "Jan", inflow: 24000, outflow: 18000, netIncome: 6000 },
  { month: "Feb", inflow: 26000, outflow: 19500, netIncome: 6500 },
  { month: "Mar", inflow: 28000, outflow: 21000, netIncome: 7000 },
  { month: "Apr", inflow: 25500, outflow: 18800, netIncome: 6700 },
  { month: "May", inflow: 24500, outflow: 18200, netIncome: 6300 },
  { month: "Jun", inflow: 27000, outflow: 20500, netIncome: 6500 },
  { month: "Jul", inflow: 29000, outflow: 22000, netIncome: 7000 },
  { month: "Aug", inflow: 26500, outflow: 19800, netIncome: 6700 },
  { month: "Sep", inflow: 25000, outflow: 19000, netIncome: 6000 },
  { month: "Oct", inflow: 27500, outflow: 21500, netIncome: 6000 },
  { month: "Nov", inflow: 28500, outflow: 22000, netIncome: 6500 },
  { month: "Dec", inflow: 30000, outflow: 23000, netIncome: 7000 },
];

const categoryData = [
  { name: "Salary", value: 65, color: "#f59e0b" },
  { name: "Investments", value: 20, color: "#10b981" },
  { name: "Business Income", value: 10, color: "#8b5cf6" },
  { name: "Other", value: 5, color: "#f97316" },
];

const chartConfig = {
  inflow: {
    label: "Inflow",
    color: "#10b981",
  },
  outflow: {
    label: "Outflow", 
    color: "#ef4444",
  },
  netIncome: {
    label: "Est. Net Income",
    color: "#f59e0b",
  },
};

export const CashFlowChart: React.FC = () => {
  const chartData = {
    averageDailyInflow: '$12,000',
    averageDailyOutflow: '$12,000',
    totalInflow: '$324,500',
    totalOutflow: '$244,200'
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

          {/* Line Chart */}
          <div className="h-64">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <LineChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  tickLine={false}
                  axisLine={false}
                  className="text-xs"
                />
                <YAxis 
                  tickLine={false}
                  axisLine={false}
                  className="text-xs"
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  formatter={(value: any) => [`$${value.toLocaleString()}`, ""]}
                />
                <Line 
                  type="monotone" 
                  dataKey="inflow" 
                  stroke="var(--color-inflow)" 
                  strokeWidth={2}
                  dot={{ fill: "var(--color-inflow)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "var(--color-inflow)", strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="outflow" 
                  stroke="var(--color-outflow)" 
                  strokeWidth={2}
                  dot={{ fill: "var(--color-outflow)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "var(--color-outflow)", strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="netIncome" 
                  stroke="var(--color-netIncome)" 
                  strokeWidth={2}
                  dot={{ fill: "var(--color-netIncome)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "var(--color-netIncome)", strokeWidth: 2 }}
                />
              </LineChart>
            </ChartContainer>
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
              <PieChart width={192} height={192}>
                <Pie
                  data={categoryData}
                  cx={96}
                  cy={96}
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-background border border-border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{data.name}</p>
                          <p className="text-sm text-muted-foreground">{data.value}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </div>
            
            <div className="mt-4 space-y-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span>{category.name} ({category.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};