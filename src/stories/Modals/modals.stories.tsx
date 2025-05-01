import React, { useState } from 'react';
import Modals from './Modals';
import PullyIconSvg from '@/assets/svg/Pully';  


interface ModalStoryArgs {
  level: number;
}

export default {
  title: 'Components/Modal',
  component: Modals,
};

const Template = (args: ModalStoryArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
     
      <div 
        onClick={() => setIsOpen(true)} 
        className="cursor-pointer"
      >
        <PullyIconSvg />
      </div>

      {isOpen && (
        <Modals
          level={args.level}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  level: 1, 
};
