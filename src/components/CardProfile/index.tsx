import { Github, Instagram, Linkedin } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const CardProfile = ({
  name,
  ra,
  img,
  linkedin,
  instagram,
  github,
}: {
  name: string;
  ra: string;
  img: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
}) => {
  return (
    <div className="w-[20rem] bg-white border border-gray-200 rounded-lg shadow relative">
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
      <div className="p-5 mt-10 mx-auto mb-0">
        <div className="border-b-2 border-gray-300 pb-4 text-center">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-medium text-gray-400 text-sm">{ra}</p>
        </div>
        <div className="flex gap-4 p-4 pb-0 justify-center">
          <a href={linkedin}>
            <Linkedin />
          </a>
          <a href={instagram}>
            <Instagram />
          </a>
          <a href={github}>
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};
