import React, { JSX, useState } from "react";

interface TablistProps {
  tabs: {
    label: string;
    id: number;
    icon?: JSX.Element;
    onClick?: () => void;
  }[];
}

const TabList: React.FC<TablistProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div
      className="grid p-4 gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        maxWidth: "100%",
      }}
    >
      {tabs.map(({ id, icon, label }) => (
        <div

          className={`flex justify-center  items-center space-x-2 border-b border-[#169F9F] p-3 cursor-pointer hover:bg-[#5CBCBC] hover:text-white hover:rounded-tl-[8px] rounded-tr-[8px] transition

            ${activeTab === id ? "bg-[#5CBCBC] !text-white rounded-tl-[8px] rounded-tr-[8px]" : "text-black bg-transparent"}`}
          key={id}
          onClick={()=>setActiveTab(id)}
        >
          {icon}
          <p className={ `text-base  font-normal whitespace-nowrap ` }>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TabList;
