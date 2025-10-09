
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
    <section className="py-20 bg-white relative overflow-hidden" id="sobre">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-truck-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-truck-red to-red-600 border-0 text-white shadow-lg shadow-truck-red/50 animate-fade-in">
              Desde 1989
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-truck-gray via-truck-gray-medium to-truck-gray bg-clip-text text-transparent animate-fade-in">
              Por que escolher a ROTA FORTE?
            </h2>
            
            <p className="text-lg text-truck-gray-medium leading-relaxed animate-fade-in">
              Somos especialistas em manutenção e funilaria de caminhões de todas as marcas e modelos.
              Nossa equipe técnica é altamente capacitada e utiliza equipamentos de última geração para
              oferecer os melhores serviços para o seu veículo.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Rapidez e eficiência", desc: "Entregamos seu caminhão no menor prazo possível." },
                { title: "Atendimento personalizado", desc: "Entendemos as necessidades específicas de cada cliente." },
                { title: "Peças originais", desc: "Trabalhamos apenas com peças de alta qualidade e garantia." },
                { title: "Garantia de serviço", desc: "Todos os nossos serviços possuem garantia." }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-start p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-truck-red/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-truck-red to-red-600 flex items-center justify-center text-white font-bold mr-4 shadow-lg shadow-truck-red/30 group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <div>
                    <p className="text-truck-gray font-semibold mb-1">{item.title}</p>
                    <p className="text-truck-gray-medium text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              asChild 
              className="bg-gradient-to-r from-truck-red to-red-600 hover:from-truck-red-light hover:to-red-500 text-white shadow-lg shadow-truck-red/30 hover:shadow-truck-red/50 border-0 transition-all duration-300 hover:scale-105"
            >
              <Link to="/sobre">Conheça nossa empresa</Link>
            </Button>
          </div>
          
          <div 
            className="relative about-image group" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-truck-red via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Image container */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 overflow-hidden">
              <img 
                src="/lovable-uploads/c433d43b-2cf6-4aae-b800-395eb5694d7b.png" 
                alt="Caminhão Volvo ROTA FORTE" 
                className={`rounded-xl w-full h-[400px] object-cover relative z-10 transition-all duration-700 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                } ${
                  isHovered ? 'scale-105 brightness-110' : ''
                }`}
              />
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-truck-red rounded-tl-lg"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-truck-red rounded-br-lg"></div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-truck-red rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
