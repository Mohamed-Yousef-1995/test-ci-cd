import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const LessThenErrow = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="#12121B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default LessThenErrow;
