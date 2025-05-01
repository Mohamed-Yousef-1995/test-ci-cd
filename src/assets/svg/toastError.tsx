import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const ToastError = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_324_6458)">
        <path
          d="M12 7L12 13"
          stroke="#EE3E43"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17.01L12.01 16.9989"
          stroke="#EE3E43"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47712 2 1.99997 6.47715 1.99997 12C1.99997 17.5228 6.47712 22 12 22Z"
          stroke="#EE3E43"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_324_6458">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ToastError;
