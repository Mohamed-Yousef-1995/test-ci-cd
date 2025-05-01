import React from "react";

interface AvatarProps {
  imageUrl?: string;
  initials?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  initials = "",
  size = 40,
}) => {
  const isImage = !!imageUrl;
  const dimension = `${size}px`;

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#E0E0E0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: size / 2.5,
        color: "#555",
        position: "relative",
      }}
    >
      {isImage ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default Avatar;
