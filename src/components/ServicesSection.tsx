
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
    <section className="py-20 bg-truck-gray-light" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para a manutenção do seu caminhão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-truck-red hover:bg-truck-red-light">
            <Link to="/servicos">Ver todos os serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
