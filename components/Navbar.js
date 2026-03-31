"use client";  
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const linkUndeline = (path) =>
    `hover:text-pink-600 ${
      pathname === path ? "underline text-[palevioletred]" : ""
    }`;

  return (
      <div className="bg-white sticky top-0 z-100">
      <header className="container mx-auto px-4 flex justify-between items-center  text-[palevioletred] p-4">
      
        <div className=" text-2xl font-bold hover:text-pink-600">
          <h2><Link href="/">My Website</Link></h2>
        </div>
        <div 
          className="md:hidden absolute top-5 right-5 text-[20px] cursor-pointer"
          onClick={() => setActive(true)}
        >
          ☰
        </div>
        <nav
          className={
            active
              ? "fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 md:hidden z-50"
              : "hidden md:flex"
          }
        >
          <div
            className="text-[palevioletred] md:hidden text-3xl cursor-pointer absolute top-5 right-5"
            onClick={() => setActive(false)}
          >
            x
          </div>
          <ul className="flex gap-2.5 list-none md:flex-row flex-col">
            <li className={`hover:text-pink-600 ${linkUndeline("/")}`}><Link href="/">Home</Link></li>
            <li className={`hover:text-pink-600 ${linkUndeline("/adopt")}`}><Link href="/adopt">Adopt</Link></li>
            <li className={`hover:text-pink-600 ${linkUndeline("/catCare")}`}><Link href="/catCare">Cat care</Link></li>
            <li className={`hover:text-pink-600 ${linkUndeline("/contact")}`}><Link href="/contact">Contact</Link></li>
          </ul>e"
        </nav>
      </header>
    </div>
  );
}