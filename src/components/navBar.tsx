import Link from "next/link";



const links=[
    {label:"Home",href:"/Home"},
    {label:"Cardapio",href:"/Menu"},
    {label:"Reserva",href:"/Reservation"},
    {label:"Sobre",href:"/About"}
]
export default function NavBar() {
    return (
        <>
            <nav className="absolute top-0 left-0 z-100 w-full flex items-center justify-between px-6 pt-6 bg-transparent">
                <h1 className="text-3xl font-bold text-[#FAF3EB]">Sovrano</h1>
                <ul className="flex gap-12 px-6 py-2 bg-black/60 backdrop-blur-md rounded-full shadow-lg">
                {links.map(link=>
                    <li key={link.label}><Link className="text-lg text-[#FAF3EB] px-4 py-2 rounded-full transition" href={link.href}>{link.label}</Link></li>
                )}
                </ul>
                <Link href="/Login">
                    <img
                        className="size-12 rounded-full border-2 border-white cursor-pointer hover:opacity-80"
                        src="https://github.com/gabrieldiasmenezes.png"
                        alt="Login"
                    />
                </Link>
            </nav>
        </>
    );
}
