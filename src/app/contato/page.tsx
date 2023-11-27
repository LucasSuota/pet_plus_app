import { Header } from "@/components/LayoutItems";

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
        <div className="sm:mx-2 max-w-screen-xl mx-10">
          <h1 className="text-white text-4xl font-bold mt-10">Contato:</h1>
          <p className="text-2xl text-white">lucassuotass@gmail.com</p>
        </div>
      </main>
    </>
  );
}
