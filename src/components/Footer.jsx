import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <>
    <div className="gap-10 mt-60 text-neutral-500 tracking-wider bg-clip-text border-t border-neutral-800 pt-20 pb-20 px-5 footer ">
<div>
    <p className="text-xl text-orange-600 ">Follow Us on</p>
    <div className="flex gap-3 mt-4 ">
        <a href="https://www.instagram.com/" className="hover:text-orange-600 hover:scale-x-110 transition duration-50 linear "><Instagram /></a>
        <a href="https://www.facebook.com/"  className="hover:text-orange-600 hover:scale-x-110 transition duration-50 linear"><Facebook /></a>
        <a href="https://twitter.com/"  className="hover:text-orange-600 hover:scale-x-110 transition duration-50 linear"><Twitter /></a>
        <a href="https://www.linkedin.com/in/nimra-shafi12/"  className="hover:text-orange-600 hover:scale-x-110 transition duration-50 linear"><Linkedin /></a>
    </div>
</div>
<div>
    <p className="text-xl text-orange-600">Quick Links</p>
    <div className="flex flex-col justify-start items-start mt-4 gap-1 text-sm">
        <a href="#product"  className="hover:text-orange-600 hover:translate-x-2 transition duration-50 linear">Product</a>
        <a href="#features"  className="hover:text-orange-600 hover:translate-x-2 transition duration-50 linear">Features</a>
        <a href="#Testimonials"  className="hover:text-orange-600 hover:translate-x-2 transition duration-50 linear">Testimonial</a>
        <a href="#buyNow"  className="hover:text-orange-600 hover:translate-x-2 transition duration-50 linear">Buy Now</a>
    </div>
</div>
<div className="flex justify-start items-start flex-col">
    <p className="text-xl mb-4 text-orange-600">Contact Info</p>
    <div className="flex gap-3 flex-col">
        <div className="flex justify-start items-start gap-3 text-sm">
            <p className="text-orange-600"><Phone /></p>
            <p>+92 3130128944</p>
        </div>
        <div className="flex justify-start items-start gap-3 text-sm">
            <p className="text-orange-600"><Mail/></p>
            <p>nimrashafi707@gmail.com</p>
        </div>
        <div className="flex justify-start items-start gap-3 text-sm">
            <p className="text-orange-600"><MapPin/></p>
            <p>Karachi, Pakistan.</p>
        </div>
    </div>
</div>
    </div>
    <div className="text-sm p-4 bg-gradient-to-r from-orange-500 to-orange-800 flex justify-center items-center">
  
            <p>@2024 PoWerPad. All right reserved.</p>
    </div>
    </>
  )
}

export default Footer