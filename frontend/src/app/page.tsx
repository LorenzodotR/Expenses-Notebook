import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/meu_bolso.svg";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm space-y-6">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-2">
                        <Image src={Logo} width={500} height={500} alt="Picture of the author" />
                    </div>

                    {/* Botões */}
                    <div className="flex gap-20">
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
