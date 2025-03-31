"use client"
import { useState } from "react";
import Background from "../../components/Background";
import styles from "./Register.module.css"

export default function RegistrationForm() {
    // Estado para os dados do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [telefone, setTelefone] = useState("");

    // Função para enviar os dados
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        console.log({ nome, email, senha, telefone });
        // Aqui você pode enviar os dados para o backend
    };

    return (
        <>
            <div className={styles.registrationContainer}>
                <form 
                    onSubmit={handleSubmit}
                    className="p-8 rounded-xl shadow-lg w-96 backdrop-blur-md bg-opacity-80"
                >
                    <h2 className="text-2xl font-bold text-[#FAF3EB] mb-6 text-center">Cadastro</h2>

                    {/* Nome */}
                    <div className="mb-4">
                        <label className="block text-[#FAF3EB] mb-2">Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full p-2 border-2 border-[#FAF3EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Digite seu nome"
                        />
                    </div>

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

                    {/* Confirmar Senha */}
                    <div className="mb-4">
                        <label className="block text-[#FAF3EB] mb-2">Confirmar Senha</label>
                        <input
                            type="password"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            className="w-full p-2 border-2 border-[#FAF3EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Confirme sua senha"
                        />
                    </div>

                    {/* Telefone */}
                    <div className="mb-4">
                        <label className="block text-[#FAF3EB] mb-2">Telefone</label>
                        <input
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className="w-full p-2 border-2 border-[#FAF3EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                            placeholder="Digite seu telefone"
                        />
                    </div>

                    {/* Botão de Enviar */}
                    <div className="flex justify-center items-center w-full mt-4">
                        <button
                            type="submit"
                            className="bg-gold-500 text-white py-2 px-8 rounded-lg hover:bg-gold-600 transition border-1 border-[#FAF3EB] hover:bg-[#6B5645] hover:border-[#6B5645]"
                        >
                            Confirmar Cadastro
                        </button>
                    </div>
                </form>
            </div>
            <Background image={"Gallery/image1.jpg"} />
        </>
    );
}
