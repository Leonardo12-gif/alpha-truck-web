
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Disc, RotateCcw, PaintBucket, PenTool, FilmIcon, Search, Timer } from "lucide-react";
import BrandsSection from "@/components/BrandsSection";

const ServicesPage = () => {
  const services = [
    {
      title: "Manutenção de Motores",
      description: "Nossa equipe técnica é especializada em diagnósticos precisos e reparos de alta qualidade para todos os tipos de motores de caminhões. Utilizamos equipamentos modernos e peças originais para garantir o melhor desempenho do seu veículo.",
      icon: Wrench
    },
    {
      title: "Reparos e Revisão de Câmbio",
      description: "Oferecemos serviços completos de revisão e reparo de câmbios manuais e automáticos. Nossos mecânicos são treinados para identificar e corrigir problemas com eficiência, devolvendo a potência e desempenho original ao seu caminhão.",
      icon: Settings
    },
    {
      title: "Troca de Lonas de Freio, Tambores e Pneus",
      description: "A segurança é nossa prioridade. Realizamos a troca de componentes de freios e pneus com produtos de alta qualidade e garantia. Nossos serviços incluem alinhamento e balanceamento para garantir estabilidade e economia de combustível.",
      icon: Disc
    },
    {
      title: "Revisão Completa e Parte Mecânica Geral",
      description: "Oferecemos revisões preventivas e corretivas que abrangem todos os sistemas mecânicos do seu caminhão. Da suspensão ao sistema elétrico, cuidamos de tudo para manter seu veículo em perfeitas condições de rodagem.",
      icon: RotateCcw
    },
    {
      title: "Funilaria e Pintura para Caminhões",
      description: "Nossa equipe de funilaria e pintura é especializada em recuperar a aparência original do seu caminhão. Utilizamos técnicas modernas e materiais de primeira linha para garantir acabamento impecável e durabilidade.",
      icon: PaintBucket
    },
    {
      title: "Personalização e Acessórios",
      description: "Oferecemos serviços de personalização e instalação de acessórios para deixar seu caminhão com sua identidade. Desde faróis auxiliares até acabamentos internos, temos opções para todos os gostos.",
      icon: PenTool
    },
    {
      title: "Polimento e Cristalização",
      description: "Devolvemos o brilho original à pintura do seu caminhão com nosso serviço de polimento e cristalização. Proteja o investimento no seu veículo com tratamentos que aumentam a durabilidade da pintura.",
      icon: FilmIcon
    },
    {
      title: "Diagnóstico Computadorizado",
      description: "Com equipamentos de última geração, realizamos diagnósticos computadorizados que identificam com precisão falhas eletrônicas e mecânicas, economizando tempo e custos em reparos.",
      icon: Search
    },
    {
      title: "Atendimento de Emergência",
      description: "Oferecemos serviço de atendimento de emergência para casos de pane na estrada. Nossa equipe está preparada para resolver problemas rapidamente para que você volte à estrada o quanto antes.",
      icon: Timer
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "15996301830";
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para os serviços da ALPHA TRUCK.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="bg-gradient-to-b from-truck-gray-light to-white">
      <section className="bg-truck-red py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in tracking-tighter">Nossos Serviços</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Oferecemos uma linha completa de serviços de manutenção e
              funilaria para caminhões de todas as marcas e modelos.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02] hover:bg-white/95"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-gradient-to-br from-truck-red to-truck-red-light p-4 rounded-lg text-white shadow-md">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-truck-gray tracking-tight">{service.title}</h3>
                </div>
                <p className="text-truck-gray-medium text-lg leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />

      <section className="py-20 bg-gradient-to-b from-white to-truck-gray-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-truck-gray">Precisa de algum serviço?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-truck-gray-medium">
            Entre em contato conosco para solicitar um orçamento ou tirar
            dúvidas sobre nossos serviços.
          </p>
          <Button 
            className="bg-truck-red hover:bg-truck-red-light text-xl py-8 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float" 
            onClick={handleWhatsAppClick}
          >
            Solicitar orçamento
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
