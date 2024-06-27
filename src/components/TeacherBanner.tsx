

export default function TeacherBanner() {
  return (
    <div className=" flex flex-row bg-lima-200 gap-4 p-2 rounded-full justify-between items-center w-80">
    <div className=" flex flex-row gap-4 items-center">
      <div className=" rounded-full bg-cover w-14 h-14 bg-[url('/yoga.jfif')] bg-center" />
      <div className=" flex flex-col justify-start">
        <p className=" text-sm text-white font-medium">Tomas Lopez</p>
        <p className=" text-sm text-gray-100">Yoga</p>
      </div>
    </div>

    <div className=" flex flex-row gap-2 mr-4">
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
          d="M5.652 5.594C5.491 5.788 5.349 5.962 5.228 6.116C4.981 6.431 4.748 6.739 4.528 7.038C2.813 9.383 2 11.204 2 12.381C2 15.461 4.665 18 8 18C11.335 18 14 15.462 14 12.381C14 10.493 12.03 7.251 8.028 2.928C6.836 4.235 6.04 5.128 5.652 5.594ZM8 20C3.582 20 0 16.589 0 12.381C0 10.688 0.971 8.514 2.914 5.858C3.29678 5.32933 3.69769 4.81402 4.116 4.313C4.673 3.645 5.968 2.207 8 0C13.333 5.449 16 9.576 16 12.381C16 16.589 12.418 20 8 20ZM8 17C5.79 17 4 15.294 4 13.19C4 11.788 5.333 9.724 8 7C10.667 9.724 12 11.788 12 13.19C12 15.294 10.21 17 8 17ZM6 13.19C6 14.167 6.874 15 8 15C9.126 15 10 14.167 10 13.19C10 12.653 9.346 11.515 8 9.95C6.654 11.515 6 12.653 6 13.19Z"
          fill="white"
        />
      </svg>

      <p className=" font-medium text-white text-sm ">260 Kcal</p>
    </div>
  </div>
  )
}