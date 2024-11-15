import { Github, Instagram, Linkedin } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const CardProfile = ({
  name,
  ra,
  img,
}: {
  name: string;
  ra: string;
  img: string;
}) => {
  return (
    <div className="w-[25rem] bg-white border border-gray-200 rounded-lg shadow relative">
      <img
        className="rounded-t-lg w-full max-h-40"
        src="/img/background.jpg"
        alt="background"
      />
      <div className="absolute w-full -translate-y-2/3 flex justify-center">
        <img
          src={`/img/${img}`}
          alt="profile"
          className="md:w-32 md:h-32 h-24 w-24 rounded-full border-2 border-white shadow-lg"
        />
      </div>
      <div className="p-5 mt-10 mx-auto ">
        <div className="border-b-2 border-gray-300 pb-4 text-center">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-medium text-gray-400 text-sm">{ra}</p>
        </div>
        <div className="flex gap-4 p-4 pb-0 justify-center">
          <Linkedin />
          <Instagram />
          <Github />
        </div>
        {/* <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg> */}
        {/* </a> */}
      </div>
    </div>
  );
};
