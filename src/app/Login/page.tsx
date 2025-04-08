"use client"
import Background from "../../components/Background";
import styles from "@/components/Form.module.css";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogIn } from "lucide-react";

// Placeholder: você pode substituir por um real action handler de login
const initialState = {
  values: { email: "", senha: "" },
  errors: { email: "", senha: "" }
};

export default function LoginForm() {
  return (
    <>
      <div className={styles.FormContainer}>
        <form 
          action={() => {}} // Substitua por seu action ex: loginAction
          className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
        >
          <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Login</h2>

          {/* Email */}
          <div className="mb-4">
            <Input 
              type="email" 
              name="email" 
              placeholder="Digite seu e-mail" 
              defaultValue={initialState.values.email}
              aria-invalid={!!initialState.errors.email}
            />
            {initialState.errors.email && (
              <span className="text-sm text-destructive">{initialState.errors.email}</span>
            )}
          </div>

          {/* Senha */}
          <div className="mb-4">
            <Input 
              type="password" 
              name="senha" 
              placeholder="Digite sua senha"
              defaultValue={initialState.values.senha}
              aria-invalid={!!initialState.errors.senha}
            />
            {initialState.errors.senha && (
              <span className="text-sm text-destructive">{initialState.errors.senha}</span>
            )}
          </div>

          {/* Botão */}
          <div className="flex justify-around mt-6">
            <Button variant="outline" className="text-secondary" asChild>
              <Link href={"/"}><ArrowLeft /> Voltar</Link>
            </Button>
            <Button className="bg-primary text-secondary hover:bg-secondary hover:text-primary">
              <LogIn /> Entrar
            </Button>
          </div>

          {/* Link de cadastro */}
          <div className="mt-4 text-center text-[#FAF3EB]">
            <span>Não tem uma </span>
            <Link href="/RegisterForm" className="text-gold-500 hover:text-[#6B5645]">conta?</Link>
          </div>
        </form>
      </div>
      <Background image={"Gallery/image1.jpg"} />
    </>
  );
}
