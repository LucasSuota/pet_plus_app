"use client";

import Image from "next/image";
import { PlusCircle } from "../../../../public/svg";
import { useState } from "react";
import AnimalModal from "./AnimalModal";
import AnimalCard from "./AnimalCard";

const ApplicationBody = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <AnimalCard
        animalName="PITER"
        animalAge="2"
        animalBio="Engraçado"
        animalGender="Macho"
      />

      <Image
        onClick={() => setIsOpen(true)}
        className="cursor-pointer mt-10"
        src={PlusCircle}
        alt="adicionar animal"
        width={30}
        height={30}
      />
      {isOpen && <AnimalModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ApplicationBody;
