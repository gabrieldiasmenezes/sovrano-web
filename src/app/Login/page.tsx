"use client";
import Background from "../../components/Background";
import styles from "@/components/Form.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { loginAccount } from "@/actions/account-actions";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const initialState = {
  values: {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
  }
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAccount, initialState);

  return (
    <>
      <div className={styles.FormContainer}>
        <form
          action={formAction}
          className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
        >
          <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Login</h2>

          {/* Email */}
          <div className="mb-4">
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              defaultValue={state.values.email}
              aria-invalid={!!state?.errors?.email}
            />
            {state?.errors?.email && (
              <span className="text-sm text-destructive">{state.errors.email}</span>
            )}
          </div>

          {/* password */}
          <div className="mb-4">
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              defaultValue={state.values.password}
              aria-invalid={!!state?.errors?.password}
            />
            {state?.errors?.password && (
              <span className="text-sm text-destructive">{state.errors.password}</span>
            )}
          </div>

          {/* Botões */}
          <div className="flex justify-around mt-6">
            <Button variant="outline" className="text-secondary" asChild>
              <a href="/"><ArrowLeft /> Voltar</a>
            </Button>
            <Button className="bg-primary text-secondary hover:bg-secondary hover:text-primary">
              <Check /> Entrar
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-[#FAF3EB]">
              Não tem uma conta?{" "}
              <Link href="/RegisterForm" className="text-primary hover:text-secondary">
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Background image={"Gallery/image2.jpg"} />
    </>
  );
}
