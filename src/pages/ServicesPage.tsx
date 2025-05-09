
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Disc, RotateCcw, PaintBucket, PenTool, FilmIcon, Search, Timer, Truck } from "lucide-react";
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
    },
    {
      title: "Instalação de Rastreadores",
      description: "Proteja sua carga e seu veículo com nossa solução de rastreamento. Instalamos e configuramos rastreadores de última geração para aumentar a segurança nas suas viagens.",
      icon: Truck
    }
  ];

  return (
    <main>
      <section className="bg-truck-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl opacity-90">
              Oferecemos uma linha completa de serviços de manutenção e
              funilaria para caminhões de todas as marcas e modelos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-truck-blue/10 p-3 rounded-md">
                    <service.icon className="h-6 w-6 text-truck-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-truck-gray">{service.title}</h3>
                </div>
                <p className="text-truck-gray-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsSection />

      <section className="py-16 bg-truck-gray-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Precisa de algum serviço?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento ou tirar
            dúvidas sobre nossos serviços.
          </p>
          <Button className="bg-truck-blue hover:bg-truck-blue-light mt-4" size="lg" asChild>
            <a href="/contato">Solicitar orçamento</a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
