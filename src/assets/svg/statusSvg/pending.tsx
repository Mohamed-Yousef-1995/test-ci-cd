import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const PendingSvg = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_255_3993)">
        <path
          d="M9 4.8L9 9.4L13.5 9.39999"
          stroke="#D0D0D1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 17.0667C13.1421 17.0667 16.5 13.6342 16.5 9.4C16.5 5.16581 13.1421 1.73333 9 1.73333C4.85786 1.73333 1.5 5.16581 1.5 9.4C1.5 13.6342 4.85786 17.0667 9 17.0667Z"
          stroke="#D0D0D1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_255_3993">
          <rect
            width="18"
            height="18.4"
            fill="white"
            transform="translate(0 0.199997)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default PendingSvg;
