import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const InprogressSvg = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.2" cy="9.2" r="7.2" fill="white" />
      <g clip-path="url(#clip0_239_9410)">
        <path
          d="M6 9H12"
          stroke="#228BE6"
          stroke-width="1.35"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke="#228BE6"
          stroke-width="1.35"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_239_9410">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default InprogressSvg;
