import { useState } from 'react';
import Map from '../../assets/images/Map.png';
import Thumbnail from '../../assets/images/Thumbnail.png';


const Radiocard = ({ randomText = 'Random Allotment', specificText = 'Specific Plot' }) => {
  const [selectedOption, setSelectedOption] = useState('random');

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-9 max-w-[592px]">

      
        <button
          type="button"
          onClick={() => setSelectedOption('random')}
          className={`min-h-[83px] flex items-center gap-2 rounded-[10px] ps-5 pe-[10px] py-3 flex-1 transition-colors ${
            selectedOption === 'random' ? 'bg-[#676d76]' : 'bg-[#3d3f49]'
          }`}
        >
          <img
            src={Thumbnail}
            alt="Icon showing a red location pin on a map with a random allotment symbol"
            className="w-14 h-14"
          />
          <span
            className={`text-[20px] font-bold  ${
              selectedOption === 'random' ? 'text-white' : 'text-[#88888D]'
            }`}
          >
            {randomText}
          </span>
        </button>

   
        <button
          type="button"
          onClick={() => setSelectedOption('specific')}
          className={` min-h-[83px] flex items-center gap-4 rounded-[10px] px-5 py-3 flex-1 transition-colors ${
            selectedOption === 'specific' ? 'bg-[#676d76]' : 'bg-[#3d3f49]'
          }`}
        >
          <img
            src={Map}
            alt="Icon showing a red location pin on a specific plot of land on a map"
            className="w-14 h-14"
          />
          <span
            className={`text-[20px] font-bold ${
              selectedOption === 'specific' ? 'text-white' : 'text-[#88888D]'
            }`}
          >
            {specificText}
          </span>
        </button>

      </div>
    </div>
  );
};

export default Radiocard;
