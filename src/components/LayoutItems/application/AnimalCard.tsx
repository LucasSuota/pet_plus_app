"use client";

import React from "react";

type PetInfo = {
  name: string;
  sexo: string;
  idade: string;
  foto: string;
};

const AnimalCard = ({ name, idade, sexo, foto }: PetInfo) => {
  const handleClick = () => {
    alert(`nome: ${name}, idade: ${idade}, sexo: ${sexo}`);
  };

  return (
    <div
      onClick={() => handleClick()}
      className="mx-auto mt-2 sm:w-[500px] w-4/5 sm:h-[300px] sm:hover:h-[350px] h-[150px] hover:h-[200px] cursor-pointer transition-all"
    >
      <div
        className="w-full h-full flex items-end hover:items-center hover:justify-center justify-start rounded-3xl transition-all"
        style={{
          backgroundImage: `url('${foto}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="select-none p-2 text-white uppercase text-4xl font-black opacity-60">
          {name}
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
