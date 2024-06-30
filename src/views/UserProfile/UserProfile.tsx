import { HeaderProfile, ProfileData, Switch } from "../../components";

export const UserProfile = () => {
  return (
    <main className=" bg-white flex flex-col items-center">
      <HeaderProfile />

      <ProfileData />

      <Switch />
    </main>
  );
};

export default UserProfile;
