"use client"
import { useActionState } from "react";
import Background from "../../components/Background";
import styles from "@/components/Form.module.css"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { createReservation } from "@/actions/reservation-actions";

const initialState = {
    values: {
        name: "",
        date: "",
        time: "",
        qnt: ""  // Mantivemos "qnt" conforme você deseja
    },
    errors: {
        name: "",
        date: "",
        time: "",
        qnt: ""
    }
};

export default function ReservationForm() {
    const [state, formAction, penden] = useActionState(createReservation, initialState);

    return (
        <>
            <div className={styles.FormContainer}>
                <form
                    action={formAction}
                    className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
                >
                    <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Reserva de Mesa</h2>
                    <div className="space-y-4">
                        {/* Nome do reservante */}
                        <div>
                            <Input 
                                name="name" 
                                type="text" 
                                placeholder="Nome do reservante" 
                                aria-invalid={!!state?.errors.name}
                                defaultValue={state.values.name} />
                            {state.errors.name && (
                                <span className="text-sm text-destructive">{state.errors.name}</span>
                            )}
                        </div>
                        {/* Data da reserva */}
                        <div>
                            <Input 
                                name="date" 
                                type="date" 
                                placeholder="Dia da reserva" 
                                aria-invalid={!!state?.errors.date}
                                defaultValue={state.values.date} />
                            {state.errors.date && (
                                <span className="text-sm text-destructive">{state.errors.date}</span>
                            )}
                        </div>
                        {/* Hora da reserva */}
                        <div>
                            <Input 
                                name="time" 
                                type="time" 
                                placeholder="Hora da reserva" 
                                aria-invalid={!!state?.errors.time}
                                defaultValue={state.values.time} />
                            {state.errors.time && (
                                <span className="text-sm text-destructive">{state.errors.time}</span>
                            )}
                        </div>
                        {/* Quantidade de pessoas */}
                        <div>
                            <Input 
                                name="qnt"  
                                type="number" 
                                placeholder="Quantidade de pessoas" 
                                aria-invalid={!!state?.errors.qnt}
                                defaultValue={state.values.qnt} />
                            {state.errors.qnt && (
                                <span className="text-sm text-destructive">{state.errors.qnt}</span>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex justify-around mt-6">
                        <Button variant="outline" className="text-secondary" asChild>
                            <Link href={"/Reservation"}>
                                <ArrowLeft />
                                Cancelar
                            </Link>
                        </Button>
                        <Button className="bg-primary text-secondary hover:bg-secondary hover:text-primary">
                            <Check />
                            Salvar
                        </Button>
                    </div>
                </form>
            </div>
            <Background image={"Gallery/image1.jpg"} />
        </>
    );
}
