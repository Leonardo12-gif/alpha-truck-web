
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return <nav className="bg-black/90 backdrop-blur-lg fixed w-full z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              ROTA FORTE
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/servicos">Serviços</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/10" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-black/95 backdrop-blur-lg p-6 animate-fade-in border-t border-white/10">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={closeMenu}>Início</MobileNavLink>
            <MobileNavLink to="/servicos" onClick={closeMenu}>Serviços</MobileNavLink>
            <MobileNavLink to="/sobre" onClick={closeMenu}>Sobre</MobileNavLink>
            <MobileNavLink to="/contato" onClick={closeMenu}>Contato</MobileNavLink>
          </div>
        </div>}
    </nav>;
};

// Desktop NavLink component
const NavLink = ({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return <Link to={to} className="text-white/70 hover:text-white font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5">
      {children}
    </Link>;
};

// Mobile NavLink component
const MobileNavLink = ({
  to,
  children,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return <Link to={to} className="text-white/70 hover:text-white font-medium py-3 px-4 transition-all duration-300 rounded-lg hover:bg-white/5 block" onClick={onClick}>
      {children}
    </Link>;
};

export default Navbar;
