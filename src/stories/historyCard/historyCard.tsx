import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Trash } from "lucide-react";
import IconButton from "../button/button";

interface ApprovalProps {
  date: string;
  by: string;
  to: string;
  status: string;
}

interface PlotApprovalProps {
    approvals: ApprovalProps[];
    buttonClass?: string
    cardClass?: string
  }

export const PlotApproval: React.FC<PlotApprovalProps> = ({ approvals, buttonClass, cardClass }) => {
  return (
    <div className={` grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4`}>
      {approvals.map((approval, index) => (
        <Card
          key={index}
          className={`${cardClass} text-white rounded-lg shadow-lg `}
        >
          <CardContent className="flex items-start space-x-4 p-4">
            <div >
              {/* <FaPaperPlane className="text-white text-lg" /> */}
              <IconButton icon= {<Trash className="w-5 h-5 "/>} className="bg-red-400"/>

            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">
                  Submitted for approval
                </div>

                <IconButton label={approval.status} className={` ${buttonClass} top-0`}/>


              </div>
              <div className="mt-2 text-sm">
                <div>
                  <span className="font-semibold">Date:</span> {approval.date}
                </div>
                <div className="mt-1">
                  <span className="font-semibold">By:</span> {approval.by}
                </div>
                <div className="mt-1">
                  <span className="font-semibold">To:</span> {approval.to}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
