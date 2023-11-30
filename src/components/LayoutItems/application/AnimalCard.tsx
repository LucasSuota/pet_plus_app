import React from "react";

const AnimalCard = (animal: any) => {
  return (
    <div className="w-4/5 mx-auto sm:w-2/5 bg-white rounded-xl shadow-xl flex flex-col mt-32">
      <div
        className="h-[400px] sm:h-[500px] rounded-t-md flex items-end justify-center"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%), url('/images/dogex.jpg')",
          backgroundSize: "cover",
        }}
      >
        <p className="font-black sm:text-6xl text-4xl text-[rgba(255,255,255,0.8)] uppercase overflow-hidden">
          {animal.animal.name}
        </p>
      </div>

      <div className="py-8 px-8">
        <p className="text-[#3a3a3a] font-black text-xl">{animal.animal.bio}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
