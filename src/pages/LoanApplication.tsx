import React from 'react';
import { ArrowLeft, MessageSquare, Settings, Bell, User, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { IntelligenceSummary } from '@/components/IntelligenceSummary';
import { CashFlowChart } from '@/components/CashFlowChart';
import { TransactionsTable } from '@/components/TransactionsTable';
import { Link } from 'react-router-dom';

const LoanApplication = () => {
  const applicationData = {
    id: 'LA-2024-0892',
    borrowerId: 'IDC1092EA23',
    applicationDate: '12/09/2025',
    loanType: 'Loan Product 1',
    loanOfficer: 'Caleb Mark',
    amountRequested: '$20,000',
    underwriter: 'Emmanuella Areal',
    recommendation: 'Recommend Reject',
    status: 'in-review'
  };

  return (
    <div className="w-full max-w-[1440px] min-h-screen bg-background mx-auto pb-[103px]">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-foreground text-background rounded flex items-center justify-center font-bold text-sm">
            C
          </div>
          <span className="font-semibold text-lg">Caelo</span>
          <nav className="flex items-center gap-6 ml-8">
            <Link to="/" className="text-foreground hover:text-primary">Dashboard</Link>
            <span className="text-muted-foreground">Borrowers</span>
            <span className="text-muted-foreground">Portfolio</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </header>

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

        <ProgressIndicator currentStep="in-review" />
      </div>

      {/* Application Header */}
      <div className="px-6 py-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Application #{applicationData.id}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Recommendation:</span>
              <Badge variant="destructive">{applicationData.recommendation}</Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button>Approve</Button>
            <Button variant="destructive">Reject</Button>
          </div>
        </div>

        {/* Application Details */}
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Borrower ID:</span>
              <p className="font-medium">{applicationData.borrowerId}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Loan Officer:</span>
              <p className="font-medium">{applicationData.loanOfficer}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Application Date:</span>
              <p className="font-medium">{applicationData.applicationDate}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Amount Requested:</span>
              <p className="font-medium">{applicationData.amountRequested}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Loan Type:</span>
              <p className="font-medium">{applicationData.loanType}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Underwriter:</span>
              <p className="font-medium">{applicationData.underwriter}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Summary */}
      <div className="px-6 py-6">
        <IntelligenceSummary />
      </div>

      {/* Tabs Section */}
      <div className="px-6">
        <Tabs defaultValue="cash-flow" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cash-flow">Cash Flow Analytics</TabsTrigger>
            <TabsTrigger value="relationship">Relationship & Impact</TabsTrigger>
            <TabsTrigger value="business">Business & Personal Financial Stability</TabsTrigger>
            <TabsTrigger value="documents">Financials & Supporting Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cash-flow" className="mt-6">
            <CashFlowChart />
          </TabsContent>
          
          <TabsContent value="relationship" className="mt-6">
            <div className="p-8 text-center text-muted-foreground">
              Relationship & Impact content coming soon
            </div>
          </TabsContent>
          
          <TabsContent value="business" className="mt-6">
            <div className="p-8 text-center text-muted-foreground">
              Business & Personal Financial Stability content coming soon
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="mt-6">
            <div className="p-8 text-center text-muted-foreground">
              Financials & Supporting Documents content coming soon
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Transactions Table */}
      <div className="px-6 mt-8">
        <TransactionsTable />
      </div>
    </div>
  );
};

export default LoanApplication;