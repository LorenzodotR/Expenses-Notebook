"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../../public/meu_bolso.svg";

export default function CreateAccountPage() {
    const router = useRouter();
    // const [showPassword, setShowPassword] = useState(false);
    // const previusFormValue = localStorage.getItem("preSingUp");

    const [form, setForm] = useState({
        name: null,
        email: null,
        password: null,
        zipCode: "",
        street: "",
        city: "",
        state: "",
        country: "",
    });

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("localhost:3030/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
            }

            const data = await response.json();

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
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-6">
                {/* Voltar */}
                <button onClick={() => router.push("/")} className="text-left">
                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>

                <h1 className="text-center text-2xl font-medium text-gray-800">Cadastro</h1>

                {/* Logo */}
                <div className="flex flex-col items-center gap-2">
                    <Image src={Logo} width={250} height={250} alt="Picture of the author" />
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label className="text-gray-600 pb-1">Cep</Label>
                        <Input
                            type="text"
                            value={form.zipCode}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="rounded-md border-gray-400"
                        />
                    </div>

                    <div>
                        <Label className="text-gray-600 pb-1">Rua</Label>
                        <Input
                            type="email"
                            value={form.street}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="rounded-md border-gray-400"
                        />
                    </div>

                    {/* <div className="relative">
                        <Label className="text-gray-600 pb-1">Senha</Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            className="rounded-md border-gray-400 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-8 text-gray-500"
                        ></button>
                    </div> */}

                    <div className="flex justify-center gap-4 px-4">
                        <Button className="w-32 bg-[#009FC2] hover:bg-[#0086a6] text-white rounded-md">
                            Criar Conta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
