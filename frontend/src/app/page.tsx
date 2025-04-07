import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-6">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-2">
                        <Wallet size={64} className="text-[#009FC2]" />
                        <h1 className="text-3xl font-semibold text-gray-800">Meu bolso</h1>
                    </div>

                    {/* Botões */}
                    <div className="flex gap-4">
                        <Button asChild className="w-32 bg-[#009FC2] text-white hover:bg-[#0086a6] rounded-md">
                            <Link href="/create-account">Cadastrar</Link>
                        </Button>

                        <Button
                            variant="outline"
                            asChild
                            className="w-32 border-[#009FC2] text-[#009FC2] hover:bg-[#e0faff] rounded-md"
                        >
                            <Link href="/login">Entrar</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
