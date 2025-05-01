import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const FilterIcon = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5H17.5"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83333 10L14.1667 10"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.16667 15L10.8333 15"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default FilterIcon;
