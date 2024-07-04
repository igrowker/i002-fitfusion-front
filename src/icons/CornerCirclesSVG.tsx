import { SVGProps } from "react";

export const CornerCirclesSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="110"
      height="161"
      viewBox="0 0 110 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg "
      {...props}
    >
      <circle cx="110" cy="51" r="108" stroke="currentColor" strokeWidth="4" />
      <circle cx="110" cy="51" r="58" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
};
