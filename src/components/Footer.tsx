
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-truck-gray text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ALPHA TRUCK</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em manutenção e funilaria de caminhões.
              Atendemos todos os modelos de caminhões de longa distância.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300 mb-2">Telefone: (15) 99630-1830</p>
            <p className="text-gray-300 mb-2">Email: alphatruckpecas@gmail.com</p>
            <p className="text-gray-300 mb-2">Endereço: Rodovia Raposo Tavares Km 108,5 N° 6201 - Parque Reserva Fazenda Imperial, Sorocaba - SP, 18052-905.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} ALPHA TRUCK. Todos os direitos reservados.</p>
        </div>
      </div>
      
      {/* Developer credit - positioned at bottom left */}
      <div className="absolute bottom-2 left-2 text-gray-500 text-xs opacity-80 hover:opacity-100 transition-opacity">
        Site desenvolvido por: Frezza Marketing ®.
      </div>
    </footer>;
};
export default Footer;
