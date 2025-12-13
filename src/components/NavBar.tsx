"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";
import { BsFillMenuButtonWideFill, BsMenuButtonWide } from "react-icons/bs";
import { NavMenu } from "@/components/NavMenu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const NavBar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleLoginClick = () => {
    startTransition(() => {
      console.log("Logging in...");
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !(menuRef.current as Node).contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const [isPending, startTransition] = useTransition();

  return (
    <nav
      className={`navbar fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
          ? "backdrop-blur-lg bg-accent-dark/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-content flex justify-between items-center h-16 mx-auto p-4">
        <div className="logo flex items-center space-x-2">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="HeaderLogo">
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="48"
      height="48"
    >
      <defs>
        <radialGradient
          id="a"
          cx="708.08"
          cy="303.55"
          r="430.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0a99ff" />
          <stop offset="1" stopColor="#0042e9" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect x={-5} y={-5} width={1010} height={1010} fill="none" />

      {/* Gradient logo */}
      <polygon
        points="788.1 349.63 688.13 750.61 562.82 750.61 637.8 449.88
                512.5 449.88 537.49 349.63 412.19 349.63 362.2 550.12
                487.5 550.12 462.51 650.37 211.9 650.37 311.87 249.39
                687.79 249.39 662.8 349.63 788.1 349.63"
        fill="url(#a)"
      />
    </svg>
              </div>
              <div className="font-black text-lg tracking-tight cursor-pointer text-transparent bg-gradient-to-l from-zinc-700 to-slate-800 bg-clip-text transition ease-in-out duration-300 hover:from-blue-500 hover:to-sky-600">
                <i className="pr-2">SUPERSQAD.COM</i>
              </div>
            </div>
          </Link>
        </div>
        <div className="menu-bar flex items-center">
          {/* Desktop Menu */}
          <div className="desktop-menu hidden md:flex items-center space-x-4">
            <NavMenu />
            <Button
              onClick={handleLoginClick}
              disabled={isPending}
              type="submit"
              className="menu-button bg-sky-500 text-white px-4 py-2 font-semibold text-sm"
            >
              {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <BsFillMenuButtonWideFill size={24} /> : <BsMenuButtonWide size={24} />}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div ref={menuRef} className="mobile-menu md:hidden flex items-center">
          <NavMenu/>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
