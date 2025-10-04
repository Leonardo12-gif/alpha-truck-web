
import { Wrench, Settings, Disc, RotateCcw, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Manutenção de Motores",
      description: "Diagnóstico preciso e reparos de alto padrão para todos os tipos de motores de caminhões.",
      icon: Wrench
    },
    {
      title: "Reparos de Câmbio",
      description: "Revisão e conserto de câmbios manuais e automáticos para garantir desempenho ideal.",
      icon: Settings
    },
    {
      title: "Troca de Freios e Pneus",
      description: "Substituição de lonas, tambores e pneus com produtos de qualidade e garantia.",
      icon: Disc
    },
    {
      title: "Revisão Completa",
      description: "Manutenção preventiva e corretiva para todos os sistemas mecânicos do seu caminhão.",
      icon: RotateCcw
    },
    {
      title: "Funilaria e Pintura",
      description: "Reparos estéticos profissionais que devolvem a aparência original do seu veículo.",
      icon: PaintBucket
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="servicos">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-truck-red/10 border border-truck-red/20 rounded-full">
            <span className="text-truck-red text-sm font-semibold tracking-wide">NOSSOS SERVIÇOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Excelência em cada serviço
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia e expertise para manter seu caminhão sempre em perfeitas condições
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="animate-fade-in hover:border-truck-red/30"
              style={{animationDelay: `${index * 0.1}s`}}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-truck-red hover:bg-truck-red-light border-0 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
