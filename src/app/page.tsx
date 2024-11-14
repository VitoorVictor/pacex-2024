/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter, useSearchParams } from "next/navigation"; // Importando o hook
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { Button } from "@/src/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const searchParams = useSearchParams(); // Captura os parâmetros de URL
  const monitorView = searchParams.get("monitor") === "true"; // Captura o valor do parâmetro 'monitor'
  const [text] = useTypewriter({
    words: [
      "Vamos apresentar alguns elementos pensados em um designe com UX a seguir, e depois um exemplo prático de site.",
    ],
    typeSpeed: 40,
    loop: 1,
  });
  const background = "/img/background2.jfif";
  const router = useRouter();

  return (
    <div
      className={`min-w-screen min-h-screen flex items-center justify-center bg-cover bg-center`}
      style={{
        backgroundImage: !monitorView
          ? `url(${background})`
          : `url(${background})`,
      }}
    >
      {!monitorView ? (
        <>
          <div className="flex flex-col items-start p-5 rounded-lg md:translate-y-0 -translate-y-20 ">
            <h1 className="font-bold text-2xl sm:text-5xl ">
              Bem-vindo ao Pacex 2024
            </h1>
            <h2 className="font-semibold text-sm sm:text-xl  pb-3 border-b-4 border-red-700 my-2 sm:my-4 text-red-700">
              User Experience (Experiência do Usuário)
            </h2>
          </div>

          {/* Botão Responsivo */}
          <div className="absolute bottom-32 sm:bottom-16">
            <Button onClick={() => (window.location.href = "?monitor=true")}>
              Continar experiência aqui
            </Button>
          </div>
        </>
      ) : (
        <div className="relative mx-[2%]">
          {/* Imagem como fundo, responsiva */}
          <img
            src="/img/monitor.png"
            alt="monitor"
            className="w-full h-auto max-w-[320px]  md:max-w-[500px]  object-cover"
          />

          <h1 className="font-semibold md:text-xl text-md z-10 absolute top-1/4 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 -translate-y-10 text-center w-full px-4">
            {text}
            <span>
              <Cursor />
            </span>
          </h1>
          <div className="flex justify-center z-10 absolute bottom-2/4 translate-y-4  md:translate-y-14  text-center w-full px-4">
            <ChevronDown className="animate-bounce" />
          </div>
          <div className="flex justify-center z-10 absolute bottom-1/4 -translate-y-1  md:-translate-y-2 text-white  text-center w-full md:px-4 px-2">
            {/* <Button className="py-0">a</Button> */}
            <button
              className=" text-sm md:w-8 rounded-lg text-black md:h-[16px] h-[12px] w-6 animate-colorChange"
              onClick={() => router.push("/exemple")}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}
