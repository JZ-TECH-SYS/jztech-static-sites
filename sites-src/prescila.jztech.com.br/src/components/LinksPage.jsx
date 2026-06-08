/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Heart, Star, Calendar, MessageCircle, User, Users, Baby, Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import prescila1 from '../assets/hero-principal.jpg.jpeg';
import prescila2 from '../assets/prescila2.jpg';
import prescila3 from '../assets/prescila3.jpg';
import prescilapalestra from '../assets/prescila_palestra.png';
import girassolImage from '../assets/LvjEpd3d90Of.webp';
import girassolDecorative from '../assets/cwOBjdPch1va.jpg';
import campoGirassol from '../assets/campo_girassol.jpg';

const LinksPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', message: '' });
  const [formData, setFormData] = useState({ name: '', city: '' });
  const navigate = useNavigate();

  // Função central para navegação interna, garantindo que o scroll vá para o topo
  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Função central para envio de mensagem no WhatsApp, com ou sem a necessidade de modal
  const handleWhatsAppClick = (message, needsForm = false, title = '') => {
    if (needsForm) {
      setModalData({ title, message });
      setShowModal(true);
    } else {
      // Link direto para o WhatsApp (ex: pacotes)
      window.open(`https://wa.me/5544988036966?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  // Envio da mensagem do modal para o WhatsApp com nome e cidade
  const handleFormSubmit = () => {
    if (formData.name && formData.city) {
      const fullMessage = `Olá! Meu nome é ${formData.name}, sou de ${formData.city}. ${modalData.message}`;
      window.open(`https://wa.me/5544988036966?text=${encodeURIComponent(fullMessage)}`, '_blank');
      setShowModal(false);
      setFormData({ name: '', city: '' });
    }
  };

  const links = [
    {
      id: 1,
      title: "Quem é Psicóloga Prescila? 🌻",
      subtitle: "Conheça minha história e trajetória",
      image: prescila2,
      path: '/', // Link interno - usa handleLinkClick
      gradient: "from-[#FDE9CE] to-[#B45F42]",
      hoverGradient: "from-[#FADFBC] to-[#A0523A]",
      icon: User
    },
    {
      id: 2,
      title: "Treinamentos & Palestras 🎤",
      subtitle: "Workshops e eventos presenciais",
      image: prescilapalestra,
      path: '/palestras', // Link interno - usa handleLinkClick
      gradient: "from-[#FDE9CE] to-[#781113]",
      hoverGradient: "from-[#FADFBC] to-[#680F11]",
      icon: Mic
    },
    {
      id: 3,
      title: "Atendimento Clínico Adultos 👩‍⚕️",
      subtitle: "Terapia individual para adultos",
      image: prescila1,
      action: () => handleWhatsAppClick("Olá que bom ter você aqui! Gostaria de mais informações para atendimento clínico para adultos?", true, "Atendimento Clínico Adultos"), // Ação - exige modal
      gradient: "from-[#FDE9CE] to-[#B45F42]",
      hoverGradient: "from-[#FADFBC] to-[#A0523A]",
      icon: User
    },
    {
      id: 4,
      title: "Atendimento Clínico Maternidade 🤱",
      subtitle: "Apoio psicológico na maternidade",
      image: prescila3,
      action: () => handleWhatsAppClick("Olá que bom ter você aqui! Gostaria de mais informações para atendimento Maternidade?", true, "Atendimento Clínico Maternidade"), // Ação - exige modal
      gradient: "from-[#FDE9CE] to-[#781113]",
      hoverGradient: "from-[#FADFBC] to-[#680F11]",
      icon: Heart
    },
    {
      id: 5,
      title: "Atendimento Infantil 👶",
      subtitle: "Psicologia infantil especializada",
      image: prescila2,
      action: () => handleWhatsAppClick("Olá que bom ter você aqui! Gostaria de mais informações para atendimento Infantil?", true, "Atendimento Infantil"), // Ação - exige modal
      gradient: "from-[#FDE9CE] to-[#B45F42]",
      hoverGradient: "from-[#FADFBC] to-[#A0523A]",
      icon: Baby
    },
    {
      id: 6,
      title: "Terapia para Casais 💕",
      subtitle: "Fortalecendo relacionamentos",
      image: prescila1,
      action: () => handleWhatsAppClick("Olá que bom ter você aqui! Gostaria de mais informações para terapia de casais?", true, "Terapia para Casais"), // Ação - exige modal
      gradient: "from-[#FDE9CE] to-[#781113]",
      hoverGradient: "from-[#FADFBC] to-[#680F11]",
      icon: Users
    },
    {
      id: 7,
      title: "Pacotes Quinzenais 💝",
      subtitle: "R$ 400/mês - 2 encontros",
      image: prescila3,
      action: () => handleWhatsAppClick("Oi, gostaria de mais informações sobre o pacote quinzenal"), // Ação - link direto
      gradient: "from-[#FDE9CE] to-[#B45F42]",
      hoverGradient: "from-[#FADFBC] to-[#A0523A]",
      icon: Calendar
    },
    {
      id: 8,
      title: "Pacotes Mensais ⭐",
      subtitle: "R$ 800/mês - 4 encontros",
      image: prescila2,
      action: () => handleWhatsAppClick("Oi, gostaria de mais informações sobre o pacote mensal"), // Ação - link direto
      gradient: "from-[#FDE9CE] to-[#781113]",
      hoverGradient: "from-[#FADFBC] to-[#680F11]",
      icon: Star
    },
    {
      id: 9,
      title: "Feedbacks - Palestras 📝",
      subtitle: "Depoimentos de eventos e treinamentos",
      image: prescilapalestra,
      action: () => handleWhatsAppClick("Oi, gostaria de ver os feedbacks das palestras!"), // Ação - link direto
      gradient: "from-[#FDE9CE] to-[#B45F42]",
      hoverGradient: "from-[#FADFBC] to-[#A0523A]",
      icon: MessageCircle
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header currentPage="links" />
      
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${campoGirassol})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <div className="fixed inset-0 bg-gradient-to-br from-[#FDE9CE]/90 via-[#FDE9CE]/85 to-[#B45F42]/30"></div>
      
      <motion.div 
        className="fixed top-20 right-10 w-16 h-16 z-10 opacity-30"
        animate={{ 
          x: [-3, 3, -3],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <img src={girassolDecorative} alt="Girassol" className="w-full h-full object-cover rounded-full" />
      </motion.div>
      
      <motion.div 
        className="fixed bottom-20 left-10 w-12 h-12 z-10 opacity-25"
        animate={{ 
          x: [3, -3, 3],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <img src={girassolImage} alt="Girassol" className="w-full h-full object-cover rounded-full" />
      </motion.div>
      
      <div className="relative z-20 pt-20 pb-8 px-4">
        <div className="max-w-md mx-auto">
          <motion.div 
            className="text-center mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="relative mb-6"
              variants={fadeInUp}
            >
              <div className="relative w-36 h-36 mx-auto">
                <img 
                  src={prescila1} 
                  alt="Prescila Martins" 
                  className="w-full h-full rounded-full object-cover border-6 border-white shadow-2xl"
                />
                
                <motion.div 
                  className="absolute -top-3 -right-3 text-3xl"
                  animate={{ 
                    x: [-2, 2, -2],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  🌻
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-3 -left-3 text-2xl"
                  animate={{ 
                    x: [2, -2, 2],
                    rotate: [0, -8, 8, 0]
                  }}
                  transition={{ 
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  🌻
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2"
              variants={fadeInUp}
            >
              🌻 Prescila Martins 🌻
            </motion.h1>
            
            <motion.p 
              className="text-gray-700 mb-1 font-medium"
              variants={fadeInUp}
            >
              Psicóloga CRP 08/28396
            </motion.p>
            
            <motion.p 
              className="text-[#B45F42] font-bold mb-4 flex items-center justify-center gap-2 text-lg"
              variants={fadeInUp}
            >
              🌻 Cuidando da sua Alma Humana 🌻
            </motion.p>
            
            <motion.p 
              className="text-sm text-gray-600 italic px-4 leading-relaxed"
              variants={fadeInUp}
            >
              "O Girassol é uma flor servidora, assim como eu quero ser um Girassol para a alma dos que me buscam"
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-[#FDE9CE]/95 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-xl border-2 border-white relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="absolute -top-3 -right-3 text-3xl"
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity }
              }}
            >
              🌻
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-2 -left-2 text-2xl"
              animate={{ 
                rotate: -360,
                y: [-2, 2, -2]
              }}
              transition={{ 
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              🌻
            </motion.div>
            
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
                🌻 Olá! Que alegria ter você aqui! 🌻
              </h2>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                Seja muito bem-vindo(a) ao nosso espaço! 
              </p>
              <p className="text-[#B45F42] font-bold text-sm flex items-center justify-center gap-2">
                🌻 Escolha o seu atendimento abaixo 👇
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {links.map((link, index) => {
              const IconComponent = link.icon;
              const LinkContent = (
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={link.image} 
                      alt={link.title}
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                    <div className="absolute -top-1 -right-1 text-sm">
                      🌻
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-lg mb-1">{link.title}</h3>
                    <p className="text-sm opacity-90">{link.subtitle}</p>
                  </div>
                  <motion.div 
                    className="text-gray-800/80"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                </div>
              );

              return (
                <motion.div
                  key={link.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Lógica de Link Correta: se tem 'path', usa handleLinkClick (navegação interna); caso contrário, usa 'action' (WhatsApp/Modal) */}
                  {link.path ? (
                    <button
                      // LINK DE NAVEGAÇÃO INTERNA
                      onClick={() => handleLinkClick(link.path)}
                      className={`w-full cursor-pointer bg-gradient-to-r ${link.gradient} hover:${link.hoverGradient} text-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30`}
                    >
                      {LinkContent}
                    </button>
                  ) : (
                    <button
                      // LINK DE AÇÃO (WHATSAPP/MODAL)
                      onClick={link.action}
                      className={`w-full cursor-pointer bg-gradient-to-r ${link.gradient} hover:${link.hoverGradient} text-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30`}
                    >
                      {LinkContent}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="text-center mt-10 text-sm text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="bg-[#FDE9CE]/90 rounded-2xl p-4 shadow-lg border border-white">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <motion.img 
                  src={girassolDecorative} 
                  alt="Girassol" 
                  className="w-8 h-8 rounded-full object-cover"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <h4 className="text-xl font-bold">Prescila Martins</h4>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌻
                </motion.div>
              </div>
              <p className="text-gray-400 mb-4">
                Psicóloga CRP 08/28396 | Cuidando da sua Alma Humana 🌻
              </p>
              <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-4">
                <p className="flex items-center gap-2">
                  📱 (44) 98803-6966
                </p>
                <p className="flex items-center gap-2">
                  🌻 CRP 08/28396
                </p>
              </div>
              {/* Link externo corrigido (já estava correto) */}
              <div className="text-xs text-gray-500 border-t pt-4">
                <p>Feito com ❤️ por <a href="https://jztech.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#B45F42] hover:text-[#781113] font-medium">JZ Tech</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showModal && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-4 border-[#FDE9CE] relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div 
              className="absolute -top-3 -right-3 text-3xl"
              animate={{ 
                x: [-2, 2, -2],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              🌻
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-3 -left-3 text-2xl"
              animate={{ 
                x: [2, -2, 2],
                rotate: [0, -8, 8, 0]
              }}
              transition={{ 
                x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              🌻
            </motion.div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                🌻 {modalData.title} 🌻
              </h3>
              <p className="text-gray-600">
                Olá! Que alegria ter você aqui! Para prosseguir, preciso de algumas informações:
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual seu nome? 🌻
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-[#FDE9CE] rounded-xl focus:border-[#B45F42] focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  De qual cidade você é? 🌻
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-[#FDE9CE] rounded-xl focus:border-[#B45F42] focus:outline-none transition-colors"
                  placeholder="Digite sua cidade"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleFormSubmit}
                disabled={!formData.name || !formData.city}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-[#B45F42] to-[#781113] text-white rounded-xl hover:from-[#A0523A] hover:to-[#680F11] disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Ir para WhatsApp 🌻
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LinksPage;
