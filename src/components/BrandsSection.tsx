
import { Marquee } from "@/components/ui/marquee";

const BrandsSection = () => {
  const brands = [
    { name: "Volvo", logo: "/lovable-uploads/6198e6fe-c363-41b4-b531-71180d916262.png" },
    { name: "Mercedes-Benz", logo: "/lovable-uploads/4544f82e-a519-4c92-b3bc-42e24c847b52.png" },
    { name: "Volkswagen", logo: "/lovable-uploads/d4a9aea3-fd22-4d99-82ae-7c98a9cc79d5.png" },
    { name: "Scania", logo: "/lovable-uploads/cbfb7726-9436-4b8d-a2b8-462131d35939.png" },
    { name: "DAF", logo: "/lovable-uploads/9a4df358-9829-4ef2-88ce-7c2cb824cceb.png" }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-truck-gray mb-8">
          Marcas que atendemos
        </h2>
        
        <Marquee pauseOnHover speed={25} className="mt-8">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-full w-fit mx-[4rem] flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-card flex items-center justify-center p-4 overflow-hidden rounded-lg border">
                <img 
                  src={brand.logo} 
                  alt={`Logo ${brand.name}`} 
                  className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <span className="text-truck-gray-medium text-sm mt-2">{brand.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BrandsSection;
