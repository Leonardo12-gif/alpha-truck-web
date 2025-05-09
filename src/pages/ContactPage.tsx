
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488551515!2d-46.92499341857242!3d-23.681531459904288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1715369352865!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ALPHA TRUCK"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
