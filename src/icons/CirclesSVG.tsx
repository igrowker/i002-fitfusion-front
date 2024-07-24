import { SVGProps } from "react";

export const CirclesSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="199"
      height="220"
      viewBox="0 0 199 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="89" cy="110" r="108" stroke="currentColor" strokeWidth="4" />
      <circle cx="89" cy="110" r="58" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};
