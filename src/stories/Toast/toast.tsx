import CrossIconSvg from '@/assets/icons/crossIconSvg';
import ToastError from '@/assets/svg/toastError';
import ToastPending from '@/assets/svg/toastPending';
import ToastSuccess from '@/assets/svg/toastSuccess';
import React from 'react';



type ToastStatus = 'success' | 'error' | 'pending';

interface ToastProps {
  text: string;
  status: ToastStatus;
}

const Toast: React.FC<ToastProps> = ({ text, status }) => {
  const getStyles = () => {
    switch (status) {
      case 'success':
        return {
          bg: 'bg-[#EBFBEE]',
          Icon: ToastSuccess,
        };
      case 'error':
        return {
          bg: 'bg-[#FDECEC]',
          Icon:ToastError,
        };
      case 'pending':
        return {
          bg: 'bg-[#E7F5FF]',
          Icon: ToastPending,
        };
      default:
        return {
          bg: 'bg-gray-100',
          Icon: () => null,
        };
    }
  };

  const { bg, Icon } = getStyles();

  return (
    <div className={`px-16 py-4 ${bg} flex justify-between items-center`}>
      <div className="flex gap-2 items-center">
        <Icon />
        <p>{text}</p>
      </div>
      <CrossIconSvg />
    </div>
  );
};

export default Toast;
