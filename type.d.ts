export interface Reservation {
  idReserva: number;
  name: string; // Nome do cliente
  date: string; // LocalDate vem como string ISO do Java
  time: string; // LocalTime também vem como string (ex: "19:30")
  qnt: number;
  status: 'CONFIRMADA' | 'CANCELADA' | 'PENDENTE';
}
