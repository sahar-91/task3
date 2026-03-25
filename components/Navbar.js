"use client"; 
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
      const [active, setActive] = useState(false);
  return (
    <div className="max-w-[1440px] ">
    <header className="flex justify-between items-center sticky top-0 text-pink-400 p-4">
      <div className="pl-5">
        <h2><Link href="/">My Website</Link></h2>
      </div>

      <div className="max-md:block text-[palevioletred] text-[30px] cursor-pointer pr-5" onClick={() => setActive(true)}>☰</div>

      <nav className={active ? "fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 md:hidden z-50" : ""}>
        <div className="text-3xl cursor-pointer absolute top-5 right-5" onClick={() => setActive(false)}>✖</div>
        <ul className="flex gap-[10px] pr-5 list-none flex-col max-md:flex-row">            
          <li className="hover:text-pink-600 "><Link href="/" className="no-underline text-[palevioletred]">Home</Link></li>
          <li className="hover:text-pink-600"><Link href="#" className="no-underline text-[palevioletred]">Adopt</Link></li>
          <li className="hover:text-pink-600 "><Link href="#" className="no-underline text-[palevioletred]">Cat care</Link></li>
          <li className="hover:text-pink-600 "><Link href="#" className="no-underline text-[palevioletred]">Contact</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  );

}   