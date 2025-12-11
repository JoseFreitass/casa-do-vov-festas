import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Send, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua das Festas, 123 - Centro",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 99999-9999",
    color: "bg-mint/10 text-mint",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg-Dom: 9h às 22h",
    color: "bg-sunshine/10 text-sunshine",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@casadovovo.com.br",
    color: "bg-lavender/10 text-lavender",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve 🎉");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-fredoka font-bold mb-4">
            Fale <span className="text-gradient">Conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para fazer a festa mais incrível? Entre em contato e vamos realizar esse sonho juntos! 🌟
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-fredoka font-semibold mb-1">{info.label}</h4>
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Social media */}
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h4 className="font-fredoka font-semibold mb-4">Siga-nos nas redes! 📱</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-party flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-sky flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-mint/20 to-sky/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4 animate-bounce-soft">🗺️</div>
              <p className="text-muted-foreground">
                Estamos no coração da cidade, fácil de encontrar!
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-fredoka font-bold mb-6">
              Solicite um Orçamento 🎁
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl"
                  required
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Conte-nos sobre a festa dos sonhos! ✨
                </label>
                <Textarea
                  placeholder="Data desejada, tema, número de convidados..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
