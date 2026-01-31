import { Link } from "react-router-dom";
import logo from '@/assets/rota-forte-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-truck-gray text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Rota Forte Logo" className="h-16 w-auto" />
              <h3 className="text-xl font-bold">ROTA FORTE TRUCK CENTER</h3>
            </div>
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
            <p className="text-gray-300 mb-2">Telefone: (11) 95608-3079</p>
            <p className="text-gray-300 mb-2">Email: rotaforte.truck@gmail.com</p>
            <p className="text-gray-300 mb-2">Endereço: Rua Ipê Amarelo, 295 - B. Cantagalo - ITU - SP (Próximo à Heineken)</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} ROTA FORTE TRUCK CENTER. Todos os direitos reservados.</p>
          
          {/* Developer credit - centered at bottom */}
          <div className="mt-4 text-xs opacity-80 hover:opacity-100 transition-opacity">
            Site desenvolvido por:{" "}
            <a 
              href="https://www.instagram.com/frezzamarketing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors underline decoration-red-400/50 hover:decoration-red-300"
            >
              Frezza Marketing ®
            </a>
            .
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
