import React from "react";

const AnimalCard = (animal: any) => {
  return (
    <div className="w-3/5 sm:w-2/5 bg-white rounded-xl shadow-xl flex flex-col  mt-10">
      <div
        className="h-[300px] rounded-t-md flex items-end justify-center"
        style={{
          backgroundImage: 'url("/images/dogex.jpg")',
          backgroundSize: "cover",
        }}
      >
        <p className="font-black text-6xl text-[rgba(255,255,255,0.9)] uppercase">
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
