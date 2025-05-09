
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Motorista autônomo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Excelente atendimento! Meu caminhão estava com problema no motor e em 2 dias já estava na estrada novamente. Recomendo demais!"
  },
  {
    name: "Transportes Veloz Ltda.",
    role: "Empresa de transportes",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    content: "Nossa frota toda é atendida pela ALPHA TRUCK. O serviço é rápido, eficiente e com ótimo custo-benefício. Parceiros de confiança."
  },
  {
    name: "Marcelo Oliveira",
    role: "Motorista de longa distância",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    content: "Precisei de um serviço de funilaria urgente e fui muito bem atendido. O acabamento ficou perfeito, parecia novo!"
  },
  {
    name: "Express Logística",
    role: "Empresa de logística",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    content: "Contratamos a ALPHA TRUCK para manutenção preventiva de toda nossa frota e o resultado foi excelente. Recomendamos!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            A satisfação de nossos clientes é nossa maior prioridade
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="border border-gray-100 shadow-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-truck-gray">{testimonial.name}</h4>
                        <p className="text-sm text-truck-gray-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-truck-gray-medium italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0 mr-2" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
