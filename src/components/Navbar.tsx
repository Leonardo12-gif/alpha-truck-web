
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

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-truck-blue">ALPHA</span>
            <span className="text-2xl font-bold text-truck-gray">TRUCK</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/servicos">Serviços</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={closeMenu}>Início</MobileNavLink>
            <MobileNavLink to="/servicos" onClick={closeMenu}>Serviços</MobileNavLink>
            <MobileNavLink to="/sobre" onClick={closeMenu}>Sobre</MobileNavLink>
            <MobileNavLink to="/contato" onClick={closeMenu}>Contato</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-truck-gray hover:text-truck-blue font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-truck-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </Link>
  );
};

// Mobile NavLink component
const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link
      to={to}
      className="text-truck-gray hover:text-truck-blue font-medium py-2 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
