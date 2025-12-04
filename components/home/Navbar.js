"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import GreyArc from "@/public/images/logo.png";

export default function Navbar() {
  const [data, setData] = useState([{ nav_link: "", section_name: "" }]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  // New Navbar
  //for global config
  const navDataGet = async () => {
    try {
      const res = await fetch("/api/getNavLinks");
      const data = await res.json();
      const updated = data?.map((item) => ({
        ...item,
        section_name:
          item.section_name === "SERVICES"
            ? "/services"
            : `/#${item.section_name}`,
      }));
      const finalData = [
        ...updated,
        { nav_link: "Blogs", section_name: "/blogs" },
      ];
      setData(finalData);
      return finalData;
    } catch (error) {
      console.error("Error fetching nav data:");
    }
  };

  useEffect(() => {
    navDataGet();
  }, []);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint in Tailwind = 768px
    };

    // Initialize and listen for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-4 z-50 w-full flex justify-center">
      {/* ✅ Desktop Navbar */}
      {isDesktop ? (
        <div
          className="md:flex items-center justify-center rounded-full px-8 py-3
        bg-white/80 backdrop-blur-md"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8 text-[15px] font-medium text-gray-700">
            <li className="flex items-center cursor-pointer">
              <Image
                src={GreyArc}
                alt="GreyArc Logo"
                width={30}
                height={30}
                className="inline-block mr-2"
              />

              <Link
                href="/"
                className="font-bold text-gray-900 hover:text-black transition-colors duration-150"
              >
                GreyArc
              </Link>
            </li>
            {data
              ?.filter((link) => link.nav_link !== "")
              .map((link) => (
                <li key={link.section_name}>
                  <Link
                    href={
                      link.section_name === "/#home" ? "/" : link.section_name
                    }
                    className="hover:text-gray-900 transition-colors duration-150"
                  >
                    {link.nav_link}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="md:hidden w-[90%] max-w-5xl">
          <div className="flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-sm">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={GreyArc}
                alt="GreyArc Logo"
                width={28}
                height={28}
                className="mr-2"
              />
              <Link
                href="/"
                className="font-bold text-gray-900 text-[16px] hover:text-black"
              >
                GreyArc
              </Link>
            </div>

            {/* Menu Icon */}
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-gray-800" />
              ) : (
                <Menu className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md 
            rounded-2xl shadow-lg p-5 transition-all duration-300"
            >
              <ul className="flex flex-col space-y-4 text-gray-700 font-medium text-[15px]">
                {data
                  ?.filter((link) => link.nav_link !== "")
                  .map((link) => (
                    <li key={link.section_name}>
                      <Link
                        href={
                          link.section_name === "/#home"
                            ? "/"
                            : link.section_name
                        }
                        className="block hover:text-gray-900"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.nav_link}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
