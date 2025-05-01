import React from 'react';



import ProgressPendingSVG from '@/assets/svg/ProgressPendingSVG';
import PrimaryErrorSVG from '@/assets/svg/PrimaryErrorSVG';
import PrimarySuccessSVG from '@/assets/svg/PrimarySuccessSVG';

type StatusCardProps = {
  type: 'primary' | 'secondry' | 'location' | 'both';
  state: 'pending' | 'error' | 'success' | 'inprogress' | 'noresult';
  title: string;
  text: string;
  imageURL?: string;
};

const getStateStyles = (state: StatusCardProps['state']) => {
  switch (state) {
    case 'pending':
      return {
        bgColor: 'bg-[#E7E7E8]',
        borderColor: 'border-[#A0A0A4]',
        textColor: 'text-[#A0A0A4]',
        icon: <ProgressPendingSVG />,
      };
    case 'error':
      return {
        bgColor: 'bg-[#FDECEC]',
        borderColor: 'border-[#EE3E43]',
        textColor: 'text-black',
        icon: <PrimaryErrorSVG />,
      };
    case 'success':
      return {
        bgColor: 'bg-[#EBFBEE]',
        borderColor: 'border-[#2B8A3E]',
        textColor: 'text-black',
        icon: <PrimarySuccessSVG />,
      };
    case 'inprogress':
      return {
        bgColor: 'bg-[#1864AB]',
        borderColor: 'border-blue-500',
        textColor: 'text-white',
      };
    case 'noresult':
      return {
        bgColor: 'bg-[#E7F5FF]',
        borderColor: 'border-[#1864AB]',
        textColor: 'text-black',
      };
    default:
      return {
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-500',
        textColor: 'text-gray-500',
      };
  }
};

const Cards: React.FC<StatusCardProps> = ({ type, state, title, text, imageURL }) => {
  const { bgColor, borderColor, textColor, icon } = getStateStyles(state);

  if (type === 'location') {
    return (
      <div className={` w-[270px] ${bgColor} shadow-md rounded-lg   mb-4 flex border-b-4 ${borderColor} overflow-hidden`}>
    
        <div className="w-1/2 ">
          <img
            src={imageURL} 
            alt="Location"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
  
        {/* Right Side: Title & Text */}
        <div className="w-1/2 flex flex-col justify-center px-2">
          <div className={`text-sm font-bold ${textColor}`}>{title}</div>
          <div className={`text-xs font-normal ${textColor}`}>{text}</div>
        </div>
      </div>
    );
  }
  
  if (type === 'both') {
    return (
      <div className={`w-[270px] ${bgColor} shadow-md rounded-lg mb-4 flex flex-col border-b-4 ${borderColor} overflow-hidden`}> 
      {/* Image */}
      <div className="flex  items-center gap-4 p-2 text-center">
      <img
          alt="Profile"
          className="w-8 h-8 rounded-full"
          height="50"
          src={imageURL}
          width="50"
        />
     <div className='flex flex-start flex-col'>
     <div className={`text-sm font-bold ${textColor} mt-2`}>{title}</div>
     <div className={`text-xs font-normal ${textColor}`}>{text}</div>
     </div>
      </div>
     
      
      {/* Icon, Title & Text */}
      <div className="flex  items-center gap-4 p-2 text-center">
        {icon}
     <div className='flex flex-start flex-col'>
     <div className={`text-sm font-bold ${textColor} mt-2`}>{title}</div>
     <div className={`text-xs font-normal ${textColor}`}>{text}</div>
     </div>
      </div>
    </div>
    );
  }
  return (
    <div
      className={`w-[270px] ${bgColor} shadow-md rounded-lg px-2 py-3 mb-4 flex ${
        type === 'secondry' ? 'flex-col items-center gap-2' : 'items-center space-x-4'
      } border-b-4 ${borderColor}`}
    >
      {imageURL ? (
        <img
          alt="Profile"
          className="w-8 h-8 rounded-full"
          height="50"
          src={imageURL}
          width="50"
        />
      ) : (
        icon
      )}
      <div className="text-center">
        <div className={`text-sm font-bold mb-1 ${textColor}`}>{title}</div>
        <div className={`text-xs font-normal ${textColor}`}>{text}</div>
      </div>
    </div>
  );
};

export default Cards;
