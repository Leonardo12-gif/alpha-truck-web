
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return <div className="relative bg-gradient-to-r from-truck-gray to-black text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="h-[80vh] bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
    }}>
        <div className="container mx-auto h-full flex items-center relative z-20">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              ROTA FORTE TRUCK CENTER
              <span className="block text-2xl md:text-3xl mt-2 font-normal">Especialistas em caminhões</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Manutenção e funilaria para caminhões Volvo, Mercedes, 
              Volkswagen, DAF, Scania e outros modelos.
              Seu parceiro de confiança na estrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-black hover:bg-black/80">
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
