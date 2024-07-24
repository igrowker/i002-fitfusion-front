import { SVGProps } from "react";

export const GymWeightSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12px"
      height="12px"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 2.5V9.5H4.5V6.5H7.5V9.5H9V2.5H7.5V5.5H4.5V2.5H3ZM1.5 7.5C1.5 7.63261 1.55268 7.75979 1.64645 7.85355C1.74021 7.94732 1.86739 8 2 8H2.5V4H2C1.86739 4 1.74021 4.05268 1.64645 4.14645C1.55268 4.24021 1.5 4.36739 1.5 4.5V5.5H1V6.5H1.5V7.5ZM10.5 4.5C10.5 4.36739 10.4473 4.24021 10.3536 4.14645C10.2598 4.05268 10.1326 4 10 4H9.5V8H10C10.1326 8 10.2598 7.94732 10.3536 7.85355C10.4473 7.75979 10.5 7.63261 10.5 7.5V6.5H11V5.5H10.5V4.5Z" />
    </svg>
  );
};
