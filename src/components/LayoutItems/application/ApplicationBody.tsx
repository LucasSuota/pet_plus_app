"use client";

import Image from "next/image";
import { PlusCircle } from "../../../../public/svg";
import { useState } from "react";
import AnimalModal from "./AnimalModal";

const ApplicationBody = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Image
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
        src={PlusCircle}
        alt="adicionar animal"
        width={45}
        height={45}
      />
      {isOpen && <AnimalModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ApplicationBody;
