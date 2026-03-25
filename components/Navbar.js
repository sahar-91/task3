"use client";  
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
      <div className="bg-white sticky top-0">
      <header className="container mx-auto px-4 flex justify-between items-center  text-[palevioletred] p-4">
      
        <div className="pl-5 text-2xl font-bold hover:text-pink-600">
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
          <ul className="flex gap-2.5 pr-5 list-none md:flex-row flex-col">
            <li className="hover:text-pink-600"><Link href="/">Home</Link></li>
            <li className="hover:text-pink-600"><Link href="#">Adopt</Link></li>
            <li className="hover:text-pink-600"><Link href="#">Cat care</Link></li>
            <li className="hover:text-pink-600"><Link href="#">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}