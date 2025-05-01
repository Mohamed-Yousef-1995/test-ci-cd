import React from 'react';
import Avatar from './Avatar';
import StatusBadge from './statusBadge';

type StatusType = 'pending' | 'blue' | 'green' | 'red';

interface AvatarWithBadgeProps {
  imageUrl?: string;
  initials?: string;
  status?: StatusType;
  size?: number;
}

const AvatarWithBadge: React.FC<AvatarWithBadgeProps> = ({
  imageUrl,
  initials,
  status,
  size = 40,
}) => {
  const badgeSize = size / 2;

  return (
    <div className="relative inline-block">
      {imageUrl && <Avatar imageUrl={imageUrl} initials={initials} size={size} />}
      {status && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: badgeSize,
            height: badgeSize,
          }}
        >
          <StatusBadge status={status} />
        </div>
      )}
    </div>
  );
};

export default AvatarWithBadge;