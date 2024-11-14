import ButtonRouter from "@/src/components/ButtonRouter";

export default function Explanation() {
  return (
    <div className="w-screen min-h-screen bg-gray-200">
      <div className="container mx-auto px-4 py-10">
        <section className="bg-white p-6 md:p-10 rounded-lg shadow-md text-gray-800">
          <h1 className="text-xl md:text-2xl font-bold text-black mb-2">
            O QUE É?{" "}
            <span className="text-red-600">EXPERIÊNCIA DO USUÁRIO</span>
          </h1>
          <p className="text-sm md:text-base">
            Experiência do Usuário (UX) é como uma pessoa se sente ao usar um
            site, aplicativo ou produto. É sobre tornar a navegação fácil,
            agradável e sem frustrações. O objetivo é garantir que o usuário
            encontre o que precisa de forma rápida e simples, deixando uma
            impressão positiva. Quando um site é bem planejado em termos de UX,
            ele é fácil de usar e faz com que o usuário tenha vontade de voltar
            a utilizá-lo.
          </p>
        </section>

        <section className="bg-white p-6 md:p-10 mt-8 rounded-lg shadow-md text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
            COMO É APLICADA?
          </h2>
          <p className="text-sm md:text-base mb-4">
            A Experiência do Usuário (UX) é aplicada através do planejamento e
            design de sites, aplicativos e produtos para tornar a navegação
            intuitiva e agradável. Isso envolve:
          </p>
          <ul className="list-decimal list-inside text-sm md:text-base">
            <li>
              Pesquisa com Usuários: Entender quem são os usuários e o que eles
              precisam, usando entrevistas e testes.
            </li>
            <li>
              Criação de Protótipos: Desenvolver esboços e modelos de como o
              site ou aplicativo funcionará.
            </li>
            <li>
              Testes de Usabilidade: Testar o design com pessoas reais para
              identificar dificuldades e melhorar a interface.
            </li>
            <li>
              Design Intuitivo: Organizar as informações de forma clara e usar
              elementos visuais (botões, ícones, cores) que facilitem a
              navegação.
            </li>
          </ul>
          <p className="text-sm md:text-base mt-4">
            Aplicando essas etapas, o objetivo é criar uma experiência que seja
            fácil, eficiente e agradável para o usuário.
          </p>
        </section>

        <section className="bg-white p-6 md:p-10 mt-8 rounded-lg shadow-md text-gray-800">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            EXEMPLOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Exemplo 1: Componentes UX */}
            <div className="bg-white p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Componentes UX
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Exemplos de componentes bem desenhados para melhorar a
                experiência do usuário.
              </p>
              <ButtonRouter route={"/exemple"} name={"Componentes UX"}>
                Ver Componentes
              </ButtonRouter>
            </div>

            {/* Exemplo 2: Site sem UX */}
            <div className="bg-white p-4  border-x-2 border-gray-300 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Site sem UX
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Um site com pouca atenção à experiência do usuário, dificultando
                a navegação.
              </p>
              <ButtonRouter route={"/noUx"} name={"Site sem UX"}>
                Ver Exemplo
              </ButtonRouter>
            </div>

            {/* Exemplo 3: Site com UX */}
            <div className="bg-white p-4  flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Site com UX
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Um site otimizado para proporcionar uma navegação fácil e
                intuitiva.
              </p>
              <ButtonRouter route={"/withUx"} name={"Site com UX"}>
                Ver Exemplo
              </ButtonRouter>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
