import pad4 from "../assets/pad4.webp";
const ProductSection = () => {
  return (

      <div className="relative mt-40 border-b border-neutral-800 productParentBox" id="product">
     <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Product
        </span>
        <h2 className="text-2xl lg:text-4xl md:text-3xl mt-10 lg:mt-20 tracking-wide">
        Introducing {" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-2xl lg:text-4xl md:text-3xl">
            {" "}
            Wireless Charging Pads
          </span>
        </h2>
      </div>

        <div
          className="flex justify-center items-center flex-wrap gap-10 my-20 rounded p-4"
          style={{ boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.75)" }}>
          <div className="object-cover justify-center  items-center productImg ">
            <img src={pad4} alt="" />
          </div>

          <div className=" rounded flex justify-center flex-col flex-wrap ml-10">
            <h1 className="text-2xl lg:text-4xl md:text-3xl tracking-wide">
              Product {" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-2xl lg:text-4xl md:text-3xl">
                Description
              </span>
            </h1>
            <p className="text-sm lg:text-md text-neutral-500 mt-4 paragraph">
            Wireless Charging Pads delivers fast, efficient, and wireless charging for all Qi-enabled devices. Its minimalist design complements any setting, whether it's your office desk or nightstand. Featuring up to 15W fast charging and compatibility with multiple devices, ChargeMate Pro ensures your smartphone, earbuds, and smartwatch are always charged and ready to go.
            </p>
            <div className="flex justify-start my-5">
              <a
                href="#buyNow"
                className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md button buyNow-btn"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

  );
};

export default ProductSection;
