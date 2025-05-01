
  import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import IconButton from "../button/button";
import { Trash } from "lucide-react";

interface Owner {
  name: string;
  tribe: string;
  eid: string;
  mobile: string;
}

interface Plot {
  id: string;
  address: string;
  area: string;
  landUse: string;
  status: string;
  owner: Owner;
}

interface PlotOwnerProps {
  plots: Plot[];
  buttonClass?: string
  cardClass?: string
}

export const PlotOwner: React.FC<PlotOwnerProps> = ({ plots, buttonClass, cardClass }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {plots.map((plot, index) => (
        <Card key={index} className={`bg-gray-800 text-white rounded-lg shadow-lg ${cardClass}`}>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">{plot.id}</h1>
              <IconButton label='delete' className={` ${buttonClass} top-0 bg-transparent border-red-400 border`} iconLeft={<Trash className="w-5 h-5" />}/>
            </div>
            <div className="mb-4">
              <p className="text-sm"><span className="font-semibold">Plot address:</span> {plot.address}</p>
              <p className="text-sm"><span className="font-semibold">Area:</span> {plot.area}</p>
              <p className="text-sm"><span className="font-semibold">Land use:</span> {plot.landUse}</p>
              <p className="text-sm"><span className="font-semibold">Plot status:</span> {plot.status}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Owner</h2>
              <p className="text-sm"><span className="font-semibold">Name:</span> {plot.owner.name}</p>
              <p className="text-sm"><span className="font-semibold">Tribe:</span> {plot.owner.tribe}</p>
              <p className="text-sm"><span className="font-semibold">EID:</span> {plot.owner.eid}</p>
              <p className="text-sm"><span className="font-semibold">Mobile:</span> {plot.owner.mobile}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};