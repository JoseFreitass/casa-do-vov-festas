import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Pacote Alegria",
    emoji: "🎈",
    price: "A partir de R$ 2.500",
    description: "Ideal para festas íntimas",
    features: [
      "Até 30 convidados",
      "3 horas de festa",
      "Decoração básica",
      "Cardápio tradicional",
      "2 monitores",
      "Som ambiente",
    ],
    color: "border-mint",
    buttonVariant: "mint" as const,
    icon: Star,
  },
  {
    name: "Pacote Encanto",
    emoji: "✨",
    price: "A partir de R$ 4.000",
    description: "Nossa opção mais popular!",
    features: [
      "Até 50 convidados",
      "4 horas de festa",
      "Decoração temática",
      "Cardápio completo",
      "3 monitores",
      "DJ + iluminação",
      "Lembrancinhas inclusas",
    ],
    popular: true,
    color: "border-primary",
    buttonVariant: "hero" as const,
    icon: Sparkles,
  },
  {
    name: "Pacote Magia",
    emoji: "👑",
    price: "A partir de R$ 6.500",
    description: "A festa dos sonhos!",
    features: [
      "Até 80 convidados",
      "5 horas de festa",
      "Decoração premium",
      "Cardápio gourmet",
      "5 monitores",
      "DJ + show de mágica",
      "Lembrancinhas premium",
      "Fotógrafo incluso",
    ],
    color: "border-secondary",
    buttonVariant: "party" as const,
    icon: Crown,
  },
];

export function Packages() {
  return (
    <section id="pacotes" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            Nossos <span className="text-gradient">Pacotes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote perfeito para a festa do seu filho. 
            Todos incluem muita diversão garantida! 🎉
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-3xl border-2 ${pkg.color} p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? "md:-mt-4 md:mb-4 shadow-xl" : ""
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-party text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold animate-bounce-soft">
                    Mais Popular! ⭐
                  </div>
                </div>
              )}

              {/* Package header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 animate-wiggle">{pkg.emoji}</div>
                <h3 className="text-2xl font-fredoka font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-3xl font-fredoka font-bold text-primary">{pkg.price}</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={pkg.buttonVariant} className="w-full" size="lg">
                <pkg.icon className="w-4 h-4" />
                Quero Este!
              </Button>
            </div>
          ))}
        </div>

        {/* Custom package note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Precisa de algo diferente?{" "}
            <button className="text-primary font-semibold hover:underline">
              Monte seu pacote personalizado! 🎨
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
