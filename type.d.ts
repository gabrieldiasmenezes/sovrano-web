export interface Reservation {
    idReserva: number; // Identificador único da reserva
    reservationDate: string; // Data e hora da reserva em formato ISO string
    quantPessoas: number; // Quantidade de pessoas para a reserva
    status: 'CONFIRMADA' | 'CANCELADA' | 'PENDENTE'; // Status da reserva, com valores possíveis
    nome: string; // Nome do cliente que fez a reserva
  }
  