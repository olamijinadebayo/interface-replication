import React from 'react';

interface StatusBadgeProps {
  status: 'approved' | 'rejected' | 'in-review' | 'active';
  text: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, text }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'approved':
        return {
          background: 'bg-[#ECFDF3]',
          text: 'text-[#027A48]',
          dot: '#12B76A'
        };
      case 'rejected':
        return {
          background: 'bg-[#FEF3F2]',
          text: 'text-[#B42318]',
          dot: '#F04438'
        };
      case 'in-review':
        return {
          background: 'bg-[#F8F9FC]',
          text: 'text-[#363F72]',
          dot: '#4E5BA6'
        };
      case 'active':
        return {
          background: 'bg-[#ECFDF3]',
          text: 'text-[#027A48]',
          dot: null
        };
      default:
        return {
          background: 'bg-gray-100',
          text: 'text-gray-600',
          dot: '#6B7280'
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="flex items-start mix-blend-multiply relative">
      <div className={`flex justify-center items-center gap-1.5 relative ${styles.background} ${styles.dot ? 'pl-1.5 pr-2' : 'px-2'} py-0.5 rounded-2xl`}>
        {styles.dot && (
          <div>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="3" fill={styles.dot}></circle>
            </svg>
          </div>
        )}
        <div className={`${styles.text} text-center text-xs font-medium leading-[18px] relative`}>
          <div className="font-normal text-xs">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
