import React from 'react';
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
    <main className="w-full max-w-[1440px] relative bg-white mx-auto my-0 pt-[72px] pb-0 px-0">
      <header className="w-[374px] text-slate-950 text-xl font-medium leading-6 absolute h-6 left-[50px] top-7 max-md:static max-md:text-lg max-md:leading-[22px] max-md:mb-5 max-sm:text-base max-sm:leading-5 max-sm:px-4 max-sm:py-0">
        <h1 className="font-normal text-xl text-slate-950">Dashboard</h1>
      </header>

      <FilterButtons />

      <section className="flex w-[1340px] items-center gap-[11px] absolute h-24 left-[50px] top-20 max-md:static max-md:flex-col max-md:w-full max-md:gap-4 max-md:mb-5 max-sm:gap-3 max-sm:px-4 max-sm:py-0">
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
    </main>
  );
};

export default Index;
