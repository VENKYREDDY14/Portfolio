import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navLinks = ["hero", "about", "projects", "contact"];

  return (
    <nav className="sticky top-0 z-50 bg-[#0f0c29]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Venkateswara Reddy
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((name) => (
              <Link
                key={name}
                to={name}
                smooth={true}
                duration={500}
                className="capitalize text-gray-200 hover:text-white cursor-pointer relative group"
              >
                {name}
                <span className="block h-0.5 max-w-0 bg-purple-500 group-hover:max-w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0f0c29]/90 px-4 pb-4 space-y-2">
          {navLinks.map((name) => (
            <Link
              key={name}
              to={name}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-white font-medium capitalize"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;