/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';
import prescilapalestra from '../assets/prescila_palestra.png';
import girassolDecorative from '../assets/cwOBjdPch1va.jpg';
import girassolImage from '../assets/LvjEpd3d90Of.webp';
import campoGirassol from '../assets/campo_girassol.jpg';
import { Mic, Heart, Users, Star } from 'lucide-react';

// NOVAS IMAGENS IMPORTADAS (as mesmas da Home)
import treinamento1 from '../assets/fotos/treinamentos/WhatsApp Image 2025-09-22 at 13.22.24 (1).jpeg';
import treinamento2 from '../assets/fotos/treinamentos/WhatsApp Image 2025-09-22 at 13.22.24 (2).jpeg';
import treinamento3 from '../assets/fotos/treinamentos/WhatsApp Image 2025-09-22 at 13.22.24.jpeg';
import consultorioVideo from '../assets/fotos/treinamentos/WhatsApp Video 2025-09-22 at 13.22.24.mp4';


const PalestrasPage = () => {
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

  const palestras = [
    {
      id: 1,
      title: "Maternidade Leve 💖",
      description: "Acolhimento e orientação para gestantes e mães, abordando desafios emocionais, a transição para a maternidade e a importância do autocuidado.",
      icon: Heart
    },
    {
      id: 2,
      title: "Cuidando da Sua Saúde Mental 🧠",
      description: "Estratégias práticas para o dia a dia, combate ao estresse e ansiedade, e a criação de uma rotina que nutre o bem-estar emocional.",
      icon: Star
    },
    {
      id: 3,
      title: "Relacionamentos Saudáveis 🤝",
      description: "Aprenda a construir laços fortes e duradouros, aprimorando a comunicação, a empatia e a resolução de conflitos em relações pessoais e profissionais.",
      icon: Users
    },
    {
      id: 4,
      title: "Onde o Girassol Acolhe a Alma 🌻",
      description: "Uma palestra sobre a busca pela luz interior, superação de desafios e o processo de autoconhecimento, inspirada na filosofia do girassol.",
      icon: Mic
    }
  ];

  // DADOS DA NOVA GALERIA (COPIADOS DA HOME)
  const galleryItems = [
    { type: 'video', src: consultorioVideo, alt: "Vídeo do consultório de psicologia" },
    { type: 'image', src: treinamento1, alt: "Prescila Martins em Treinamento 1" },
    { type: 'image', src: treinamento2, alt: "Prescila Martins em Treinamento 2" },
    { type: 'image', src: treinamento3, alt: "Prescila Martins em Treinamento 3" },
  ];

  const whatsappMessage = encodeURIComponent("Olá, gostaria de saber mais sobre as palestras e treinamentos.");
  const whatsappNumber = "5544988036966"; 
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header currentPage="palestras" />
      
      {/* Fundo e overlays para manter o padrão visual */}
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

      {/* Girassóis flutuantes sutis */}
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
        <div className="container mx-auto max-w-2xl text-center">
          {/* Título e Subtítulo */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              🌻 Treinamentos & Palestras 🌻
            </h1>
            <p className="text-gray-700 text-lg">
              Leve a filosofia do autocuidado e a psicologia para sua empresa, evento ou grupo.
            </p>
          </motion.div>

          {/* INÍCIO: GALERIA DE FOTOS E VÍDEO ATUALIZADA */}
          <motion.div 
            className="w-full max-w-xl mx-auto mb-10 relative grid grid-cols-2 gap-4 p-4 bg-[#FDE9CE]/95 rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="w-full h-48 flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    alt={item.alt}
                    className="rounded-xl shadow-md w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                    controls
                    muted
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="rounded-xl shadow-md w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
          {/* FIM: GALERIA DE FOTOS E VÍDEO ATUALIZADA */}

          {/* Seção de Temas das Palestras */}
          <motion.div 
            className="bg-[#FDE9CE]/95 p-8 rounded-3xl shadow-xl border-2 border-white relative text-gray-700 mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-2xl font-bold text-[#B45F42] mb-6">
              Temas Abordados 🎤
            </h2>
            <ul className="space-y-6 text-left">
              {palestras.map((palestra, index) => {
                const IconComponent = palestra.icon;
                return (
                  <motion.li 
                    key={palestra.id} 
                    className="flex items-start space-x-4"
                    variants={fadeInUp}
                  >
                    <IconComponent className="flex-shrink-0 w-6 h-6 text-[#B45F42] mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{palestra.title}</h3>
                      <p className="text-sm">{palestra.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Chamada para Ação */}
          <motion.div
            className="bg-[#FDE9CE]/95 p-6 rounded-3xl shadow-xl border-2 border-white relative"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quer levar essa mensagem para o seu evento?
            </h3>
            <p className="text-gray-700 mb-6">
              Entre em contato para saber mais sobre as palestras e como podemos personalizar o tema para a sua necessidade.
            </p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-r from-[#B45F42] to-[#781113] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:from-[#A0523A] hover:to-[#680F11] transition-all"
            >
              Falar com a Prescila 🌻
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PalestrasPage;