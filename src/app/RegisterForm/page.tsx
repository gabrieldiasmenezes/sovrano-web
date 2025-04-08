"use client"
import Background from "../../components/Background";
import styles from "@/components/Form.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

// Placeholder de estado inicial
const initialState = {
  values: {
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: ""
  },
  errors: {
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: ""
  }
};

export default function RegistrationForm() {
  return (
    <>
      <div className={styles.FormContainer}>
        <form
          action={() => {}} // Substitua por seu action ex: registerUser
          className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
        >
          <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Cadastro</h2>

          {/* Nome */}
          <div className="mb-4">
            <Input
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              defaultValue={initialState.values.nome}
              aria-invalid={!!initialState.errors.nome}
            />
            {initialState.errors.nome && (
              <span className="text-sm text-destructive">{initialState.errors.nome}</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <Input
              name="email"
              type="email"
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
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              defaultValue={initialState.values.senha}
              aria-invalid={!!initialState.errors.senha}
            />
            {initialState.errors.senha && (
              <span className="text-sm text-destructive">{initialState.errors.senha}</span>
            )}
          </div>

          {/* Confirmar senha */}
          <div className="mb-4">
            <Input
              name="confirmarSenha"
              type="password"
              placeholder="Confirme sua senha"
              defaultValue={initialState.values.confirmarSenha}
              aria-invalid={!!initialState.errors.confirmarSenha}
            />
            {initialState.errors.confirmarSenha && (
              <span className="text-sm text-destructive">{initialState.errors.confirmarSenha}</span>
            )}
          </div>

          {/* Telefone */}
          <div className="mb-4">
            <Input
              name="telefone"
              type="tel"
              placeholder="Digite seu telefone"
              defaultValue={initialState.values.telefone}
              aria-invalid={!!initialState.errors.telefone}
            />
            {initialState.errors.telefone && (
              <span className="text-sm text-destructive">{initialState.errors.telefone}</span>
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
