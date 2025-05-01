import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement> & {
  fillColor?: string; // <- custom prop
};

const StarIcon = ({ fillColor, ...props }: IPropType) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="21.994" y1="21.928" x2="1.42703" y2="2.53" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6F47" />
          <stop offset="1" stopColor="#FFCD0F" />
        </linearGradient>
      </defs>
      <path
        d="M10.788 3.103C11.283 2.099 12.714 2.099 13.209 3.103L15.567 7.88L20.84 8.646C21.947 8.807 22.389 10.168 21.588 10.949L17.772 14.669L18.673 19.919C18.863 21.022 17.705 21.863 16.714 21.343L11.998 18.863L7.28303 21.343C6.29303 21.863 5.13503 21.023 5.32303 19.919L6.22403 14.669L2.40903 10.949C1.60803 10.169 2.05003 8.807 3.15703 8.647L8.43003 7.88L10.788 3.103Z"
        fill={fillColor || "url(#goldGradient)"}
      />
    </svg>
  );
};

export default StarIcon;
