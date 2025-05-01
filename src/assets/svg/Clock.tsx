import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const Clock = (props: IPropType) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0001 2.66663C8.63608 2.66663 2.66675 8.63596 2.66675 16C2.66675 23.364 8.63608 29.3333 16.0001 29.3333C23.3641 29.3333 29.3334 23.364 29.3334 16C29.3334 8.63596 23.3641 2.66663 16.0001 2.66663Z"
        fill="url(#paint0_linear_761_1337)"
      />
      <path
        d="M15.9907 8.86394C15.9561 8.61294 15.8276 8.38441 15.6311 8.22452C15.4345 8.06463 15.1846 7.9853 14.9318 8.00257C14.6791 8.01984 14.4423 8.13242 14.2693 8.31755C14.0963 8.50268 14.0001 8.74657 14 8.99994V16.9999L14.0093 17.1359C14.0422 17.3753 14.1606 17.5948 14.3428 17.7536C14.5249 17.9124 14.7583 17.9999 15 17.9999H20.3333L20.4693 17.9906C20.7203 17.9561 20.9489 17.8275 21.1088 17.631C21.2686 17.4345 21.348 17.1846 21.3307 16.9318C21.3134 16.679 21.2009 16.4422 21.0157 16.2692C20.8306 16.0963 20.5867 16 20.3333 15.9999H16V8.99994L15.9907 8.86394Z"
        fill="url(#paint1_linear_761_1337)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_761_1337"
          x1="7.11075"
          y1="1.18529"
          x2="20.4441"
          y2="30.8146"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1EC8B0" />
          <stop offset="1" stop-color="#2764E7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_761_1337"
          x1="14.6413"
          y1="9.53061"
          x2="12.0133"
          y2="17.4586"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FDFDFD" />
          <stop offset="1" stop-color="#D1D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Clock;
