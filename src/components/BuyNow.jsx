const BuyNow = () => {
  return (
    <>
    <div id="buyNow">
      <div className="text-center pt-40 pb-20">
      <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Buy Now
        </span>
        </div>
    <div className="flex justify-center items-center flex-col gap-2 buyNow min-h-[350px]">

    <h1 className="font-semibold text-center text-white tracking-wider paragraph">
    Upgrade Your Charging Experience with Wireless Charging Pads – Limited Time Offer!
    </h1>

    <p className="text-center text-white paragraph">
    Wireless Charging Pads is priced at $49.99, with free shipping included.
    </p>
    <div className="flex justify-center my-5" >
      <a
        href="##buyNow"
        className="bg-gradient-to-r from-orange-500 to-orange-800  rounded-md button buyNow-btn"
      >
        Buy Now
      </a>
    </div>
 
  </div>
  </div>
  </>
  )
}

export default BuyNow