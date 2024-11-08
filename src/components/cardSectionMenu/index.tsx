import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface ICardProps {
  img: string;
  name: string;
  description: string;
  count: number;
  star: number;
  price: number;
  drink?: boolean;
}

export default function CardMenu({
  img,
  name,
  description,
  count,
  price,
  star,
  drink = false,
}: ICardProps) {
  const [descriptionView, setDescriptionView] = useState(false);
  return (
    <div className="flex items-center justify-between md:w-[35rem] w-[22rem] my-2">
      <div className="translate-x-[35%]  md:translate-x-[45%] drop-shadow-lg">
        <img src={`/img/${img}.png`} alt={img} className="w-36 object-cover" />
      </div>
      <div className="flex flex-col bg-[#F9FEFD] py-4 md:gap-y-3 r gap-y-1 rounded-xl w-full px-[10%] shadow-xl">
        <h1 className="md:text-2xl text-lg font-semibold">{name}</h1>
        {descriptionView && (
          <p className="text-sm text-gray-400">{description}</p>
        )}
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              strokeWidth={1.75}
              className="text-yellow-500 w-4 -4"
              fill={index < star ? "currentColor" : "none"} // Preencher estrela se o índice for menor que o número de estrelas
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="md:text-sm text-gray-500 font-medium">
            {drink ? `${count} ml` : `${count} g`}
          </p>
          <p className="md:text-lg text-flashy font-bold">
            {`R$ ${price},00`}{" "}
          </p>
        </div>
      </div>
      <div>
        {!descriptionView ? (
          <ChevronDown
            strokeWidth={2.25}
            size={40}
            className="rounded-full bg-white text-flashy -translate-x-5 shadow-md hover:bg-gray-200 cursor-pointer"
            onClick={() => setDescriptionView((prevState) => !prevState)}
          />
        ) : (
          <ChevronUp
            strokeWidth={2.25}
            size={40}
            className="rounded-full bg-white text-flashy -translate-x-5 shadow-md hover:bg-gray-200 cursor-pointer"
            onClick={() => setDescriptionView((prevState) => !prevState)}
          />
        )}
      </div>
    </div>
  );
}
