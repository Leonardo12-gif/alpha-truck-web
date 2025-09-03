
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "15996301830";
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da ALPHA TRUCK.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return <section className="py-20 bg-truck-gray-light" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender você e seu caminhão
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Fale Conosco Section */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-6 text-truck-gray">Fale Conosco</h3>
              
              <p className="text-center mb-8 text-truck-gray-medium">
                Clique no botão abaixo para iniciar uma conversa diretamente no WhatsApp.
              </p>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-truck-blue hover:bg-truck-blue-light animate-bounce flex items-center gap-2 text-lg py-6 px-8"
              >
                <img src="/lovable-uploads/d9b08b40-52ce-42e8-bdae-88e30cc9152b.png" alt="WhatsApp" className="h-6 w-6" />
                Conversar no WhatsApp
              </Button>
            </div>

            {/* Google Maps Section */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-truck-gray">Nossa Localização</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-47.45678!3d-23.45678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRodovia%20Raposo%20Tavares%20Km%20108%2C5%20N%C2%B0%206201%20-%20Parque%20Reserva%20Fazenda%20Imperial%2C%20Sorocaba%20-%20SP%2C%2018052-905!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Alpha Truck"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-6 text-truck-gray">Informações de contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">Endereço</h4>
                    <p className="text-truck-gray-medium">Rodovia Raposo Tavares Km 108,5 N° 6201 - Parque Reserva Fazenda Imperial, Sorocaba - SP, 18052-905</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">Telefone</h4>
                    <p className="text-truck-gray-medium">(15) 99630-1830</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">E-mail</h4>
                    <p className="text-truck-gray-medium">alphatruckpecas@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">WhatsApp</h4>
                    <p className="text-truck-gray-medium">(15) 99630-1830</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-truck-gray">Horário de funcionamento</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-truck-gray">Segunda a Sexta</span>
                  <span className="text-truck-gray-medium">8h às 18h</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-truck-gray">Sábado</span>
                  <span className="text-truck-gray-medium">8h às 12h</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-truck-gray">Domingo</span>
                  <span className="text-truck-gray-medium">Fechado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
