
import { ScrollArea } from "@/components/ui/scroll-area";

const BrandsSection = () => {
  const brands = [
    { name: "Volvo", logo: "https://logowik.com/content/uploads/images/volvo.jpg" },
    { name: "Mercedes-Benz", logo: "https://logowik.com/content/uploads/images/mercedes-benz-star1063.jpg" },
    { name: "Volkswagen", logo: "https://logowik.com/content/uploads/images/volkswagen-vw.jpg" },
    { name: "Scania", logo: "https://logowik.com/content/uploads/images/scania3382.jpg" },
    { name: "DAF", logo: "https://logowik.com/content/uploads/images/daf-trucks5198.jpg" }
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
