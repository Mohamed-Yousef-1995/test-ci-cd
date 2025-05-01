import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const FailledSvg = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.2" cy="10" r="7.2" fill="white" />
      <path
        d="M9 6.05V10.55"
        stroke="#EE3E43"
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 13.5583L9.00833 13.5491"
        stroke="#EE3E43"
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 17.3C13.1421 17.3 16.5 13.9421 16.5 9.8C16.5 5.65787 13.1421 2.3 9 2.3C4.85786 2.3 1.5 5.65787 1.5 9.8C1.5 13.9421 4.85786 17.3 9 17.3Z"
        stroke="#EE3E43"
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default FailledSvg;
