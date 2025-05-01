import CompleteSvg from '@/assets/svg/statusSvg/complete';
import FailledSvg from '@/assets/svg/statusSvg/failled';
import InprogressSvg from '@/assets/svg/statusSvg/inprogress';
import PendingSvg from '@/assets/svg/statusSvg/pending';
import React from 'react';

type StatusType = 'pending' | 'blue' | 'green' | 'red';

interface StatusBadgeProps {
  status?: StatusType;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {

  const renderIcon = () => {
    switch (status) {
      case 'pending':
        return (
          <PendingSvg />
        );
      case 'blue':
        return (
          <InprogressSvg />
        );
      case 'green':
        return (
          <CompleteSvg />
        );
      case 'red':
        return (
          <FailledSvg />
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {renderIcon()}
    </div>
  );
};

export default StatusBadge;