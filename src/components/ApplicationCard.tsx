import React from 'react';

interface ApplicationData {
  applicationId: string;
  recommendation: string;
  borrowerId: string;
  applicationDate: string;
  loanType: string;
  loanOfficer: string;
  amountRequested: string;
  underwriter: string;
}

interface ApplicationCardProps {
  data: ApplicationData;
  onApprove: () => void;
  onReject: () => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ data, onApprove, onReject }) => {
  return (
    <div className="border bg-card min-w-60 w-full flex-1 shrink basis-[0%] p-6 rounded-2xl border-border max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] font-medium justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 min-h-8 items-center gap-2 flex-wrap my-auto max-md:max-w-full">
          <h1 className="text-foreground text-2xl leading-none tracking-[-0.72px] self-stretch my-auto">
            Application #{data.applicationId}
          </h1>
          <div className="border-border border bg-border self-stretch w-0 shrink-0 h-8 border-solid" />
          <div className="self-stretch min-w-60 text-sm leading-none my-auto">
            <div className="flex items-center gap-3">
              <div className="text-muted-foreground self-stretch my-auto">
                Recommendation:
              </div>
              <div className="text-destructive self-stretch my-auto">
                {data.recommendation}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-[9px] text-base whitespace-nowrap my-auto">
          <button
            onClick={onApprove}
            className="justify-center items-center border shadow-sm bg-primary self-stretch flex gap-2 overflow-hidden text-primary-foreground my-auto px-[18px] py-2.5 rounded-lg border-border hover:bg-primary/90 transition-colors"
          >
            <div className="self-stretch my-auto">
              Approve
            </div>
          </button>
          <button
            onClick={onReject}
            className="justify-center items-center border shadow-sm self-stretch flex gap-2 overflow-hidden text-destructive bg-destructive/10 my-auto px-[18px] py-2.5 rounded-lg border-border hover:bg-destructive/20 transition-colors"
          >
            <div className="text-destructive self-stretch my-auto">
              Reject
            </div>
          </button>
        </div>
      </div>

      <hr className="border-border min-h-px w-full mt-6 max-md:max-w-full" />

      <div className="flex w-full gap-[40px_100px] text-sm font-medium leading-none justify-between flex-wrap mt-6 max-md:max-w-full">
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-muted-foreground">Borrower ID:</div>
          <div className="text-foreground mt-3">{data.borrowerId}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-muted-foreground">Application Date:</div>
          <div className="text-foreground mt-3">{data.applicationDate}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-muted-foreground">Loan Type:</div>
          <div className="text-foreground mt-3">{data.loanType}</div>
        </div>
      </div>

      <div className="flex w-full gap-[40px_100px] text-sm font-medium leading-none justify-between flex-wrap mt-6 max-md:max-w-full">
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-muted-foreground">Loan Officer:</div>
          <div className="text-foreground mt-3">{data.loanOfficer}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-muted-foreground">Amount Requested:</div>
          <div className="text-foreground mt-3">{data.amountRequested}</div>
        </div>
        <div className="flex flex-col items-stretch justify-center w-[203px]">
          <div className="text-muted-foreground">Underwriter:</div>
          <div className="text-foreground mt-3">{data.underwriter}</div>
        </div>
      </div>
    </div>
  );
};