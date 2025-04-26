"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
const links = [
    { label: 'Home', href: '/Home' },
    { label: 'Cardápio', href: '/Menu' },
    { label: 'Reserva', href: '/Reservation' },
    { label: 'Sobre', href: '/About' },
  ];
  
export default function Links(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const account = sessionStorage.getItem('account'); 
    setIsLoggedIn(!!account);
  }, []);
  const handleReservationLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      e.preventDefault();
      window.location.href = '/Login';
    }
  };
    return(
        <>
        {links.map((link) => (
            <li key={link.label}>
              <Link
                className="text-lg text-[#FAF3EB] px-4 py-2 rounded-full hover:bg-white/10 transition"
                href={link.href}
                onClick={link.label === 'Reserva' ? handleReservationLinkClick : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </>
    )
}
