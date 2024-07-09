import { useNavigate } from "react-router-dom";
import { HeaderProfile, ProfileData, Switch } from "../../components";

export const UserProfile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };
  return (
    <main className=" bg-white flex flex-col items-center">
      <HeaderProfile handleClick={handleClick} closeButton={false} text={'Mi perfil'} showConfig={false} />

      <ProfileData />

      <Switch />
    </main>
  );
};

export default UserProfile;
