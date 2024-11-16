import { Star } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
interface ICardProps {
  img: string;
  name: string;
  description: string;
  count: string;
  star: number;
  price: number;
}

export const CardItemMenu = ({
  img,
  name,
  description,
  count,
  price,
  star,
}: ICardProps) => {
  return (
    <div className="flex items-center justify-between w-full my-2">
      <div className="translate-x-[35%]  md:translate-x-[45%] drop-shadow-lg">
        <img
          src={`/img/${img}.png`}
          alt={img}
          className="md:w-36 w-20 object-cover"
        />
      </div>
      <div className="flex flex-col bg-[#F9FEFD] py-4 md:gap-y-3 gap-y-1 rounded-xl w-full px-[4%] pl-[8%] md:px-[10%] shadow-xl">
        <h1 className="sm:text-2xl text-md font-semibold">{name}</h1>
        <p className="text-sm text-gray-400">{description}</p>
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
          <p className="md:text-sm text-gray-500 font-medium">{count}</p>
          <p className="md:text-lg text-flashy font-bold">
            {`R$ ${price},00`}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
