import MyEditor from "./Avatar";
import { CloseButtonProfileSVG } from "../icons";

type AvatarContainerProps = {
  setEditAvatar: () => void;
  setImage: (data:string) => void
};

export const AvatarContainer = ({
  setEditAvatar,
  setImage
}: AvatarContainerProps) => {
  return (
    <div className=" px-6  min-[566px]:max-w-xl">
      <div className=" flex flex-row justify-between items-center pt-14 px-6 ">
        <p className=" font-bold text-base text-black font-lato">
          Editar Avatar
        </p>
        <button
          className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
          onClick={setEditAvatar}
        >
          <CloseButtonProfileSVG />
        </button>
      </div>

      <MyEditor setImage ={setImage} setEditAvatar={setEditAvatar} />
    </div>
  );
};

export default AvatarContainer;
