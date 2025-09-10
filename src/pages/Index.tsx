import React from 'react';
import { Navbar } from '@/components/Navbar';
import { MetricCard } from '@/components/MetricCard';
import { FilterButtons } from '@/components/FilterButtons';
import { ApplicationsTable } from '@/components/ApplicationsTable';

const Index = () => {
  const metrics = [
    {
      number: "10",
      title: "Approved Applications",
      subtitle: "$12,000"
    },
    {
      number: "10", 
      title: "Rejected Applications",
      subtitle: "$12,000"
    },
    {
      number: "10",
      title: "In-Review Applications", 
      subtitle: "$12,000"
    },
    {
      number: "10",
      title: "Applications Received",
      subtitle: "$12,000"
    },
    {
      number: "",
      title: "Average Time to Decision",
      subtitle: "20s"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 space-y-8">
          <header>
            <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Monitor your loan applications and performance metrics</p>
          </header>

          <FilterButtons />

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                number={metric.number}
                title={metric.title}
                subtitle={metric.subtitle}
              />
            ))}
          </section>

          <ApplicationsTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
