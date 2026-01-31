
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
              src="https://www.google.com/maps?q=Rua+Ipê+Amarelo+295+Cantagalo+Itu+SP&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ROTA FORTE - Rua Ipê Amarelo, 295 - B. Cantagalo - ITU - SP"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-truck-gray-medium">
            <p>Rua Ipê Amarelo, 295 - B. Cantagalo - ITU - SP (Próximo à Heineken)</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
