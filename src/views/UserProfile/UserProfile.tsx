import { useNavigate } from "react-router-dom";
import { Footer, Header, HeaderProfile, ProfileData, Switch } from "../../components";

export const UserProfile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };
  return (
    <>
      <div className=" hidden min-[566px]:flex min-[566px]:z-30 min-[566px]:w-full min-[566px]:bg-black-bg min-[566px]:sticky min-[566px]:bottom-0  ">
        <Header />
      </div>
      <main className=" bg-white flex flex-col items-center">
        <HeaderProfile
          handleClick={handleClick}
          closeButton={false}
          text={"Mi perfil"}
          showConfig={false}
        />

        <ProfileData />

        <Switch />
      </main>
      <div className=" hidden min-[566px]:flex min-[566px]:w-full min-[566px]:bg-black-bg  min-[566px]:bottom-0  ">
        <Footer />
      </div>
    </>
  );
};

export default UserProfile;
