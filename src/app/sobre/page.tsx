import { Header, Login } from "@/components/LayoutItems";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="mx-auto w-full sm:min-h-[580px] min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%), url('/images/bg_hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="sm:mx-2 max-w-screen-lg mx-10">
          <h1 className="text-white text-4xl font-bold mt-10">Sobre:</h1>
          <p className="text-white sm:text-2xl text-xl mt-2">
            Nós procuramos uma maneira de simplificar o cuidado do seu bichinho,
            deixando ele disponível na internet, então sempre que precisar, a
            informação está aqui.
          </p>
          <p className="text-white sm:text-2xl text-xl mt-2">
            Precisa deixar outra pessoa responsável ou simplismente precisa
            organizar tudo a respeito do seu bichinho? Bem-vindo a PetPlus,
            cadastre todos seus animais e tudo sobre eles!
          </p>
          <p className="text-white sm:text-2xl text-xl mt-2">
            A ideia do projeto é totalmente de Maria Eduarda Cuhn Kutax, que viu
            a necessidade de tal projeto. O desenvolvimento e design é de Lucas
            Suota.
          </p>
        </div>
      </main>
    </>
  );
}
