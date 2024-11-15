// import ButtonRouter from "@/src/components/ButtonRouter";

import ButtonRouter from "@/components/ButtonRouter";
import { CardProfile } from "@/components/CustomProfile";

const teamMembers = [
  {
    name: "Gabriel Alexandre Victório",
    ra: "233138-1",
    img: "gabriel.jpeg",
  },
  {
    name: "Leonardo Santos",
    ra: "60002150",
    img: "leonardo.jpeg",
  },
  {
    name: "Raphael Carmanini Silva Teixeira",
    ra: "240610-2",
    img: "raphael.jpg",
  },
  {
    name: "Ruan Higor Silva",
    ra: "227746-1",
    img: "ruan.jpeg",
  },
  {
    name: "Vitor Gabriel Blasques Victor",
    ra: "223907-1",
    img: "vitor.jpeg",
  },
];

export default function Credits() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center bg-gray-100 overflow-x-hidden">
      <div className="w-screen border-b border-gray-500 bg-gray-300 text-white flex md:justify-between justify-center px-10 items-center">
        <h1 className="font-bold text-black text-2xl hidden md:flex">
          PACEX-2024
        </h1>
        <div className="flex md:gap-8 gap-2 justify-center py-2">
          <ButtonRouter
            route={"/"}
            name={"Início"}
            className="bg-gray-700 hover:bg-blue-900"
          />
          <ButtonRouter
            route={"noUx"}
            name={"Cardápio sem UX"}
            className="bg-flashy hover:bg-red-800"
          />
          <ButtonRouter route={"withUx"} name={"Cardápio com UX"} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Seção de introdução */}
        <section className="text-center bg-white p-6 md:p-10 rounded-lg shadow-md text-gray-800 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            Créditos do Projeto
          </h1>
          <p className="text-md md:text-lg text-gray-700">
            Os integrantes abaixo são estudantes do curso de Sistemas de
            Informação, do 6° período, e contribuíram para a criação deste
            projeto.
          </p>
        </section>

        {/* Seção dos Cards dos Integrantes */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((item) => (
            <div className="flex justify-center" key={item.ra}>
              <CardProfile name={item.name} ra={item.ra} img={item.img} />
            </div>
          ))}
          {/* {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))} */}
        </section>
      </div>
    </div>
  );
}
