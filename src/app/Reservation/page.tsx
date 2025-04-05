import { Reservation } from "../../../type";
import NavBar from "../../components/navBar/navBar";
import Background from "../../components/Background";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import ReservationItem from "@/components/ReservationItem";
import { getReservations } from "@/actions/reservation-actions";


export default async function ReservationPage() {
  const reservations: Array<Reservation> = await getReservations();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background que cresce com a página */}
      <Background image="Backgrounds/backgroundHome.jpg" />

      {/* Conteúdo principal */}
      <div className="relative z-20 flex flex-col flex-grow px-6 pt-32 pb-32 max-w-7xl mx-auto w-full">
        <NavBar />

        {/* Alerta se não houver reservas */}
        {reservations.length === 0 && (
          <div className="rounded-lg text-[#FAF3EB]">
            <Alert variant="destructive">
              <CircleAlert />
              <AlertDescription>Não há reservas disponíveis</AlertDescription>
            </Alert>
          </div>
        )}

        {/* Lista de reservas */}
        {reservations.length > 0 && (
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-[#FAF3EB]">
            {reservations.map((reservation) => (
              <ReservationItem key={reservation.idReserva} reservation={reservation} />
            ))}
          </div>
        )}
      </div>

      {/* Botão sempre no canto inferior direito da página inteira */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/ReservationForm"
          className="bg-gold-500 text-[#FAF3EB] border border-[#FAF3EB] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gold-600 transition hover:bg-[#6B5645] hover:border-[#6B5645]"
        >
          Fazer Reserva
        </Link>
      </div>
    </div>
  );
}

