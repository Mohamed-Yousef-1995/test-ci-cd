import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const ToastPending = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_325_155)">
        <path
          d="M12 11.5L12 16.5"
          stroke="#1864AB"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 7.51L12.01 7.49889"
          stroke="#1864AB"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47712 2 1.99997 6.47715 1.99997 12C1.99997 17.5228 6.47712 22 12 22Z"
          stroke="#1864AB"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_325_155">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ToastPending;
