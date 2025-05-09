
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-truck-blue mb-4">Desde 2005</Badge>
            <h2 className="section-title">Por que escolher a ALPHA TRUCK?</h2>
            <p className="text-lg mb-6 text-truck-gray-medium">
              Somos especialistas em manutenção e funilaria de caminhões de todas as marcas e modelos.
              Nossa equipe técnica é altamente capacitada e utiliza equipamentos de última geração para
              oferecer os melhores serviços para o seu veículo.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-blue flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Rapidez e eficiência</strong> - Entregamos seu caminhão no menor prazo possível.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-blue flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Atendimento personalizado</strong> - Entendemos as necessidades específicas de cada cliente.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-blue flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Peças originais</strong> - Trabalhamos apenas com peças de alta qualidade e garantia.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-blue flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Garantia de serviço</strong> - Todos os nossos serviços possuem garantia.</p>
              </div>
            </div>
            
            <Button asChild className="bg-truck-blue hover:bg-truck-blue-light">
              <Link to="/sobre">Conheça nossa empresa</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-truck-blue opacity-30 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740&auto=format&fit=crop" 
              alt="Oficina ALPHA TRUCK" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-truck-blue opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
