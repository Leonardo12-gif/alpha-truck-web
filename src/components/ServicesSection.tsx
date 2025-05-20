
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
    <section className="py-20 bg-truck-gray-light relative overflow-hidden" id="servicos">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-truck-gray mb-4">Nossos Serviços</h2>
          <p className="text-xl text-truck-gray-medium max-w-2xl mx-auto">
            Soluções completas para a manutenção do seu caminhão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-truck-red hover:bg-truck-red-light hover:scale-105 transition-transform duration-300 text-lg px-8 py-6 rounded-full shadow-md hover:shadow-lg"
          >
            <Link to="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
