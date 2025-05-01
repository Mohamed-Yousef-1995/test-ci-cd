import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const RewardBadge = (props: IPropType) => {
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
        d="M21.3333 15.5333L27.5493 12.2693C28.0872 11.9869 28.5377 11.5629 28.8521 11.0431C29.1666 10.5233 29.333 9.92746 29.3333 9.31996V4.99996C29.3333 4.38112 29.0875 3.78763 28.6499 3.35004C28.2123 2.91246 27.6188 2.66663 27 2.66663H21.3333L20 9.33329L21.3333 15.5333Z"
        fill="url(#paint0_linear_761_1320)"
      />
      <path
        d="M10.6667 2.66663H5.00008C4.38124 2.66663 3.78775 2.91246 3.35017 3.35004C2.91258 3.78763 2.66675 4.38112 2.66675 4.99996V9.31863C2.66688 9.92636 2.83315 10.5225 3.14759 11.0426C3.46202 11.5626 3.91265 11.9868 4.45075 12.2693L10.6667 15.5333L12.0001 9.31863L10.6667 2.66663Z"
        fill="url(#paint1_linear_761_1320)"
      />
      <path
        d="M10.6667 15.5333V2.66663H21.3334V15.5333L17.0841 17.764C16.7497 17.9394 16.3777 18.031 16.0001 18.031C15.6225 18.031 15.2505 17.9394 14.9161 17.764L10.6667 15.5333Z"
        fill="url(#paint2_linear_761_1320)"
      />
      <path
        d="M22.6668 22.6667C22.6668 24.4348 21.9644 26.1305 20.7142 27.3807C19.464 28.631 17.7683 29.3333 16.0002 29.3333C14.2321 29.3333 12.5364 28.631 11.2861 27.3807C10.0359 26.1305 9.3335 24.4348 9.3335 22.6667C9.3335 20.8986 10.0359 19.2029 11.2861 17.9526C12.5364 16.7024 14.2321 16 16.0002 16C17.7683 16 19.464 16.7024 20.7142 17.9526C21.9644 19.2029 22.6668 20.8986 22.6668 22.6667Z"
        fill="url(#paint3_radial_761_1320)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_761_1320"
          x1="29.3333"
          y1="3.81063"
          x2="19.9547"
          y2="13.7453"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#52D17C" />
          <stop offset="1" stop-color="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_761_1320"
          x1="2.66675"
          y1="6.13196"
          x2="12.0854"
          y2="12.3653"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#52D17C" />
          <stop offset="1" stop-color="#1A7F7C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_761_1320"
          x1="16.0001"
          y1="0.745293"
          x2="20.8534"
          y2="16.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#76EB95" />
          <stop offset="1" stop-color="#1EC8B0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_761_1320"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-19.4758 -30.6672) rotate(56.615) scale(74.4233 63.7401)"
        >
          <stop offset="0.772" stop-color="#FFCD0F" />
          <stop offset="0.991" stop-color="#E67505" />
        </radialGradient>
      </defs>
    </svg>
  );
};
export default RewardBadge;
