import React from 'react';
import { Filter, ChevronDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const TransactionsTable: React.FC = () => {
  const transactions = [
    {
      date: '21/09/24',
      type: 'Inflow',
      category: 'Salary',
      description: 'Monthly salary payment',
      amount: '$20,000',
      anomalyScore: 0.8,
      anomaly: 'Yes',
      scoreColor: 'bg-red-500'
    },
    {
      date: '21/09/24',
      type: 'Outflow',
      category: 'Rent',
      description: 'Monthly rent payment - higher than usual',
      amount: '$35,000',
      anomalyScore: 0.1,
      anomaly: 'No',
      scoreColor: 'bg-green-500'
    },
    {
      date: '21/09/24',
      type: 'Outflow',
      category: 'Undefined',
      description: 'Caleb Mark',
      amount: '$25,000',
      anomalyScore: 0.3,
      anomaly: 'No',
      scoreColor: 'bg-green-500'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">
                <div className="flex items-center gap-1">
                  Date
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Type
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Category
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-1">
                  Amount
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Anomaly Score
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-center">
                <div className="flex items-center justify-center gap-1">
                  Anomaly
                  <ChevronDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="w-16"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{transaction.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={transaction.type === 'Inflow' ? 'default' : 'secondary'}
                    className={transaction.type === 'Inflow' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}
                  >
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className={transaction.category === 'Undefined' ? 'text-muted-foreground border-b border-dashed' : ''}>
                    {transaction.category}
                  </span>
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className="text-right font-medium">{transaction.amount}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${transaction.scoreColor}`}></div>
                    <span>{transaction.anomalyScore}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant={transaction.anomaly === 'Yes' ? 'destructive' : 'secondary'}>
                    {transaction.anomaly}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">Previous</Button>
        <span className="text-sm text-muted-foreground">Page 1 of 10</span>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
};