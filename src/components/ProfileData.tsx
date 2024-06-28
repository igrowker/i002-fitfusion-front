function ProfileData() {
  return (
    <>
      <img className=" rounded-full bg-cover  w-32 h-32 bg-[url('/profile.jfif')] mt-5 bg-center" />

      <p className=" font-bold text-heading-lg text-black mt-4 font-lato">
        Jordi Garcia Ferre
      </p>

      <div className=" flex flex-row w-full justify-center items-center pt-8 px-6">
        <div className=" flex flex-col gap-2 items-center justify-center px-4">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.225 10.9999L7.7286 15.6461L12.9467 8.99994H7.7746L8.2702 4.36606L3.06257 10.9999H8.225ZM10.6294 1.11426C10.7362 0.115468 9.4687 -0.399682 8.8485 0.390428L0.219669 11.3824C-0.295451 12.0386 0.172019 12.9999 1.00625 12.9999H5.99993L5.36993 18.897C5.26323 19.8957 6.5306 20.4108 7.1508 19.6208L15.7898 8.61744C16.305 7.96128 15.8375 6.99993 15.0032 6.99993H9.9999L10.6294 1.11426Z"
              fill="black"
            />
          </svg>

          <p className=" text-heading text-black font-bold font-lato">246</p>

          <p className=" text-heading-sm text-gray-300 font-black font-lato">
            Calorias totales
          </p>
        </div>

        <div className=" flex flex-col gap-2 items-center justify-center px-4">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3 8.72C12.3796 7.78545 13 6.42794 13 5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5C2.99998 6.42794 3.62035 7.78545 4.7 8.72C1.84094 10.0146 0.0030061 12.8615 0 16C0 16.5523 0.447715 17 1 17C1.55228 17 2 16.5523 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16C15.997 12.8615 14.1591 10.0146 11.3 8.72ZM8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5C11 5.79565 10.6839 6.55871 10.1213 7.12132C9.55871 7.68393 8.79565 8 8 8Z"
              fill="black"
            />
          </svg>

          <p className=" text-heading text-black font-bold font-lato">682</p>

          <p className=" text-heading-sm text-gray-300 font-black font-lato">
            Seguidores
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileData;
