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
        isScrolled ? "navbar-scrolled backdrop-blur-lg bg-accent-dark/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar-content flex justify-between items-center h-16 mx-auto p-4">
        <div className="logo flex items-center space-x-2">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="HeaderLogo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="48" height="48">
                  <polygon points="402.65 269 312.65 269 327.96 197 237.96 197 222.65 269 207.35 341 297.35 341 282.04 413 372.04 413 387.35 341 402.65 269" fill="#06f" />
                  <polygon points="433.26 125 343.26 125 253.26 125 163.26 125 147.96 197 132.65 269 117.35 341 102.04 413 86.74 485 176.74 485 266.74 485 356.74 485 372.04 413 282.04 413 297.35 341 207.35 341 222.65 269 237.96 197 327.96 197 312.65 269 402.65 269 387.35 341 372.04 413 462.04 413 477.35 341 492.65 269 507.96 197 523.26 125 433.26 125" fill="#06f" />
                  <polyline points="372.04 413 387.35 341 402.65 269 312.65 269 327.96 197 237.96 197 222.65 269 207.35 341 297.35 341 282.04 413 372.04 413" fill="#fff" />
                  <polygon points="372.04 413 462.04 413 446.74 485 356.74 485 372.04 413" fill="none" />
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
