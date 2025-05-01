import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const CompleteSvg = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.2" cy="9.6" r="7.2" fill="white" />
      <path
        d="M5.25 9.775L7.5 12.025L12.75 6.775"
        stroke="#2B8A3E"
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 16.9C13.1421 16.9 16.5 13.5421 16.5 9.4C16.5 5.25787 13.1421 1.9 9 1.9C4.85786 1.9 1.5 5.25787 1.5 9.4C1.5 13.5421 4.85786 16.9 9 16.9Z"
        stroke="#2B8A3E"
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default CompleteSvg;
