'use client';

import Link from "next/link";
import Links from "./componentsNavBar/links";
import ImageLogin from "./componentsNavBar/imageLogin";



export default function NavBarDesktop() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 bg-transparent">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold text-[#FAF3EB]">Sovrano</h1>

        <ul className="flex gap-8 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full shadow-lg">
          <Links/>
        </ul>
        <ImageLogin/>
      </nav>
    </header>
  );
}
