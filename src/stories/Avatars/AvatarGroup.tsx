import React from 'react';
import AvatarWithBadge from './AvatarWithBadge';

interface AvatarGroupItem {
  imageUrl?: string;
  initials?: string;
  status?: 'pending' | 'blue' | 'green' | 'red';
}

interface AvatarGroupProps {
  items: AvatarGroupItem[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {items.map((item, idx) => (
        <AvatarWithBadge
          key={idx}
          imageUrl={item.imageUrl}
          initials={item.initials}
          {...(item.status && { status: item.status })}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
