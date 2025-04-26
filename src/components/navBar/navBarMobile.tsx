'use client';
import { useState } from 'react';
import { Menu, UserRoundPlus, X } from 'lucide-react';
import Links from './componentsNavBar/links';
import Link from 'next/link';

export default function NavBarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-3 bg-transparent">
      <nav className="relative flex items-center text=[[#FAF3EB]] justify-between">
        <button
            className="text-[#FAF3EB]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
        >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <h1 className="text-2xl font-bold text-[#FAF3EB]">Sovrano</h1>
        
        <Link href="/Login">
          <UserRoundPlus width={'40px'} height={'40px'}/>
        </Link>

      </nav>

      {menuOpen && (
        <ul className="mt-3 flex flex-col gap-4 bg-black/70 backdrop-blur-md rounded-xl p-4 shadow-md">
          <Links/>
        </ul>
      )}
    </header>
  );
}
