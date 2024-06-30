import { ClasesProfile, HeaderProfile, ProfileData } from "../../components";

export const UserProfile = () => {
  return (
    <main className=" bg-white flex flex-col items-center">
      <HeaderProfile />

      <ProfileData />

      <ClasesProfile />
    </main>
  );
};

export default UserProfile;
