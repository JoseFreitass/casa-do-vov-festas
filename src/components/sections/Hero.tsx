import { Button } from "@/components/ui/button";
import { Balloon } from "@/components/Balloon";
import logo from "@/assets/logo-cosme-festa.webp";
import { Sparkles, PartyPopper, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-sky">
      {/* Floating balloons */}
      <div className="absolute inset-0 pointer-events-none">
        <Balloon color="secondary" className="absolute top-20 left-[5%]" size="lg" delay={0} />
        <Balloon color="mint" className="absolute top-32 left-[15%]" size="md" delay={0.5} />
        <Balloon color="sunshine" className="absolute top-16 right-[10%]" size="lg" delay={1} />
        <Balloon color="lavender" className="absolute top-40 right-[20%]" size="sm" delay={1.5} />
        <Balloon color="sky" className="absolute bottom-40 left-[8%]" size="md" delay={2} />
        <Balloon color="candy-pink" className="absolute bottom-32 right-[5%]" size="lg" delay={0.3} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4 animate-float">
        <Sparkles className="w-8 h-8 text-sunshine" />
      </div>
      <div className="absolute bottom-20 right-1/4 animate-float-delayed">
        <PartyPopper className="w-10 h-10 text-secondary" />
      </div>
      <div className="absolute top-1/3 right-10 animate-bounce-soft">
        <Heart className="w-6 h-6 text-candy-pink fill-candy-pink" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 text-center px-4">
        <div className="animate-slide-up">
          {/* Logo */}
          <div className="mb-8 animate-scale-bounce">
            <img 
              src={logo} 
              alt="Cosme Festa e Buffet" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto drop-shadow-2xl rounded-full"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-fredoka font-bold mb-4 text-gradient">
            Cosme Festa e Buffet
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-nunito">
            O lugar mágico onde os sonhos das crianças se tornam realidade! 
            <span className="animate-wiggle inline-block ml-2">✨</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              <PartyPopper className="w-5 h-5" />
              Agende sua Festa
            </Button>
            <Button variant="outline" size="lg">
              Conheça Nossos Pacotes
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center animate-slide-up stagger-1 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-fredoka font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Festas Realizadas</div>
            </div>
            <div className="text-center animate-slide-up stagger-2 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}>
              <div className="text-3xl md:text-4xl font-fredoka font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center animate-slide-up stagger-3 opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.7s' }}>
              <div className="text-3xl md:text-4xl font-fredoka font-bold text-mint">10+</div>
              <div className="text-sm text-muted-foreground">Anos de Magia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 70C1200 65 1320 55 1380 50L1440 45V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
