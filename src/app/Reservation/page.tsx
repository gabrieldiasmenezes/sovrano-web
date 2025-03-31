import { Reservation } from "../../../type";
import NavBar from "../../components/navBar";
import Background from "../../components/Background";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import ReservationItem from "@/components/ReservationItem";
import { getReservations } from "@/actions/reservation-actions";


export default async function ReservationPage() {
  // Buscando reservas diretamente na função server-side
  const reservations: Array<Reservation> = await getReservations();

  return (
    <>
      <NavBar />
      
      {/* Caso não tenha reservas, exibe o alerta */}
      {reservations.length === 0 && (
  <div className="relative z-20 p-6 mt-40 rounded-lg text-[#FAF3EB] grid grid-cols-1 md:grid-cols-2 gap-6">
    <Alert variant="destructive">
      <CircleAlert />
      <AlertDescription>Não há reservas disponíveis</AlertDescription>
    </Alert>
  </div>
)}

{/* Se houver reservas, exibe elas */}
{reservations.length > 0 && (
  <div className="relative z-20 p-6 mt-40 rounded-lg text-[#FAF3EB] grid grid-cols-1 md:grid-cols-2 gap-6">
    {reservations.map((reservation) => (
      <ReservationItem key={reservation.idReserva} reservation={reservation} />
    ))}
  </div>
)}


      {/* Botão de fazer reserva */}
      <div className="absolute bottom-6 right-6 z-50">
        <Link href="/ReservationForm" className="bg-gold-500 text-[#FAF3EB] border border-[#FAF3EB] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gold-600 transition hover:bg-[#6B5645] hover:border-[#6B5645]">
          Fazer Reserva
        </Link>
      </div>

      <Background image="Backgrounds/backgroundHome.jpg" />
    </>
  );
}
