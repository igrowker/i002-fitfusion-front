export const CirclesSVG = ({ fill = "#C1FF72" }: { fill?: string }) => {
  return (
    <svg
      width="199"
      height="220"
      viewBox="0 0 199 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="89" cy="110" r="108" stroke={fill} strokeWidth="4" />
      <circle cx="89" cy="110" r="58" stroke={fill} strokeWidth="4" />
    </svg>
  );
};
