import { dotSpinner } from "ldrs";

dotSpinner.register();

// Default values shown
type SppinerPropTypes = {
  className?: string
}

export const Spinner = ({className } : SppinerPropTypes) => {
  return (
    <div className={`absolute top-0 h-screen w-screen flex justify-center items-center bg-gray-500/20 ${className}`}>
      <l-dot-spinner size="60" speed="0.9" color="#C1FF72"></l-dot-spinner>
    </div>
  );
};
