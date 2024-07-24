import { SVGProps } from "react";

export const LightingSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.225 10.9999L7.7286 15.6461L12.9467 8.99994H7.7746L8.2702 4.36606L3.06257 10.9999H8.225ZM10.6294 1.11426C10.7362 0.115468 9.4687 -0.399682 8.8485 0.390428L0.219669 11.3824C-0.295451 12.0386 0.172019 12.9999 1.00625 12.9999H5.99993L5.36993 18.897C5.26323 19.8957 6.5306 20.4108 7.1508 19.6208L15.7898 8.61744C16.305 7.96128 15.8375 6.99993 15.0032 6.99993H9.9999L10.6294 1.11426Z"
      />
    </svg>
  );
};
