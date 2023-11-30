"use client";

import Image from "next/image";
import { PlusCircle } from "../../../../public/svg";
import { useContext, useEffect, useState } from "react";
import AnimalModal from "./AnimalModal";
import { child, get, getDatabase, ref } from "firebase/database";
import { AuthContext } from "@/context/AuthContext";
import AnimalCard from "./AnimalCard";
import { AnimalDataType } from "@/types";

const ApplicationBody = () => {
  const currentUser = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [animalData, setAnimalData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, "users/" + currentUser.uid));

        if (snapshot.exists()) {
          setAnimalData(snapshot.val());
          console.log(snapshot.val());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentUser.uid]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {animalData && (
        <div className="w-full items-center justify-center flex flex-col sm:flex-row gap-10">
          {Object.keys(animalData).map((animalName) => (
            <AnimalCard key={animalName} animal={animalData[animalName]} />
          ))}
        </div>
      )}
      {PlusCircle && (
        <Image
          onClick={() => setIsOpen(true)}
          className="cursor-pointer mt-10"
          src={PlusCircle}
          alt="adicionar animal"
          width={30}
          height={30}
        />
      )}

      {isOpen && <AnimalModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ApplicationBody;
