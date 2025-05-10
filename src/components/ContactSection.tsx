
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-truck-gray-light" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender você e seu caminhão
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-truck-gray">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-truck-gray">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-truck-gray">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-truck-gray">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-truck-gray">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  required
                  className="mt-1 h-32"
                />
              </div>
              
              <Button type="submit" className="w-full bg-truck-blue hover:bg-truck-blue-light">
                Enviar mensagem
              </Button>
            </form>
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
                    <p className="text-truck-gray-medium">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">E-mail</h4>
                    <p className="text-truck-gray-medium">contato@alphatruck.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-truck-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-truck-gray">WhatsApp</h4>
                    <p className="text-truck-gray-medium">(11) 99999-9999</p>
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
    </section>
  );
};

export default ContactSection;
