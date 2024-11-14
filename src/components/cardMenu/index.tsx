/* eslint-disable @next/next/no-img-element */
// import { ChevronRight } from "lucide-react";
interface ICardProps {
  img: string;
  name: string;
  count: number;
  onAction: () => void;
}

export default function CardMenu({ img, name, onAction }: ICardProps) {
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
}

// export default function CardMenu({ img, name }: ICardProps) {
//   return (
//     <div className="flex items-center justify-between w-[36rem] my-2 -translate-x-5">
//       <div className="translate-x-10 drop-shadow-lg">
//         <img
//           src={`/img/${img}.png`}
//           alt={img}
//           className="w-full max-w-[9rem] h-auto object-cover"
//         />
//       </div>
//       <div className="bg-[#F9FEFD] py-8 rounded-xl w-full pl-[15%] shadow-xl">
//         <h1 className="md:text-3xl text-2xl font-black">{name}</h1>
//       </div>
//     </div>
//   );
// }

{
  /* <p className="md:text-lg text-gray-500 font-medium">
  {count <= 1 ? `${count} item` : `${count} itens`}{" "}
</p> */
}
{
  /* <div>
  <ChevronRight
    size={40}
    className="rounded-full bg-white text-flashy -translate-x-5 shadow-md hover:bg-gray-200 cursor-pointer"
    onClick={() => onAction()}
  />
</div> */
}
