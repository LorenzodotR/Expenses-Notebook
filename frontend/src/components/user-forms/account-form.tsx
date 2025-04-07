"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export function CreateAccountForm() {
    const [step, setStep] = useState("personal");
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const isPersonalValid = form.name && form.email && form.password && form.passwordConfirmation;

    return (
        <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
            <Tabs value={step} className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="personal" disabled>
                        Pessoal
                    </TabsTrigger>
                    
                </TabsList>

                {/* Etapa 1 - Pessoal */}
                <TabsContent value="personal">
                    <div className="space-y-4">
                        <div>
                            <Label>Nome completo</Label>
                            <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </div>
                        <div>
                            <Label>Senha</Label>
                            <Input
                                type="password"
                                value={form.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                            />
                        </div>
                        <div>
                            <Label>Confirmar Senha</Label>
                            <Input
                                type="password"
                                value={form.passwordConfirmation}
                                onChange={(e) => handleChange("password", e.target.value)}
                            />
                        </div>
                        <Button className="w-full" onClick={() => setStep("address")} disabled={!isPersonalValid}>
                            Próximo
                        </Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
