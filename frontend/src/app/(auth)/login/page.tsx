"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-6">
                {/* Título */}
                <h1 className="text-center text-2xl font-medium text-gray-800">Login</h1>

                {/* Formulário */}
                <form className="space-y-4">
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
                        <Button asChild className="w-full bg-[#009FC2] hover:bg-[#0086a6] text-white rounded-md">
                            <Link href="/">Entrar</Link>
                        </Button>
                    </div>
                </form>
                {/* Divider */}
                <div className="flex items-center justify-center text-sm text-gray-500 gap-2">
                    <div className="flex-grow border-t" />
                    <span>Ou entre com</span>
                    <div className="flex-grow border-t" />
                </div>

                {/* Social buttons */}
                <div className="space-y-2">
                    <Button variant="outline" className="w-full border-gray-400 text-gray-700 rounded-md">
                        Entrar Com Facebook
                    </Button>
                    <Button variant="outline" className="w-full border-gray-400 text-gray-700 rounded-md">
                        Entrar Com Google
                    </Button>
                </div>
            </div>
        </div>
    );
}
