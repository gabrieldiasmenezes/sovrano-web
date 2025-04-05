import Link from "next/link";
import Background from "./Background";
import NavBar from "./navBar/navBar";

interface HeaderProps {
    title: string;
    subtitle: string;
    image:string
}

export default function PageHeader({ title, subtitle,image }: HeaderProps) {
    return (
        <>
        <section className="relative top-0 left-0">
            <NavBar />
            <header className="flex items-center justify-center w-full h-screen bg-transparent relative top-0 left-0 z-10">
                <div className="text-center text-white max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl font-bold mb-8">{title}</h2>
                    <p className="text-lg mb-8 font-light">{subtitle}</p>
                    <Link
                        href="/Reserva" 
                        className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-[#6B5645] hover:border-0 transition duration-300"
                    >
                        Viva essa experiência
                    </Link>
                </div>
            </header>
            <Background image={image}/>
        </section>
        </>
    );
}