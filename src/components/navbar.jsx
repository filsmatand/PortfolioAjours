import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-green-800">
          <span className="text-white">Matanda</span>
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-green-500 cursor-pointer border-lg border-green-500 focus">Home</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Projects</li>
          <li className="hover:text-green-500 cursor-pointer">Skills</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition">
          Hire Me
        </button>

        {/* Hamburger */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-1 bg-gray-800 mb-1"></div>
          <div className="w-6 h-1 bg-gray-800 mb-1"></div>
          <div className="w-6 h-1 bg-gray-800"></div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/70 shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Projects</li>
            <li className="hover:text-orange-500 cursor-pointer">Skills</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}