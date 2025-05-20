
import React from 'react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre os serviços da ALPHA TRUCK."
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return <Button onClick={handleClick} aria-label="Contato via WhatsApp" className="fixed bottom-6 right-6 rounded-full shadow-lg z-40 h-14 w-14 p-0 flex items-center justify-center bg-stone-950 hover:bg-stone-800">
      <img src="/lovable-uploads/d9b08b40-52ce-42e8-bdae-88e30cc9152b.png" alt="WhatsApp" className="h-8 w-8" />
    </Button>;
};

export default WhatsAppButton;
