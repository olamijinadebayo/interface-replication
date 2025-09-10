import React from 'react';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: 'submitted' | 'in-review' | 'approved' | 'funded';
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { key: 'submitted', label: 'Submitted' },
    { key: 'in-review', label: 'In Review' },
    { key: 'approved', label: 'Approved' },
    { key: 'funded', label: 'Funded' }
  ];

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.key === currentStep);
  };

  const currentIndex = getCurrentStepIndex();

  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-8">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isUpcoming = index > currentIndex;

        return (
          <div key={step.key} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isCurrent
                    ? 'bg-green-500 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <div className="w-2 h-2 bg-current rounded-full" />
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  isCompleted || isCurrent
                    ? 'text-green-600'
                    : 'text-muted-foreground'
                }`}
              >
                {step.label}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div
                className={`w-24 h-0.5 mx-4 ${
                  index < currentIndex
                    ? 'bg-green-500'
                    : 'bg-muted'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};