import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

// EmailJS service configuration
const EMAILJS_SERVICE_ID = "service_f5v82ne";  // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = "template_pxqfg6n";  // Replace with your actual template ID
const EMAILJS_USER_ID = "huVD9phkJbH7mdZJn";  // Replace with your actual user ID

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "Não informado",
        message: formData.message,
        to_email: "alphatruckpecas@gmail.com"
      };
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Show success message
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato! Retornaremos em breve.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  Nome completo <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Seu nome" 
                  required 
                  className="mt-1" 
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-truck-gray">
                    E-mail <span className="text-red-500">*</span>
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-truck-gray">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Como podemos ajudar?" 
                  required 
                  className="mt-1 h-32"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-truck-blue hover:bg-truck-blue-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
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
                    <p className="text-truck-gray-medium">(11) 99685-9025</p>
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
                    <p className="text-truck-gray-medium">(11) 99685-9025</p>
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
