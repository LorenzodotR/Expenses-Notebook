"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../../public/meu_bolso.svg";

export default function LoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3030/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            console.log(response);

            if (!response.ok) {
                throw new Error("Erro ao fazer login");
            }

            const data = await response.json();
            console.log("Login bem-sucedido!", data);

            // Se vier um token, você pode armazenar:
            localStorage.setItem("token", data);

            // Redirecionar para o dashboard, por exemplo
            router.push("/user/profile");
        } catch (error) {
            console.error("Erro no login:", error);
            alert("Falha no login. Verifique suas credenciais.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col px-4 pt-6">
            <div className="w-full max-w-sm space-y-6">
                {/* Seta de voltar */}
                <button onClick={() => router.push("/")} className="text-left">
                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Logo centralizada */}
                <div className="flex justify-center mb-8">
                    <Image src={Logo} width={140} height={140} alt="Logo Meu Bolso" className="object-contain" />
                </div>

                {/* Container centralizado */}
                <div className="flex-1 flex items-center justify-center">
                    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                        <div>
                            <Label className="text-gray-600">E-mail</Label>
                            <Input
                                type="email"
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="rounded-md border-gray-400"
                            />
                        </div>

                        <div>
                            <Label className="text-gray-600">Senha</Label>
                            <Input
                                type="password"
                                value={form.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                                className="rounded-md border-gray-400"
                            />
                        </div>

                        <Button className="w-full bg-[#009FC2] hover:bg-[#0086a6] text-white rounded-md">Entrar</Button>

                        <div className="text-center text-sm text-gray-700 mt-2">
                            Não tem uma conta?{" "}
                            <Link href="/create-account" className="underline text-[#009FC2]">
                                Crie uma aqui
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
