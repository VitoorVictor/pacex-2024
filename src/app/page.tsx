"use client";

import { ArrowDown, ArrowLeft } from "lucide-react";
import CardMenu from "../components/cardMenu";
import { useState, useEffect } from "react";
import CardSectionMenu from "../components/cardSectionMenu";
import { Switch } from "@/src/components/ui/switch";

type MenuCategory = "saladas" | "pizzas" | "sobremesas" | "massas" | "bebidas";

type Item = {
  img: string;
  nome: string;
  quantidade: number;
  preco: number;
  descricao: string;
  estrela: number;
};

const dataCard = [
  {
    img: "pizza",
    nome: "Pizzas",
    quantidade: 3,
  },
  {
    img: "salada",
    nome: "Saladas",
    quantidade: 3,
  },
  {
    img: "sobremesa",
    nome: "Sobremesas",
    quantidade: 3,
  },
  {
    img: "massa",
    nome: "Massas",
    quantidade: 3,
  },
  {
    img: "bebida",
    nome: "Bebidas",
    quantidade: 3,
  },
];

const dataSectionCard: Record<MenuCategory, Item[]> = {
  saladas: [
    {
      img: "salada-tomate",
      nome: "Salada de Tomate Seco",
      quantidade: 200, // 200 gramas
      preco: 32,
      descricao:
        "Uma deliciosa salada feita com tomates secos, rúcula, queijo feta e um toque de azeite de oliva.",
      estrela: 4,
    },
    {
      img: "salada-ceaser",
      nome: "Salada Caesar",
      quantidade: 250, // 250 gramas
      preco: 28,
      descricao:
        "Clássica salada Caesar com alface romana, croutons crocantes, queijo parmesão e molho Caesar cremoso.",
      estrela: 5,
    },
    {
      img: "salada-grega",
      nome: "Salada Grega",
      quantidade: 230, // 230 gramas
      preco: 30,
      descricao:
        "Refrescante salada grega com tomate, pepino, azeitonas, cebola roxa e queijo feta, temperada com orégano e azeite.",
      estrela: 4,
    },
  ],
  pizzas: [
    {
      img: "pizza-marguerita",
      nome: "Pizza Marguerita",
      quantidade: 350, // 350 gramas
      preco: 45,
      descricao:
        "Tradicional pizza italiana com molho de tomate, mozzarella fresca e manjericão.",
      estrela: 5,
    },
    {
      img: "pizza-pepperoni",
      nome: "Pizza Pepperoni",
      quantidade: 380, // 380 gramas
      preco: 50,
      descricao:
        "Pizza recheada com queijo e fatias crocantes de pepperoni, uma escolha popular para os amantes de carne.",
      estrela: 4,
    },
    {
      img: "pizza-queijo",
      nome: "Pizza Quatro Queijos",
      quantidade: 400, // 400 gramas
      preco: 55,
      descricao:
        "Uma combinação irresistível de quatro queijos: mozzarella, gorgonzola, parmesão e queijo de cabra.",
      estrela: 5,
    },
  ],
  sobremesas: [
    {
      img: "torta-chocolate",
      nome: "Torta de Chocolate",
      quantidade: 250, // 250 gramas
      preco: 22,
      descricao:
        "Suculenta torta de chocolate, coberta com ganache de chocolate e decorada com raspas de chocolate.",
      estrela: 5,
    },
    {
      img: "pave-biscoito",
      nome: "Pavê de Biscoito",
      quantidade: 220, // 220 gramas
      preco: 20,
      descricao:
        "Delicioso pavê feito com camadas de biscoitos, creme de chocolate e cobertura de chantilly.",
      estrela: 4,
    },
    {
      img: "gelatina-frutas",
      nome: "Gelatina de Frutas",
      quantidade: 180, // 180 gramas
      preco: 10,
      descricao:
        "Refrescante gelatina de frutas, perfeita para um toque leve após uma refeição.",
      estrela: 3,
    },
  ],
  massas: [
    {
      img: "massa-bolognese",
      nome: "Massa à la Bolognese",
      quantidade: 400, // 400 gramas
      preco: 40,
      descricao:
        "Massa servida com um molho à bolonhesa rico em carne e tomates frescos.",
      estrela: 5,
    },
    {
      img: "massa-pesto",
      nome: "Massa Pesto",
      quantidade: 350, // 350 gramas
      preco: 38,
      descricao:
        "Espaguete envolto em um delicioso molho pesto feito de manjericão, pinhões e azeite.",
      estrela: 4,
    },
    {
      img: "massa-alfredo",
      nome: "Massa Alfredo",
      quantidade: 380, // 380 gramas
      preco: 42,
      descricao:
        "Massa cremosa com molho Alfredo, feito com queijo parmesão e creme de leite.",
      estrela: 5,
    },
  ],
  bebidas: [
    {
      img: "suco",
      nome: "Suco de Laranja Natural",
      quantidade: 400, // 200 mls
      preco: 8,
      descricao:
        "Refrescante suco de laranja feito com laranjas frescas espremidas na hora.",
      estrela: 4,
    },
    {
      img: "refrigerante",
      nome: "Refrigerante",
      quantidade: 350, // 250 gramas
      preco: 6,
      descricao:
        "Bebida gaseificada de sua escolha, perfeita para acompanhar sua refeição.",
      estrela: 3,
    },
    {
      img: "agua-saborizada",
      nome: "Água Saborizada",
      quantidade: 330, // 200 gramas
      preco: 5,
      descricao:
        "Água refrescante com infusão de frutas e ervas, ideal para hidratação.",
      estrela: 4,
    },
  ],
};

export default function Home() {
  const [sizeBg, setSizeBg] = useState("w-3/4");
  const [homeView, setHomeView] = useState(true);
  const [menuView, setMenuView] = useState(true);
  const [sectionMenuView, setSectionMenuView] = useState(false);
  const [sectionMenuPoorView, setSectionMenuPoorView] = useState(false);
  const [sectionMenuSelected, setSectionMenuSelected] =
    useState<MenuCategory>("saladas");
  const [titleSectionMenu, setTitleSectionMenu] = useState("");
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<null | number>(
    null
  );

  const validCategories: MenuCategory[] = [
    "saladas",
    "pizzas",
    "sobremesas",
    "massas",
    "bebidas",
  ];

  // Função para lidar com o scroll
  const handleScroll = () => {
    if (!sectionMenuView) {
      if (window.scrollY > 200) {
        // Defina o valor de rolagem onde você deseja mudar o tamanho
        setSizeBg("w-2/5");
      } else {
        setSizeBg("w-3/4");
      }
    }
  };

  useEffect(() => {
    // Adicionar o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpar o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O array vazio garante que o efeito só seja executado uma vez

  const sectionMenu = (item: {
    img?: string;
    nome: string;
    quantidade?: number;
  }) => {
    setHomeView(false);
    setMenuView(false);
    setSectionMenuView(true);
    setSizeBg("w-8/12");
    setTitleSectionMenu(item.nome);
    const category = item.nome.toLocaleLowerCase();
    if (validCategories.includes(category as MenuCategory)) {
      setSectionMenuSelected(category as MenuCategory);
    } else {
      console.error(`Categoria inválida: ${category}`);
    }
  };

  const sectionMenuPoor = (
    item: {
      img?: string;
      nome: string;
      quantidade?: number;
    },
    index: number
  ) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
    setSectionMenuPoorView(!sectionMenuPoorView);
    const category = item.nome.toLocaleLowerCase();
    if (validCategories.includes(category as MenuCategory)) {
      setSectionMenuSelected(category as MenuCategory);
    } else {
      console.error(`Categoria inválida: ${category}`);
    }
  };

  const getSelectedSectionData = () => {
    return dataSectionCard[sectionMenuSelected] || [];
  };

  const handleSlideOut = () => {
    setIsSlidingOut(true); // Ativa a animação de saída

    // Se necessário, você pode adicionar um timeout para ocultar a div após a animação
    setTimeout(() => {
      setSectionMenuView(false);
      setMenuView(true);
      setHomeView(true);
      setSizeBg("w-3/4");
      setIsSlidingOut(false);
    }, 490); // A duração da animação de slideOut (ajuste conforme necessário)
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // Função para alternar o estado do Switch
  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <>
      {isSwitchOn ? (
        <div className="bg-gray-100">
          {/* <div className={"absolute flex p-5 items-center h-20"}>
        <h1 className="font-bold text-white text-xl px-2">Menu com UX e UI</h1>
        <Switch />
      </div> */}
          {homeView && (
            <div
              className={`${sizeBg} h-screen bg-flashy transition-all duration-500 ease-in-out animate-slideIn`}
              id="home"
            >
              <div className={"absolute flex p-5 items-center"}>
                <h1 className="font-bold text-white text-xl px-2">
                  Menu com UX e UI
                </h1>
                <Switch
                  checked={isSwitchOn}
                  onCheckedChange={handleSwitchChange}
                />
              </div>
              <div className="text-white h-full flex flex-col justify-around">
                <div></div>
                <div className="flex flex-col justify-center items-end mr-[8%]">
                  <div className="flex sm:gap-4 gap-2">
                    <h1 className="xl:text-[10rem] md:text-[6.4rem] text-[5rem] font-extrabold italic text-right">
                      Menu
                    </h1>
                  </div>

                  <p
                    className={`xl:text-2xl md:text-base text-xs font-bold italic text-right transition-all duration-1000 transform ${
                      sizeBg === "w-3/4"
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-x-10"
                    }`}
                  >
                    Sofisticação e sabor em cada detalhe.
                  </p>
                </div>
                <div className="flex justify-center items-end w-screen">
                  <button
                    onClick={() => {
                      document
                        .getElementById("menu")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <ArrowDown className="w-6 h-6 md:w-12 md:h-12 animate-bounce drop-shadow-lg" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {menuView && (
            <div
              className={`${sizeBg} min-h-screen bg-flashy py-10 transition-all duration-500 ease-in-out animate-slideIn`}
              id="menu"
            >
              <div className="w-screen flex flex-col items-center space-y-10">
                {dataCard.map((item, index) => (
                  <CardMenu
                    img={item.img}
                    name={item.nome}
                    count={item.quantidade}
                    key={index}
                    onAction={() => {
                      sectionMenu(item);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          {sectionMenuView && (
            <div
              className={`w-8/12 min-h-screen bg-flashy transform ${
                isSlidingOut ? "animate-slideOut" : "animate-slideIn"
              }`}
            >
              <div className="px-[10%] py-[5%] flex">
                <ArrowLeft
                  className="h-10 w-10 text-white cursor-pointer"
                  onClick={() => {
                    handleSlideOut();
                  }}
                />
              </div>
              <div className="w-screen flex justify-center md:text-6xl text-4xl font-black text-white ">
                <h1 className="text-stroke p-2">Menu de {titleSectionMenu}</h1>
              </div>
              <div className="w-screen flex flex-col items-center py-20">
                {getSelectedSectionData().map((item, index) => (
                  <CardSectionMenu
                    img={item.img}
                    name={item.nome}
                    drink={titleSectionMenu === "Bebidas" ? true : false}
                    count={item.quantidade}
                    star={item.estrela}
                    price={item.preco}
                    key={index}
                    description={item.descricao}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-100">
          {/* Header e Switch, sem centralização e estilização adequada */}
          <div className="flex p-5 items-center">
            <h1 className="font-bold text-gray-900 text-xl">
              Menu com UX e UI
            </h1>
            <Switch checked={isSwitchOn} onCheckedChange={handleSwitchChange} />
          </div>

          {/* Conteúdo da página "Home", misturado com outras seções */}
          <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold italic">Menu</h1>
            <p className="text-xl font-bold italic">
              Sofisticação e sabor em cada detalhe.
            </p>
          </div>

          {/* Seção do Menu, exposta sem lógica de visibilidade */}
          <div className="min-h-screen bg-gray-300 flex flex-col items-center space-y-10">
            {dataCard.map((item, index) => (
              <>
                <CardMenu
                  img={item.img}
                  name={item.nome}
                  count={item.quantidade}
                  key={index}
                  onAction={() => sectionMenuPoor(item, index)}
                />
                {sectionMenuPoorView && selectedCardIndex === index && (
                  <>
                    <div className="w-screen flex justify-center md:text-6xl text-4xl font-black text-white ">
                      <h1 className="text-stroke p-2">Opções</h1>
                    </div>
                    <div className="w-screen flex flex-col items-center py-4">
                      {getSelectedSectionData().map((item, index) => (
                        <CardSectionMenu
                          img={item.img}
                          name={item.nome}
                          drink={titleSectionMenu === "Bebidas" ? true : false}
                          count={item.quantidade}
                          star={item.estrela}
                          price={item.preco}
                          key={index}
                          description={item.descricao}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
