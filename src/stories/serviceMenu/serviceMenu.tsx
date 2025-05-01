import ServiceArrowRight from "@/assets/icons/serviceArrowRight";
import React, { useState } from "react";

export interface ServiceItem {
  id: number;
  code: string;
  title: string;
}

export interface ServicesMenuProps {
  servicesList?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  { id: 1, code: "LA", title: "Land Allocation" },
  { id: 2, code: "PS", title: "Plot Subdivision & Merging" },
  { id: 3, code: "LX", title: "Land Exchange" },
  { id: 4, code: "LL", title: "Land Leasing" },
];

const ServicesMenu: React.FC<ServicesMenuProps> = ({ servicesList = defaultServices }) => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const handleServiceClick = (id: number) => {
    setActiveService((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-[400px] p-2">
      <div className="space-y-2">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className={`group flex items-center p-3 rounded-lg shadow transition-colors duration-300 ${
              activeService === service.id ? "bg-[#F0F3F5]" : "hover:bg-[#F0F3F5]"
            }`}
            onClick={() => handleServiceClick(service.id)}
          >
            {/* Icon */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-300 ${
                activeService === service.id
                  ? "bg-[#169F9F] text-[#A2D9D9]"
                  : "bg-[#D0ECEC] text-[#169F9F] group-hover:bg-[#169F9F] group-hover:text-[#A2D9D9]"
              }`}
            >
              <p className="text-[18px] font-black">{service.code}</p>
            </div>

            {/* Text */}
            <div className="ml-4 text-xl font-bold">{service.title}</div>

            {/* Arrow */}
            <div
              className={`ml-auto text-teal-500 transition-opacity duration-300 ${
                activeService === service.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <ServiceArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMenu;
