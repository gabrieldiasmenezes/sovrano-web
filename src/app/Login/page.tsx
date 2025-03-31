"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import Background from "../../components/Background";
import styles from "./Login.module.css";
import Link from "next/link";

export default function LoginForm() {
    // Estado para os dados do formulário
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // Função para enviar os dados
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, senha });
        // Aqui você pode fazer o login com o backend
        // Se o login for bem-sucedido, redirecione para a página principal ou outra página
        // router.push("/home");
    };

    return (
        <>
            <div className={styles.loginContainer}>
                <form 
                    onSubmit={handleSubmit}
                    className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
                >
                    <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Login</h2>

                    {/* E-mail */}
                    <div className="mb-4">
                        <label className="block text-[#FAF3EB] mb-2">E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border-2 border-[#FAF3EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Digite seu e-mail"
                        />
                    </div>

                    {/* Senha */}
                    <div className="mb-4">
                        <label className="block text-[#FAF3EB] mb-2">Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full p-2 border-2 border-[#FAF3EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    {/* Botão de Login */}
                    <div className="flex justify-center items-center w-full mt-4">
                        <button
                            type="submit"
                            className="bg-gold-500 text-white py-2 px-8 rounded-lg hover:bg-gold-600 transition border-1 border-[#FAF3EB] hover:bg-[#6B5645] hover:border-[#6B5645]"
                        >
                            Entrar
                        </button>
                    </div>

                    {/* Link para a página de cadastro */}
                    <div className="mt-4 text-center text-[#FAF3EB]">
                        <span>Não tem uma </span>
                        <Link
                            href="/RegisterFomr" // Coloque o caminho correto para a página de cadastro
                            className="text-gold-500 hover:text-[#6B5645]"
                        >
                            conta?
                        </Link>
                    </div>
                </form>
            </div>
            <Background image={"Gallery/image1.jpg"} />
        </>
    );
}
