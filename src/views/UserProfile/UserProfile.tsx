import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderProfile,
  ProfileData,
  Spinner,
  Switch,
} from "../../components";
import { useEffect, useState } from "react";
import { apiCall } from "../../services/apiCall";
import { adaptUserFormat } from "../../services/adaptUserFormat";
import { User } from "../../types/userTypes";

export const UserProfile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("");
  };

  const [user, setUser] = useState<User>();

  useEffect(() => {
    apiCall({ url: `/users/me`, method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const adaptedUser = adaptUserFormat(data);

        setUser(adaptedUser);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {user !== undefined ? (
        <>
          <div className=" hidden min-[566px]:flex min-[566px]:z-30 min-[566px]:w-full min-[566px]:bg-black-bg min-[566px]:sticky min-[566px]:bottom-0  ">
            <Header />
          </div>
          <main className=" bg-white flex flex-col items-center">
            <HeaderProfile
              handleClick={handleClick}
              closeButton={true}
              text={"Mi perfil"}
              showConfig={false}
            />

            <ProfileData user={user} />

            <Switch />
          </main>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserProfile;
