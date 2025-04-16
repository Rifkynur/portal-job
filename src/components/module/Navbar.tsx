"use client";
import React, { useState, useEffect } from "react";
import { IoMdMenu, IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";
import Button from "../base/Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handleOpenNavbar = () => {
    setNavbarIsOpen((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 w-full h-fit py-4 bg-primary z-10">
      <div className="container flex justify-between items-center">
        <IoMdMenu className="cursor-pointer md:hidden size-6" onClick={handleOpenNavbar} />
        <div className={`absolute top-0 ${navbarIsOpen ? "left-0" : "-left-full"} bg-primary w-40 h-screen shadow-md transition-all duration-300 ease md:static md:shadow-none md:w-fit md:h-fit`}>
          <ul className="flex flex-col text-center gap-4 pt-6 font-semibold text-sm md:flex-row md:pt-0">
            <li className="text-end pe-4 md:hidden" onClick={handleOpenNavbar}>
              <IoIosCloseCircle className="cursor-pointer md:hidden size-6 ms-auto" />
            </li>
            <li className="transision-all duration-300 hover:text-bg-blue">
              <Link href={"/"} className={`${pathname === "/" ? "text-bg-blue" : ""}  `}>
                Home
              </Link>
            </li>
            <li className="transision-all duration-300 hover:text-bg-blue">
              <Link href={"/"}>Find Job</Link>
            </li>
            <li className="transision-all duration-300 hover:text-bg-blue">
              <Link href={"/"}>Employers</Link>
            </li>
            <li className="transision-all duration-300 hover:text-bg-blue">
              <Link href={"/"}>Candidates</Link>
            </li>
            <li className="transision-all duration-300 hover:text-bg-blue">
              <Link href={"/"}>Pricing Plans</Link>
            </li>
            <li className="transision-all duration-300 hover:text-bg-blue">
              <Link href={"/"}>Customer Supports</Link>
            </li>
          </ul>
        </div>
        <Button variant="secondaryOutline" size="md">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
