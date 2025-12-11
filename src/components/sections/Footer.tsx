import logo from "@/assets/logo-casa-do-vovo.png";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Casa do Vovô" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-fredoka font-bold text-xl">Casa do Vovô</h3>
              <p className="text-background/60 text-sm">Onde a magia acontece! ✨</p>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#sobre" className="text-background/60 hover:text-background transition-colors">Sobre</a>
            <a href="#pacotes" className="text-background/60 hover:text-background transition-colors">Pacotes</a>
            <a href="#galeria" className="text-background/60 hover:text-background transition-colors">Galeria</a>
            <a href="#contato" className="text-background/60 hover:text-background transition-colors">Contato</a>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-background/60">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-bounce-soft" />
            <span>para crianças felizes</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Casa do Vovô Buffet Infantil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
