import Link from "next/link";
const links = [
    { label: 'Home', href: '/Home' },
    { label: 'Cardápio', href: '/Menu' },
    { label: 'Reserva', href: '/Reservation' },
    { label: 'Sobre', href: '/About' },
  ];
  
export default function Links(){
    return(
        <>
        {links.map((link) => (
            <li key={link.label}>
              <Link
                className="text-lg text-[#FAF3EB] px-4 py-2 rounded-full hover:bg-white/10 transition"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </>
    )
}