"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineMenuOpen, MdOutlineRestaurantMenu } from "react-icons/md";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "../../../public/assets/icons/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener to detect navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/features", label: "Features" },
  ];

  const rightLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/signin", label: "Sign in" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/20 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-white ">
        <div className="relative flex items-center justify-between">
          {/* Left Nav (desktop) */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-10 flex-1 justify-start">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`tracking-wide text-lg px-6 py-2 rounded-full transition-colors duration-200 not-italic hover:not-italic ${
                    pathname === link.href
                      ? "bg-red-700 text-white font-bold"
                      : "text-gray-300 hover:text-black hover:font-bold hover:bg-[#afe029]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link href="/" className="inline-flex items-center">
              <Image src={Logo} alt="Logo" width={40} />
              <h5 className="ml-2 text-xl md:text-2xl font-bold tracking-wide text-white">
                BrainStack
              </h5>
            </Link>
          </div>

          {/* Right Nav (desktop) */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-10 flex-1 justify-end">
            {rightLinks.map((link) => (
              <li key={link.href}>
                {link.label === "Sign in" ? (
                  <Link href={link.href}>
                    <button className="px-6 py-1.5 rounded cursor-pointer text-black text-xl font-medium bg-[#afe029] hover:bg-[#26415E] hover:text-white transition-colors">
                      {link.label}
                    </button>
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={`tracking-wide text-lg px-3 py-1 rounded-full transition-colors duration-200 not-italic hover:not-italic ${
                      pathname === link.href
                        ? "bg-red-700 text-white font-bold"
                        : "text-gray-300 hover:text-black hover:font-bold hover:bg-[#afe029]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile) */}
          <div className="lg:hidden flex flex-1 justify-end">
            <button
              aria-label="Open Menu"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded hover:bg-gray-100"
            >
              <MdOutlineMenuOpen className="w-7 h-7 text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-sm rounded-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right duration-300 bg-[#afe029]/10 backdrop-blur-lg"
        >
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={40} />
                <h5>BrainStack</h5>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded hover:bg-gray-100"
              >
                <MdOutlineRestaurantMenu className="w-7 h-7 text-red-700" />
              </button>
            </DialogTitle>
          </DialogHeader>

          <nav className="mt-4">
            <ul className="space-y-4 text-center">
              {allLinks.map((link) => (
                <li key={link.href}>
                  {link.label === "Sign in" ? (
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full px-5 py-3 rounded-lg text-black font-medium bg-[#afe029] hover:bg-[#26415E] transition-colors">
                        {link.label}
                      </button>
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg px-3 py-2 rounded-2xl transition-colors w-1/3 mx-auto duration-200 not-italic hover:not-italic ${
                        pathname === link.href
                          ? "bg-red-700 text-gray-200 font-bold"
                          : "text-gray-300 hover:text-purple-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
