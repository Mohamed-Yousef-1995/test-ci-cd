import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const CloseButtonSVG = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2621 28.7377L19.9999 20M28.7376 11.2623L19.9999 20M19.9999 20L11.2621 11.2623M19.9999 20L28.7376 28.7377"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default CloseButtonSVG;
