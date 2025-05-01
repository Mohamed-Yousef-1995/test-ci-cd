import React from "react";

interface ProcessCardProps {
  status: "required" | "approved";
  stage: {
    complete: number;
    approval: number;
    inprogress: number;
  };
}

const Process: React.FC<ProcessCardProps> = ({ status, stage }) => {
  const isRequired = status === "required";
  const totalDots = 6;
  const { complete, approval, inprogress } = stage;

  const dots = [
    ...Array(complete).fill("bg-green-500"),
    ...Array(approval).fill("bg-blue-500"),
    ...Array(inprogress).fill("bg-[#e2e2e3]"),
  ];

  const remainingDotsCount = totalDots - dots.length;
  const allDots = [...dots, ...Array(remainingDotsCount).fill("bg-gray-300")];

  return (
    <div>
      <div
        className={`${
          isRequired
            ? "bg-white"
            : "bg-gradient-to-r from-[#FFFFFF] to-[#FCD8D980] shadow-md "
        } border border-[#E7E7E8] rounded-[8px] px-2 py-[9px] max-w-[462px]`}
      >
        <div className="flex flex-col gap-2 sm:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] font-bold">Application Title</h1>

            <div className="flex gap-1">
              {allDots.map((color, index) => (
                <div key={index} className={`w-4 h-4 rounded-full ${color}`}></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[14px] font-bold">0000000000</p>
            <p className="text-sm text-gray-600">
              {isRequired ? "Process Required" : "Approved"}
            </p>
          </div>

          <div>
            <button className="text-[12px] bg-black text-white py-1 px-4 rounded-[32px]">
              Service Name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
