import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { P2PAssets } from './_components/p2p-assets';
import { LoanRequests } from './_components/loan-requests';
import { BuyerOffers } from './_components/buyer-offers';
import { LoanOffers } from './_components/loan-offers';
import { ActiveLoans } from './_components/active-loans';
import { RepaidLoans } from './_components/repaid-loans';

export default function P2PPage() {
  return (
    <Tabs defaultValue="assets" className="">
      <TabsList className="w-[100%] py-4">
        <TabsTrigger className="mx-4" value="assets">
          Assets
        </TabsTrigger>
        <TabsTrigger className="mx-4" value="loan-requests">
          Loan Requests
        </TabsTrigger>
        <TabsTrigger className="mx-4" value="buyer-offers">
          Buyer Offers
        </TabsTrigger>
        <TabsTrigger className="mx-4" value="loan-offers">
          Loan Offers
        </TabsTrigger>
        <TabsTrigger className="mx-4" value="active-loans">
          Active Loans
        </TabsTrigger>
        <TabsTrigger className="mx-4" value="loans-repaid">
          Repaid Loans
        </TabsTrigger>
      </TabsList>
      <TabsContent value="assets">
        <P2PAssets />
      </TabsContent>
      <TabsContent value="loan-requests">
        <LoanRequests />
      </TabsContent>
      <TabsContent value="buyer-offers">
        <BuyerOffers />
      </TabsContent>
      <TabsContent value="loan-offers">
        <LoanOffers />
      </TabsContent>
      <TabsContent value="active-loans">
        <ActiveLoans />
      </TabsContent>
      <TabsContent value="loans-repaid">
        <RepaidLoans />
      </TabsContent>
    </Tabs>
  );
}
