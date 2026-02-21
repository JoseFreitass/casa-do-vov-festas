import { Heart, Users, Star, Gift } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada detalhe é pensado com carinho para criar momentos inesquecíveis.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "Equipe Dedicada",
    description: "Profissionais apaixonados por fazer crianças felizes.",
    color: "text-mint",
    bg: "bg-mint/10",
  },
  {
    icon: Star,
    title: "Ambiente Mágico",
    description: "Espaço temático e seguro para os pequenos se divertirem.",
    color: "text-sunshine",
    bg: "bg-sunshine/10",
  },
  {
    icon: Gift,
    title: "Pacotes Especiais",
    description: "Opções personalizadas para cada tipo de festa e orçamento.",
    color: "text-lavender",
    bg: "bg-lavender/10",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            Por que escolher a{" "}
            <span className="text-gradient">Cosme Festa e Buffet</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos mais que um buffet infantil, somos realizadores de sonhos! 
            Há mais de 10 anos criando as melhores memórias para sua família.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-fredoka font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Story section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full animate-float" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mint/20 rounded-full animate-float-delayed" />
            <div className="relative bg-gradient-party p-1 rounded-3xl">
              <div className="bg-card rounded-3xl p-8">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-fredoka font-bold mb-4">Nossa História</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Cosme Festa e Buffet nasceu do sonho de criar um lugar especial onde 
                  as crianças pudessem viver aventuras incríveis. Com carinho e 
                  dedicação, transformamos cada festa em uma experiência única e mágica.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-bounce-soft">
                <span className="text-2xl">🎈</span>
              </div>
              <div>
                <h4 className="font-fredoka font-semibold text-lg">Decoração Temática</h4>
                <p className="text-muted-foreground">Temas personalizados para cada festa, do super-herói favorito à princesa encantada.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 animate-bounce-soft" style={{ animationDelay: '0.2s' }}>
                <span className="text-2xl">🍰</span>
              </div>
              <div>
                <h4 className="font-fredoka font-semibold text-lg">Cardápio Delicioso</h4>
                <p className="text-muted-foreground">Comidas gostosas e saudáveis que agradam crianças e adultos.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center flex-shrink-0 animate-bounce-soft" style={{ animationDelay: '0.4s' }}>
                <span className="text-2xl">🎪</span>
              </div>
              <div>
                <h4 className="font-fredoka font-semibold text-lg">Monitores Especializados</h4>
                <p className="text-muted-foreground">Profissionais treinados para garantir diversão segura para todos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
