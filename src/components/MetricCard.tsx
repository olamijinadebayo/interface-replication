import React from 'react';

interface MetricCardProps {
  number: string;
  title: string;
  subtitle: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ number, title, subtitle }) => {
  return (
    <div className="flex flex-col items-start flex-[1_0_0] border shadow-[0_1px_3px_0_rgba(16,24,40,0.10),0_1px_2px_0_rgba(16,24,40,0.06)] relative bg-white rounded-lg border-solid border-[#EAECF0]">
      <div className="flex flex-col items-start gap-2 self-stretch relative p-6 max-md:min-w-[800px] max-sm:min-w-[600px]">
        <div className="flex items-center gap-4 self-stretch relative">
          <div className="flex-[1_0_0] text-[#101828] text-[28px] font-semibold leading-[42px] tracking-[-0.56px] relative">
            <div className="font-bold text-[28px] text-[rgba(16,24,40,1)]">
              {number}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 relative">
            <div className="text-[#101828] text-right text-sm font-medium leading-5 relative">
              <div className="font-normal text-sm text-[rgba(16,24,40,1)]">
                {title}
              </div>
            </div>
            <div className="text-[#667085] text-right text-sm font-medium leading-5 relative">
              <div className="font-normal text-sm text-[rgba(102,112,133,1)]">
                {subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
