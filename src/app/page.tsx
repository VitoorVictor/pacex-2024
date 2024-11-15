/* eslint-disable @next/next/no-img-element */
import ButtonRouter from "../components/ButtonRouter";

export default function Home() {
  const background = "/img/background2.jfif";
  return (
    <div
      className={`min-w-screen min-h-screen flex items-center justify-center bg-cover bg-center`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex flex-col items-start p-5 rounded-lg md:translate-y-0 -translate-y-20 ">
        <div className="mx-auto mb-10">
          <img
            src="/img/monitor2.png"
            alt="monitor"
            className="md:w-auto w-60"
          />
        </div>
        <h1 className="font-bold text-2xl sm:text-5xl ">
          Bem-vindo ao Pacex 2024
        </h1>
        <h2 className="font-semibold text-sm sm:text-xl  pb-3 border-b-4 border-flashy my-2 sm:my-4 text-flashy">
          User Experience (Experiência do Usuário)
        </h2>
      </div>

      {/* Botão Responsivo */}
      <div className="absolute bottom-32 sm:bottom-16">
        <ButtonRouter
          route={"/explanation"}
          name={"Continuar experiência aqui"}
        />
      </div>
    </div>
  );
}
