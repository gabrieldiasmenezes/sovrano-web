'use client';
import Link from "next/link";
import Links from "./componentsNavBar/links";
import { UserRoundPlus } from "lucide-react";

export default function NavBarDesktop() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 bg-transparent">
      <nav className="flex items-center justify-between text-[#FAF3EB] w-full">
        <h1 className="text-3xl font-bol text-[#FAF3EB]">Sovrano</h1>

        <ul className="flex gap-8 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full shadow-lg">
          <Links/>
        </ul>
        <Link href="/Login">
          <UserRoundPlus width={'40px'} height={'40px'}/>
        </Link>
      </nav>
    </header>
  );
}
