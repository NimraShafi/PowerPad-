import video from "../assets/video.mp4";
import pad1 from "../assets/pad1.jpg";
import pad2 from "../assets/pad2.webp";
import pad3 from "../assets/pad3.webp";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-2xl lg:text-4xl md:text-3xl text-center tracking-wide">
        <div className="mb-1">Charge Smarter with </div>
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text  text-2xl lg:text-4xl md:text-3xl">
          {" "}
          Wireless Charging Pads
        </span>
      </h1>
      <p className="mt-5 text-sm lg:text-md text-center text-neutral-500 paragraph">
      Say goodbye to tangled cables and slow charging. Meet the sleek and powerful Wireless Charging Pads, compatible with all your essential devices.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#buyNow"
          className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md button buyNow-btn"
        >
          Buy Now
        </a>
      </div>

      <div className="flex flex-wrap mt-10 justify-center animate-pulse ">
          <div className="rounded border border-orange-700 shadow-orange-400 m-2 box overflow-hidden">
            <img
              src={pad2}
              alt="Workspace Setup"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg border border-orange-700 shadow-orange-400 m-2 box overflow-hidden">
            <img
              src={pad1}
              alt="Workspace Setup"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg border border-orange-700 shadow-orange-400 m-2 box overflow-hidden">
            <img
              src={pad3}
              alt="Workspace Setup"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
