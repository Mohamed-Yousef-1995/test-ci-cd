import { SVGProps } from "react";
type IPropType = SVGProps<SVGSVGElement>;
const GroupIcon = (props: IPropType) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.875 3C1.875 2.37868 2.37868 1.875 3 1.875H17C17.6213 1.875 18.125 2.37868 18.125 3V17C18.125 17.6213 17.6213 18.125 17 18.125H3C2.37868 18.125 1.875 17.6213 1.875 17V3ZM3.125 3.125V5.625H16.875V3.125H3.125ZM16.875 6.875H3.125V9.375H16.875V6.875ZM16.875 10.625H3.125V13.125H16.875V10.625ZM16.875 14.375H3.125V16.875H16.875V14.375Z"
        fill="black"
      />
    </svg>
  );
};
export default GroupIcon;
