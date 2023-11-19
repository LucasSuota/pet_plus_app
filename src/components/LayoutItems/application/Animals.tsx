import React from "react";
import AnimalCard from "./AnimalCard";
import { user } from "@/constants/user";

const Animals = () => {
  return (
    <div className="mx-auto max-w-screen-xl sm:flex flex-col items-center justify-center gap-4">
      {user.pets.map((pet, index) => (
        <div key={index}>
          <AnimalCard
            name={pet.name}
            idade={pet.idade}
            sexo={pet.sexo}
            foto={pet.foto}
          />
        </div>
      ))}
    </div>
  );
};

export default Animals;
