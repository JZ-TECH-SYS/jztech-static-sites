/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import girassolDecorative from '../assets/cwOBjdPch1va.jpg';

const Header = ({ currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/5544988036966?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.header 
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <motion.div 
              className="relative"
              animate={{ 
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-2 shadow-lg">
                <img src={girassolDecorative} alt="Girassol" className="w-6 h-6 rounded-full object-cover" />
              </div>
            </motion.div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">🌻 Prescila Martins</h1>
              <p className="text-xs text-pink-600 font-medium">Psicóloga CRP 08/28396</p>
            </div>
          </div>
          
          {/* Desktop Menu & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <a 
                href="/" 
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                  currentPage === 'home' 
                    ? 'text-pink-600 bg-pink-50 border-b-2 border-pink-600' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Início
              </a>
              <a 
                href="/#sobre" 
                className="text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors px-3 py-2 rounded-lg"
              >
                Sobre
              </a>
              <a 
                href="/#servicos" 
                className="text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors px-3 py-2 rounded-lg"
              >
                Serviços
              </a>
              <a 
                href="/palestras" 
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                  currentPage === 'palestras' 
                    ? 'text-pink-600 bg-pink-50 border-b-2 border-pink-600' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <span className="md:inline">🎤 </span>Palestras
              </a>
              <a 
                href="/feedbacks" 
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                  currentPage === 'feedbacks' 
                    ? 'text-pink-600 bg-pink-50 border-b-2 border-pink-600' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <span className="md:inline">⭐ </span>Inspiração
              </a>
              <a 
                href="/#contato" 
                className="text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors px-3 py-2 rounded-lg"
              >
                Contato
              </a>
              <a 
                href="/links" 
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                  currentPage === 'links' 
                    ? 'text-pink-600 bg-pink-50 border-b-2 border-pink-600' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <span className="md:inline">🌻 </span>Links
              </a>
            </nav>
            
            {/* Desktop CTA */}
            <Button 
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white shadow-lg text-sm px-3 py-2 flex items-center space-x-1"
              onClick={() => handleWhatsAppClick("Olá! Gostaria de agendar uma consulta.")}
            >
              <Phone className="w-4 h-4" />
              <span>Agendar</span>
              <span className="hidden md:inline">🌻</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile WhatsApp Button */}
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-2 py-1 h-8"
              onClick={() => handleWhatsAppClick("Olá! Gostaria de agendar uma consulta.")}
            >
              <Phone className="w-3 h-3" />
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-pink-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div 
          className={`lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mt-3 rounded-lg shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            <a 
              href="/" 
              className={`block text-sm font-medium transition-colors py-2 px-3 rounded-lg ${
                currentPage === 'home' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              🏠 Início
            </a>
            <a 
              href="/#sobre" 
              className="block text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors py-2 px-3 rounded-lg"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const sobreSection = document.getElementById('sobre');
                  if (sobreSection) {
                    sobreSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              🌻 Sobre Mim
            </a>
            <a 
              href="/#servicos" 
              className="block text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors py-2 px-3 rounded-lg"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const servicosSection = document.getElementById('servicos');
                  if (servicosSection) {
                    servicosSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              💝 Serviços
            </a>
            <a 
              href="/palestras" 
              className={`block text-sm font-medium transition-colors py-2 px-3 rounded-lg ${
                currentPage === 'palestras' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              🎤 Palestras
            </a>
            <a 
              href="/feedbacks" 
              className={`block text-sm font-medium transition-colors py-2 px-3 rounded-lg ${
                currentPage === 'feedbacks' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ⭐ Inspiração
            </a>
            <a 
              href="/#contato" 
              className="block text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors py-2 px-3 rounded-lg"
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const contatoSection = document.getElementById('contato');
                  if (contatoSection) {
                    contatoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              📞 Contato
            </a>
            <a 
              href="/links" 
              className={`block text-sm font-medium transition-colors py-2 px-3 rounded-lg border-t border-gray-200 pt-4 mt-4 ${
                currentPage === 'links' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              🌻 Todos os Links
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;