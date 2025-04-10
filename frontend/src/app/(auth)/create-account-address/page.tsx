"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../public/meu_bolso.svg";

export default function CreateAccountPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
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

                <form className="space-y-4">
                    <div>
                        <Label className="text-gray-600 pb-1">Nome completo</Label>
                        <Input
                            type="text"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="rounded-md border-gray-400"
                        />
                    </div>

                    <div>
                        <Label className="text-gray-600 pb-1">E-mail</Label>
                        <Input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="rounded-md border-gray-400"
                        />
                    </div>

                    <div className="relative">
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
                    </div>

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
