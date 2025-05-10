
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <main>
      <section className="bg-truck-blue py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contato</h1>
            <p className="text-xl opacity-90">
              Entre em contato conosco para agendar serviços ou tirar dúvidas
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Nossa Localização</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.214659561345!2d-47.56514722412706!3d-23.486944459630865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a9c1414182d%3A0xa727522e00d27000!2sRod.%20Raposo%20Tavares%2C%206201%20-%20Parque%20Reserva%20Fazenda%20Imperial%2C%20Sorocaba%20-%20SP%2C%2018052-905!5e0!3m2!1spt-BR!2sbr!4v1715626837715!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ALPHA TRUCK - Rodovia Raposo Tavares Km 108,5 N° 6201"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-truck-gray-medium">
            <p>Rodovia Raposo Tavares Km 108,5 N° 6201 - Parque Reserva Fazenda Imperial, Sorocaba - SP, 18052-905</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
