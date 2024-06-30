import { useUser } from "../hooks/useUser";
import { FireSVG } from "../icons/FireSVG";

export const TeacherBanner = () => {
  const { data } = useUser();

  return (
    <>
      {data?.map((user) => (
        <article
          key={user.id}
          className={`flex flex-row gap-4 p-2 rounded-full justify-between items-center w-80 ${
            user.id % 2 !== 0 ? " bg-lima-200" : " bg-black-bg"
          }`}
        >
          <div className=" flex flex-row gap-4 items-center">
            <img
              className={`rounded-full bg-cover w-14 h-14 bg-center bg-[url('/${user.image}.jfif')]`}
            />
            <div className=" flex flex-col justify-start">
              <p className=" text-heading-sm text-white font-medium">
                {user.name}
              </p>
              <p className=" text-heading-sm text-gray-100">{user.activity}</p>
            </div>
          </div>

          <div className=" flex flex-row gap-2 mr-4">
            <FireSVG className="text-white" />

            <p className=" font-medium text-white text-heading-sm ">
              {user.kcal} Kcal
            </p>
          </div>
        </article>
      ))}
    </>
  );
}

export default TeacherBanner;