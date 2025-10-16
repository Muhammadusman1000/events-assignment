import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-gray-600 fixed w-full z-50">
      <nav className="w-[90%] mx-auto flex justify-between items-center py-3 px-4 md:px-0">
        <h3 className="text-white font-bold text-xl cursor-pointer">
          <Link to="/">Eventify</Link>
        </h3>

        <ul className="hidden md:flex gap-10">
          <li className="text-white font-semibold cursor-pointer hover:text-blue-300 transition">
            <Link to="/">Events</Link>
          </li>
          <li className="text-white font-semibold cursor-pointer hover:text-blue-300 transition">
            <Link to="/myregistrations">My Registrations</Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h3 className="text-xl font-bold">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Eventify
            </Link>
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl focus:outline-none"
          >
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <li className="font-semibold hover:text-blue-300 transition">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li className="font-semibold hover:text-blue-300 transition">
            <Link to="/myregistrations" onClick={() => setIsOpen(false)}>
              My Registrations
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
