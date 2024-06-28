import { SVGProps } from "react";

export const DumbbellSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 26 26"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="26px"
      width="26px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m6.5 6.5 11 11"></path>
      <path d="m21 21-1-1"></path>
      <path d="m3 3 1 1"></path>
      <path d="m18 22 4-4"></path>
      <path d="m2 6 4-4"></path>
      <path d="m3 10 7-7"></path>
      <path d="m14 21 7-7"></path>
    </svg>
  );
};
