import { features } from "../constant";

const FeaturesSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 py-20 mx-20" id="features">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-2xl lg:text-4xl md:text-3xl mt-10 lg:mt-20 tracking-wide">
        Why Choose{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-2xl lg:text-4xl md:text-3xl">
            {" "}
            Wireless Charging Pads
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex p-4 featureBox hover:skew-y-2" style={{ boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.75)" }}>
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-4 text-md">{feature.text}</h5>
                <p className="text-sm p-2 mb-4 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
