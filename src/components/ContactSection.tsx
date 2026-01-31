
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511956083079";
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da ROTA FORTE.");
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
                  src="https://www.google.com/maps?q=Rua+Ipê+Amarelo+295+Cantagalo+Itu+SP&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ROTA FORTE - Rua Ipê Amarelo, 295 - B. Cantagalo - ITU - SP"
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
                    <p className="text-truck-gray-medium">Rua Ipê Amarelo, 295 - B. Cantagalo - ITU - SP (Próximo à Heineken)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">Telefone</h4>
                    <p className="text-truck-gray-medium">(11) 95608-3079</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">E-mail</h4>
                    <p className="text-truck-gray-medium">rotaforte.truck@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">WhatsApp</h4>
                    <p className="text-truck-gray-medium">(11) 95608-3079</p>
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
