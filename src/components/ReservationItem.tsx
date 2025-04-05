import { Reservation } from "../../type";


interface ReservationItemProps {
  reservation: Reservation;
}

export default function ReservationItem({ reservation }: { reservation: Reservation }) {
  return (
    <div className="backdrop-blur-md p-6 rounded-xl shadow-lg space-y-6">
      <h3 className="font-semibold text-2xl text-[#FAF3EB]">{reservation.name}</h3>
      <p><strong>Data:</strong> {reservation.date}</p>
      <p><strong>Hora:</strong> {reservation.time}</p>
      <p><strong>Quantidade de Pessoas:</strong> {reservation.qnt}</p>
      <p><strong>Status:</strong> {reservation.status}</p>

      <div className="flex justify-between mt-4">
        <button className="bg-yellow-500 text-#FAF3EB py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
          Editar
        </button>
        <button className="bg-red-500 text-#FAF3EB py-2 px-4 rounded-lg hover:bg-red-600 transition">
          Cancelar
        </button>
      </div>
    </div>
  );
}