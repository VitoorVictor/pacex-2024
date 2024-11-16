/* eslint-disable @next/next/no-img-element */
// import { ChevronRight } from "lucide-react";
interface ICardProps {
  img: string;
  name: string;
  count: number;
  onAction: () => void;
}

export const CardMenuCategory = ({ img, name, onAction }: ICardProps) => {
  return (
    <div
      className="flex items-center justify-between md:min-w-[20rem] min-w-[15rem] flex-shrink-0"
      onClick={() => onAction()}
    >
      <div className="translate-x-[40%] drop-shadow-lg">
        <img
          src={`/img/${img}.png`}
          alt={img}
          className="w-full max-w-[6rem] h-auto object-cover"
        />
      </div>
      <div className="bg-[#F9FEFD] py-4 rounded-xl w-full pl-[15%] shadow-lg">
        <h1 className="md:text-2xl text-xl font-black">{name}</h1>
      </div>
    </div>
  );
};
