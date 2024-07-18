import { dotSpinner } from "ldrs";

dotSpinner.register();

// Default values shown

export const Spinner = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <l-dot-spinner size="60" speed="0.9" color="#C1FF72"></l-dot-spinner>
    </div>
  );
};
