"use client";

import Image from "next/image";
import { PlusCircle } from "../../../../public/svg";
import { useContext, useEffect, useState } from "react";
import AnimalModal from "./AnimalModal";
import { child, get, getDatabase, ref } from "firebase/database";
import { AuthContext } from "@/context/AuthContext";
import AnimalCard from "./AnimalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { EffectCoverflow, Pagination } from "swiper/modules";

const ApplicationBody = () => {
  const currentUser = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [animalData, setAnimalData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, "users/" + currentUser.uid));

        if (snapshot.exists()) {
          setAnimalData(snapshot.val());
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
        <div className="w-full items-center justify-center flex flex-row sm:flex-row">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 10,
              stretch: 2,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {Object.keys(animalData).map((animalName) => (
              <SwiperSlide key={animalName}>
                <AnimalCard animal={animalData[animalName]} />
              </SwiperSlide>
            ))}
          </Swiper>
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
