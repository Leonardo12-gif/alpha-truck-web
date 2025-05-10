
import { WhatsappIcon } from "lucide-react";
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
      className="fixed bottom-6 right-6 rounded-full bg-green-600 hover:bg-green-700 shadow-lg z-40 h-14 w-14 p-0 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-white"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 1 1 0c0 .97 1.08 1.73 2.24 2.38 1.1.62 2.23 1.12 2.66 1.84a3 3 0 0 1-1.32 3.42A3 3 0 0 1 9 21a9 9 0 0 1-6-8 9 9 0 0 1 3-6 8.93 8.93 0 0 1 7-2" />
      </svg>
    </Button>
  );
};

export default WhatsAppButton;
