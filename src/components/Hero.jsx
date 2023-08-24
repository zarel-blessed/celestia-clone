import heroImage from "../assets/home-hero-image.svg";

const Hero = () => {
  return (
    <section className="px-8 h-screen flex justify-start pt-60 relative">
      <div className="flex flex-col gap-8 relative">
        <h1 className="text-[110px] max-w-[80%] leading-[0.95] font-poppins font-semibold">
          The first modular blockchain network
        </h1>
        <p className="font-poppins text-lg max-w-[650px] leading-[1.1]">
          Celestia is a modular consensus and data network, built to enable
          anyone to easily deploy their own blockchain with minimal overhead.
        </p>
        <div>
          <button className="py-3 px-6 bg-black text-neutral-100 rounded-md font-semibold mr-4">
            Learn Celestia
          </button>
          <button className="py-3 px-6  bg-neutral-100 border border-black rounded-md font-semibold mr-4">
            Build Modular
          </button>
        </div>
        <img className="absolute -z-10 right-0" src={heroImage} />
      </div>
    </section>
  );
};

export default Hero;
