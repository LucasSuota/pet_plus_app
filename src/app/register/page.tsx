import { Register } from "@/components/LayoutItems";
import { Logo } from "../../../public/svg";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="overflow-hidden min-h-screen flex items-center justify-center bg-[url()]"
      style={{
        backgroundImage: `url('/images/loginandregister-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white sm:w-[500px] md:w-[500px] w-[300px] h-[650px] flex flex-col items-center justify-center gap-8 rounded-xl shadow-xl text-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="mb-2"
            src={Logo}
            alt="pet+ logo"
            width={50}
            height={50}
          />
          <h2 className="text-xl font-semibold">BEM VINDO</h2>
        </div>
        <div className="flex flex-col">
          <Register />
        </div>
      </div>
    </main>
  );
}
