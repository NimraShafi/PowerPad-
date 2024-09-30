import { Menu, X } from "lucide-react";
import { navItems } from "../constant";
import { useState } from "react";
const Navbar = () => {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-nuetral-700/80 w-full ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight text-orange-600 font-bold">PoWerPad</span>
            </div>
            <div className="hidden lg:flex justify-between space-x-12 items-center">
            <ul className="hidden lg:flex ml-20 space-x-8 ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-orange-600 transition duration-50 linear">{item.label}</a>
                </li>
              ))}
            </ul>
              <a
                href="#buyNow"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md button buyNow-btn"
              >
                 Buy Now
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {MobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {MobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#buyNow" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Buy Now
                </a>
              </div>
            </div>
          )}
        </div>
    </nav>
  );
};

export default Navbar;
