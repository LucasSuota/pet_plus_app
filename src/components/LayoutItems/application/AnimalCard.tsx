import { AnimalCardType } from "@/types";

const AnimalCard = ({
  animalName,
  animalGender,
  animalAge,
  animalBio,
}: AnimalCardType) => {
  return (
    <div className="w-4/5 sm:w-1/5 bg-white rounded-xl shadow-xl flex flex-col mt-10">
      <div
        className="sm:h-[400px] h-[350px] rounded-t-xl flex items-end justify-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),url('/images/dogex.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <p className="font-black text-7xl text-white opacity-85">
          {animalName}
        </p>
      </div>
      <div className="py-8 px-8">
        <p className="text-[#3a3a3a] font-black text-xl">
          {animalGender}, {animalAge} anos
        </p>
        <p className="text-[#3a3a3a] font-black text-xl">{animalBio}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
