import { Card } from "@mui/material";
import { X } from "lucide-react";
import { TextField } from "../TextField/textField";

interface PartnerDetailsCardProps {
  name: string;
  nationalId: string;
  moiNumber: string;
  share: string;
}

export default function PartnerDetailsCard({
  name,
  nationalId,
  moiNumber,
  share,
}: PartnerDetailsCardProps) {
  return (
    <Card className="relative p-6 rounded-3xl border border-gray-200 shadow-md flex flex-col space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center space-x-3 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">{name}</h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/2560px-Flag_of_the_United_Arab_Emirates.svg.png"
              alt="UAE Flag"
              className="w-6 h-4"
            />
          </div>
          {/* <div className="flex space-x-1">
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full" />
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full" />
            <span className="inline-block w-4 h-4 bg-black rounded-full" />
          </div> */}
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px]">
          <TextField label="UAE National ID No:" value={nationalId} />
        </div>
        <div className="flex-1 min-w-[250px]">
          <TextField label="MOI Unified No:" value={moiNumber} />
        </div>
        <div className="flex-1 min-w-[250px]">
          <TextField label="Share" value={share} />
        </div>
      </div>
    </Card>
  );
}