import { Clock, Star } from "lucide-react";
import { testimonialData } from "../constant";
const Testimonial = () => {
  return (

      <div className="relative mt-20 border-b border-neutral-800 py-20 mx-10" id="Testimonials">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Testimonial
          </span>
          <h2 className="text-2xl lg:text-4xl md:text-3xl mt-10 lg:mt-20 tracking-wide">
            See Why Users{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-2xl lg:text-4xl md:text-3xl">
              {" "}
              Wireless Charging Pads
            </span>
          </h2>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap mt-10 lg:mt-20 ">
          {testimonialData.map((item) => {
            return (
              <div key={item.id} className="testimonialBox w-full sm:w-1/3 lg:w-1/4">
                <div className="p-4 rounded-xl border border-orange-700 shadow-orange-400">
                  <img
                    src={item.img}
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <p className="my-2 mt-2 text-md">{item.name}</p>
                    <p className="text-sm mb-4 text-neutral-500">{item.text}</p>
                    <div className="flex justify-start items-center my-2 ">
                      <p className="text-orange-700">
                        <Star />
                      </p>
                      <p className="text-orange-700">
                        <Star />
                      </p>
                      <p className="text-orange-700">
                        <Star />
                      </p>
                      <p className="text-orange-700">
                        <Star />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
 
  );
};

export default Testimonial;
