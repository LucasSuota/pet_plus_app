import { Login } from "@/components/LayoutItems";
import { Logo } from "../../../public/svg";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/loginandregister-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white sm:w-[500px] w-[300px] sm:h-[600px] h-[600px] flex flex-col items-center justify-center gap-12 rounded-xl shadow-xl text-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            src={Logo}
            alt="pet+ logo"
            width={80}
            height={80}
          />
          <h2 className="text-xl font-semibold">BEM VINDO DE NOVO</h2>
          <h3 className="text-md font-regular">Seu pet está esperando!</h3>
        </div>
        <div className="flex flex-col">
          <Login />
        </div>
      </div>
    </main>
  );
}
