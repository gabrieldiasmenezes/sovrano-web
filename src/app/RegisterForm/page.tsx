"use client"
import Background from "../../components/Background";
import styles from "@/components/Form.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { useActionState } from "react";
import { createAccount } from "@/actions/account-actions";


const initialState = {
  values: {
    name: "",
    email: "",
    password: "",
    phone: ""
  },
  errors: {
    name: "",
    email: "",
    password: "",
    phone: ""
  }
};

export default function RegistrationForm() {
  const [state, formAction, penden] = useActionState(createAccount, initialState);
  return (
    <>
      <div className={styles.FormContainer}>
        <form
          action={formAction} 
          className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
        >
          <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Cadastro</h2>

          <div className="mb-4">
            <Input
              name="name"
              type="text"
              placeholder="Digite seu name"
              defaultValue={state.values.name}
              aria-invalid={!!state?.errors.name}
            />
            {state.errors.name && (
              <span className="text-sm text-destructive">{state.errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              defaultValue={state.values.email}
              aria-invalid={!!state?.errors.email}
            />
            {state.errors.email && (
              <span className="text-sm text-destructive">{state.errors.email}</span>
            )}
          </div>

          {/* password */}
          <div className="mb-4">
            <Input
              name="password"
              type="password"
              placeholder="Digite sua password"
              defaultValue={state.values.password}
              aria-invalid={!!state.errors.password}
            />
            {state.errors.password && (
              <span className="text-sm text-destructive">{state.errors.password}</span>
            )}
          </div>

          {/* phone */}
          <div className="mb-4">
            <Input
              name="phone"
              type="tel"
              placeholder="Digite seu phone"
              defaultValue={state.values.phone}
              aria-invalid={!!state.errors.phone}
            />
            {state.errors.phone && (
              <span className="text-sm text-destructive">{state.errors.phone}</span>
            )}
          </div>

          {/* Botões */}
          <div className="flex justify-around mt-6">
            <Button variant="outline" className="text-secondary" asChild>
              <a href="/"><ArrowLeft /> Voltar</a>
            </Button>
            <Button className="bg-primary text-secondary hover:bg-secondary hover:text-primary">
              <Check /> Cadastrar
            </Button>
          </div>
        </form>
      </div>
      <Background image={"Gallery/image1.jpg"} />
    </>
  );
}
