
import { Badge } from "@/components/ui/badge";
import { Wrench, Truck, Trophy, Users } from "lucide-react";
import BrandsSection from "@/components/BrandsSection";

const AboutPage = () => {
  return (
    <main>
      <section className="bg-truck-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-xl opacity-90">
              Conheça a história e valores da ALPHA TRUCK
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-truck-blue mb-4">Desde 2005</Badge>
              <h2 className="section-title">Nossa História</h2>
              <p className="text-lg mb-6 text-truck-gray-medium">
                A ALPHA TRUCK foi fundada em 2005 com o objetivo de oferecer serviços de manutenção e funilaria de alta qualidade para caminhões. Iniciamos com uma pequena oficina e hoje contamos com uma estrutura completa e equipe altamente qualificada.
              </p>
              <p className="text-lg mb-6 text-truck-gray-medium">
                Nossa missão é garantir que os caminhoneiros e empresas de transporte possam contar com um serviço eficiente, rápido e de qualidade, permitindo que seus veículos estejam sempre em perfeitas condições para enfrentar as estradas brasileiras.
              </p>
              <p className="text-lg mb-6 text-truck-gray-medium">
                Ao longo desses anos, construímos uma reputação sólida baseada na confiança, qualidade e compromisso com nossos clientes. Hoje, somos referência no mercado de manutenção de caminhões de longa distância.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1566933293169-c86f3f0ce0b5?q=80&w=1740&auto=format&fit=crop" 
                  alt="Oficina ALPHA TRUCK" 
                  className="rounded-lg h-64 w-full object-cover hover-scale"
                />
                <img 
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1740&auto=format&fit=crop" 
                  alt="Equipe ALPHA TRUCK" 
                  className="rounded-lg h-64 w-full object-cover hover-scale"
                />
                <img 
                  src="https://images.unsplash.com/photo-1597680538571-19b0e443a737?q=80&w=1740&auto=format&fit=crop" 
                  alt="Manutenção de caminhões" 
                  className="rounded-lg h-64 w-full object-cover hover-scale"
                />
                <img 
                  src="https://images.unsplash.com/photo-1595062045815-5d55b3880de6?q=80&w=1740&auto=format&fit=crop" 
                  alt="Funilaria" 
                  className="rounded-lg h-64 w-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-truck-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossos Valores</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Os pilares que sustentam nossa busca por excelência e que guiam nossas ações diárias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-truck-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-truck-blue" />
              </div>
              <h3 className="text-xl font-bold text-truck-gray mb-2">Excelência</h3>
              <p className="text-truck-gray-medium">
                Buscamos a excelência em cada serviço realizado, garantindo que o cliente receba o melhor resultado possível.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-truck-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-truck-blue" />
              </div>
              <h3 className="text-xl font-bold text-truck-gray mb-2">Qualidade</h3>
              <p className="text-truck-gray-medium">
                Utilizamos apenas peças e materiais de alta qualidade em nossos serviços, garantindo durabilidade e segurança.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-truck-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-truck-blue" />
              </div>
              <h3 className="text-xl font-bold text-truck-gray mb-2">Eficiência</h3>
              <p className="text-truck-gray-medium">
                Entendemos a importância do tempo para nossos clientes e trabalhamos para entregas rápidas sem comprometer a qualidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-truck-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-truck-blue" />
              </div>
              <h3 className="text-xl font-bold text-truck-gray mb-2">Confiança</h3>
              <p className="text-truck-gray-medium">
                Construímos relacionamentos duradouros com nossos clientes baseados em honestidade e transparência.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossa Estrutura</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Contamos com instalações modernas e equipamentos de ponta para oferecer o melhor serviço
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583103013297-b38b935ecd28?q=80&w=1740&auto=format&fit=crop" 
                alt="Estrutura ALPHA TRUCK" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1669756224762-2ae8f6f67697?q=80&w=1856&auto=format&fit=crop" 
                alt="Oficina ALPHA TRUCK" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091878591-4f0714c6f32f?q=80&w=1588&auto=format&fit=crop" 
                alt="Equipamentos ALPHA TRUCK" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-truck-gray-medium max-w-3xl mx-auto">
              Nossa oficina conta com mais de 1.500m² de área útil, equipamentos de diagnóstico de última geração, equipe de profissionais especializados e espaço para atender simultaneamente diversos caminhões.
            </p>
          </div>
        </div>
      </section>

      <BrandsSection />
    </main>
  );
};

export default AboutPage;
