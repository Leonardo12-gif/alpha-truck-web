import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return <div className="relative text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBackground} alt="Caminhão em movimento" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="h-[85vh] relative">
        <div className="container mx-auto h-full flex items-center relative z-10 px-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-1.5 bg-truck-red/10 border border-truck-red/30 rounded-full">
              <span className="text-truck-red text-sm font-medium tracking-wide">ESPECIALISTAS EM CAMINHÕES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="block text-white">ROTA FORTE</span>
              <span className="block text-truck-red mt-2">TRUCK CENTER</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
              Manutenção e funilaria especializada para caminhões Volvo, Mercedes, 
              Volkswagen, DAF, Scania e outros modelos. Excelência desde 1989.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-truck-red hover:bg-truck-red-light border-0 text-white font-semibold">
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
