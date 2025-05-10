
import { ScrollArea } from "@/components/ui/scroll-area";

const BrandsSection = () => {
  const brands = [
    { name: "Volvo", logo: "https://i.imgur.com/hUliHVq.png" },
    { name: "Mercedes-Benz", logo: "https://i.imgur.com/4pRZLXP.png" },
    { name: "Volkswagen", logo: "https://i.imgur.com/raQ4KE1.png" },
    { name: "Scania", logo: "https://i.imgur.com/cN6C0Sr.png" },
    { name: "DAF", logo: "https://i.imgur.com/MQTj53B.png" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-truck-gray mb-8">
          Marcas que atendemos
        </h2>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-12 py-4">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center shrink-0">
                <div className="w-32 h-32 bg-white flex items-center justify-center p-4">
                  <img 
                    src={brand.logo} 
                    alt={`Logo ${brand.name}`} 
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-truck-gray-medium text-sm mt-2">{brand.name}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default BrandsSection;
