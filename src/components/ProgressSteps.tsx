import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  status: 'completed' | 'current' | 'pending';
}

interface ProgressStepsProps {
  steps: Step[];
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps }) => {
  return (
    <div className="self-center flex w-[1296px] max-w-full flex-col items-center px-36 max-md:px-5">
      <div className="flex w-full max-w-[1008px] items-stretch gap-4 flex-wrap pb-5 max-md:max-w-full">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-stretch flex-1 grow shrink basis-auto">
            <div className="flex flex-col items-stretch text-sm text-muted-foreground font-normal whitespace-nowrap text-center leading-none">
              {step.status === 'completed' ? (
                <div className="aspect-[1] w-6 h-6 self-center bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : (
                <div className={`justify-center items-center self-center flex w-6 flex-col overflow-hidden h-6 px-[5px] rounded-xl ${
                  step.status === 'current'
                    ? 'shadow-[0_0_0_4px_hsl(var(--primary)/0.2)] bg-primary/10 border-2 border-primary'
                    : 'bg-muted border-2 border-border'
                }`}>
                  <div className={`flex w-full shrink-0 h-2 bg-background rounded-full ${
                    step.status === 'current' ? 'bg-primary' : ''
                  }`} />
                </div>
              )}
              <div className={`w-full mt-3 pt-0.5 ${
                step.status === 'current' ? 'text-primary font-medium' : 
                step.status === 'completed' ? 'text-green-600 font-medium' : 'text-muted-foreground'
              }`}>
                <div>{step.label}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex mr-[-120px] w-64 shrink-0 max-w-full h-0.5 mt-[11px] ${
                step.status === 'completed' ? 'bg-green-600' : 'bg-border'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};