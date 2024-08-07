import { SVGProps } from "react";

type LeftArrowSVGPropTypes = {
  props?: SVGProps<SVGSVGElement>;
  fill?: string;
};

export const LeftArrowSVG = ({
  props,
  fill = "#040415",
}: LeftArrowSVGPropTypes) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L11.4142 12L13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289Z"
      />
    </svg>
  );
};
