import { FC } from "react";
import { InfoIcon } from "../infoIcon/infoIcon";
import IconButton from "../button/button";
import { Plus } from "lucide-react";

const SearchCard: FC = () => {
  return (
    <div className="bg-[#414149] text-white px-6 py-4 sm:px-8 sm:py-6 max-w-full rounded-md w-full md:max-w-3xl">
      {/* Header Row */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
        {/* Name + Info */}
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg font-semibold">Ahmed Mohammed Khalifa</h2>
          <InfoIcon message="Info" />
        </div>

        {/* + Add Button */}
        <IconButton iconLeft = { <Plus className="w-5 h-5" /> } label='Add' variant='default' className="bg-[#169F9F] text-white"/>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mt-4 text-sm">
        <p className="font-medium">Tribe</p>
        <p className="text-left sm:text-right">Al Ketbi</p>

        <p className="font-medium">EID</p>
        <p className="text-left sm:text-right">123-4567-192827-1</p>

        <p className="font-medium">Mobile</p>
        <p className="text-left sm:text-right">+971 051 1234 5678</p>
      </div>
    </div>
  );
};

export default SearchCard;
