import { SVGProps } from "react";

type IPropType = SVGProps<SVGSVGElement>;
const CircleAddIcon = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7.5V10.5M10 10.5V13.5M10 10.5H13M10 10.5H7M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z"
        stroke="#24577D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CircleAddIcon;
