
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });
    
    const imageSection = document.querySelector('.about-image');
    if (imageSection) {
      observer.observe(imageSection);
    }
    
    return () => {
      if (imageSection) {
        observer.unobserve(imageSection);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-truck-red mb-4">Desde 2005</Badge>
            <h2 className="section-title">Por que escolher a ALPHA TRUCK?</h2>
            <p className="text-lg mb-6 text-truck-gray-medium">
              Somos especialistas em manutenção e funilaria de caminhões de todas as marcas e modelos.
              Nossa equipe técnica é altamente capacitada e utiliza equipamentos de última geração para
              oferecer os melhores serviços para o seu veículo.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-red flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Rapidez e eficiência</strong> - Entregamos seu caminhão no menor prazo possível.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-red flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Atendimento personalizado</strong> - Entendemos as necessidades específicas de cada cliente.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-red flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Peças originais</strong> - Trabalhamos apenas com peças de alta qualidade e garantia.</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-truck-red flex items-center justify-center text-white font-bold mr-3">✓</span>
                <p className="text-truck-gray"><strong>Garantia de serviço</strong> - Todos os nossos serviços possuem garantia.</p>
              </div>
            </div>
            
            <Button asChild className="bg-truck-red hover:bg-truck-red-light">
              <Link to="/sobre">Conheça nossa empresa</Link>
            </Button>
          </div>
          
          <div 
            className="relative about-image overflow-hidden rounded-lg" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-truck-red opacity-30 rounded-full animate-pulse"></div>
            <img 
              src="/lovable-uploads/c433d43b-2cf6-4aae-b800-395eb5694d7b.png" 
              alt="Caminhão Volvo ALPHA TRUCK" 
              className={`rounded-lg shadow-xl w-full h-[400px] object-cover relative z-10 transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              } ${
                isHovered ? 'scale-105 brightness-110' : ''
              }`}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-truck-red opacity-20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
