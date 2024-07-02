import { SVGProps } from "react";

export const BicicleSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="5"
        cy="17"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="19"
        cy="17"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3944 1C18.3975 1 19.3342 1.5013 19.8906 2.3359L20.2932 2.93982C20.7212 3.58181 20.7212 4.41819 20.2932 5.06018V5.06018C19.6242 6.06372 18.2043 6.20431 17.3515 5.35147L13 1H17.3944Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V13L9 9.998L14 7L17 9.998H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
