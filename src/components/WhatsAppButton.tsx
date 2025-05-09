
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Olá! Gostaria de mais informações sobre os serviços da ALPHA TRUCK." }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full bg-green-600 hover:bg-green-700 shadow-lg z-40 h-14 w-14 p-0"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
