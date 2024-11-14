/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import ButtonRouter from "@/src/components/ButtonRouter";
import CardSectionMenu from "@/src/components/cardSectionMenu";
import React, { useState, useEffect } from "react";

type MenuItem = {
  img: string;
  nome: string;
  quantidade: number;
  preco: number;
  descricao: string;
  estrela: number;
};

const dataSectionCard = {
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

export default function WithUX() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Tipando o array allItems como MenuItem[]
  const allItems: MenuItem[] = [
    ...dataSectionCard.saladas,
    ...dataSectionCard.pizzas,
    ...dataSectionCard.sobremesas,
    ...dataSectionCard.massas,
    ...dataSectionCard.bebidas,
  ];

  const shuffleArray = (array: MenuItem[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [shuffledItems, setShuffledItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    setShuffledItems(shuffleArray([...allItems]));
  }, []);

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center bg-gray-100 p-5 pt-0">
      {loading ? (
        <div className="flex items-center justify-center mt-80">
          <div className="w-16 h-16 animate-spin">
            <img src="/img/loading.png" alt="loading" />
          </div>
        </div>
      ) : (
        <>
          <div className="w-screen bg-gray-300 text-white text-center">
            <div className="flex md:gap-8 gap-2 justify-center py-2">
              <ButtonRouter
                route={"home"}
                name={"Início"}
                className="bg-gray-700 hover:bg-blue-900"
              />
              <ButtonRouter
                route={"withUx"}
                name={"Cardápio com UX"}
                className="bg-flashy hover:bg-red-800"
              />
              <ButtonRouter route={"credits"} name={"Créditos"} />
            </div>
          </div>

          <div className="w-full bg-flashy text-white p-6 text-center rounded-lg mt-4">
            <h1 className="text-3xl font-bold">Bem-vindo ao Nosso Cardápio!</h1>
            <p className="text-xl mt-2">Encontre suas comidas favoritas</p>
          </div>

          <div className="py-6 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12">
            {shuffledItems.map((item, index) => (
              <CardSectionMenu
                img={item.img}
                name={item.nome}
                drink={true}
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
    </div>
  );
}
