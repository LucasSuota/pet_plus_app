const Hero = () => {
  return (
    <div
      className={`mx-auto w-full min-h-[580px] flex items-center justify-center`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),url('/images/bg_hero.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="sm:text-6xl text-4xl font-bold text-white">
          Cuidar do seu{" "}
          <span className="font-serif italic text-sky-400">bichinho</span> nunca
          foi tão fácil!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
