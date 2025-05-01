import { Card, CardContent } from '@/components/ui/card';
import { FileText, InfoIcon } from 'lucide-react';
import IconButton from '../button/button';

const MemberCard = () => {
  return (
    <Card className="bg-[#414149] text-white rounded-xl shadow-lg p-4 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between  mb-4 align-baseline">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-lg font-semibold">Ahmed Mohammed Khalifa</h2>
          <div className="text-sm space-y-2 mt-2">
            <div className="flex gap-4">
              <span className="font-semibold text-white min-w-20">Tribe</span>
              <span className="text-white">Al Ketbi</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-white min-w-20">EID</span>
              <span className="text-white">123-4567-192827-1</span>
            </div>
            <div className="flex gap-4">
              <span className="font-semibold text-white w-20">Mobile</span>
              <span className="text-white">+971 051 1234 5678</span>
            </div>
          </div>
        </div>
        <IconButton label='Details' iconLeft={<InfoIcon />} variant='outline' className='bg-[#414149] border-[#169F9F] pointer-events-none' />
      </div>

      <CardContent className="space-y-2 p-0">
        <div className="flex items-center bg-[#12121B] p-3 rounded-md cursor-pointer">
          <FileText className="text-gray-400 mr-3" size={20} />
          <span className="text-sm break-words">Ahmed-M-24-2-2025-Confirmation.pdf</span>
        </div>
        <div className="flex items-center bg-[#12121B] p-3 rounded-md cursor-pointer ">
          <FileText className="text-gray-400 mr-3" size={20} />
          <span className="text-sm break-words">Ahmed-M-Membership-card.pdf</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
