import React, { useState } from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { ProgressSteps } from '@/components/ProgressSteps';
import { ApplicationCard } from '@/components/ApplicationCard';
import { IntelligenceSummary } from '@/components/IntelligenceSummary';
import { TabNavigation } from '@/components/TabNavigation';
import { CashFlowChart } from '@/components/CashFlowChart';
import { TransactionsTable } from '@/components/TransactionsTable';
import { Link } from 'react-router-dom';

const LoanApplication = () => {
  const [activeTab, setActiveTab] = useState('cash-flow');

  const progressSteps = [
    { id: 'submitted', label: 'Submitted', status: 'completed' as const },
    { id: 'in-review', label: 'In Review', status: 'current' as const },
    { id: 'approved', label: 'Approved', status: 'pending' as const },
    { id: 'funded', label: 'Funded', status: 'pending' as const },
  ];

  const applicationData = {
    applicationId: 'LA-2024-0892',
    recommendation: 'Recommend Reject',
    borrowerId: 'IDC1092EA23',
    applicationDate: '12/09/2025',
    loanType: 'Loan Product 1',
    loanOfficer: 'Caleb Mark',
    amountRequested: '$20,000',
    underwriter: 'Emmanuella Areal',
  };

  const tabs = [
    { id: 'cash-flow', label: 'Cash Flow Analytics', isActive: activeTab === 'cash-flow' },
    { id: 'relationship', label: 'Relationship & Impact', isActive: activeTab === 'relationship' },
    { id: 'business', label: 'Business & Personal Financial Stability', isActive: activeTab === 'business' },
    { id: 'documents', label: 'Financials & Supporting Documents', isActive: activeTab === 'documents' },
  ];

  const handleApprove = () => {
    console.log('Application approved');
  };

  const handleReject = () => {
    console.log('Application rejected');
  };

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Breadcrumb and Progress */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <span>Loan Application</span>
          </div>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messaging
          </Button>
        </div>

        <ProgressSteps steps={progressSteps} />
      </div>

      {/* Application Card */}
      <div className="px-6 py-4">
        <ApplicationCard 
          data={applicationData} 
          onApprove={handleApprove} 
          onReject={handleReject} 
        />
      </div>

      {/* Intelligence Summary */}
      <div className="px-6 py-6">
        <IntelligenceSummary />
      </div>

      {/* Tabs Section */}
      <div className="px-6">
        <TabNavigation tabs={tabs} onTabChange={setActiveTab} />
        
        <div className="mt-6">
          {activeTab === 'cash-flow' && <CashFlowChart />}
          {activeTab === 'relationship' && (
            <div className="p-8 text-center text-muted-foreground">
              Relationship & Impact content coming soon
            </div>
          )}
          {activeTab === 'business' && (
            <div className="p-8 text-center text-muted-foreground">
              Business & Personal Financial Stability content coming soon
            </div>
          )}
          {activeTab === 'documents' && (
            <div className="p-8 text-center text-muted-foreground">
              Financials & Supporting Documents content coming soon
            </div>
          )}
        </div>
      </div>

      {/* Transactions Table */}
      <div className="px-6 mt-8">
        <TransactionsTable />
      </div>
    </div>
  );
};

export default LoanApplication;