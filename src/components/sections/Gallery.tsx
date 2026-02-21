import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { emoji: "🎂", label: "Festas de Aniversário", color: "from-secondary to-candy-pink" },
  { emoji: "🎪", label: "Área de Brinquedos", color: "from-mint to-sky" },
  { emoji: "🍕", label: "Buffet Delicioso", color: "from-sunshine to-coral" },
  { emoji: "🎭", label: "Recreação", color: "from-lavender to-secondary" },
  { emoji: "🎈", label: "Decoração Temática", color: "from-primary to-sunshine" },
  { emoji: "🎉", label: "Momentos Especiais", color: "from-sky to-mint" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            <span className="text-gradient">Galeria</span> de Momentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada festa é única! Veja um pouco da magia que acontece no Cosme Festa e Buffet 📸
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className={`relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${images[activeIndex].color} shadow-2xl transition-all duration-500`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-9xl mb-4 animate-bounce-soft">{images[activeIndex].emoji}</span>
              <span className="text-2xl font-fredoka">{images[activeIndex].label}</span>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float" />
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full animate-float-delayed" />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${image.color} flex items-center justify-center transition-all duration-300 ${
                activeIndex === index 
                  ? "ring-4 ring-primary scale-110 shadow-lg" 
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <span className="text-2xl">{image.emoji}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Camera className="w-4 h-4" />
            Ver Mais Fotos
          </Button>
        </div>
      </div>
    </section>
  );
}
