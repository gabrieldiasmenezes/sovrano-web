export interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface Reservation {
  idReserva: number;
  name: string; 
  date: string; 
  time: string; 
  qnt: number;
  status: 'CONFIRMADA' | 'CANCELADA' | 'PENDENTE';
  account: Account;
  
}
