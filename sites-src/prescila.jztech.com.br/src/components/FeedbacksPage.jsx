import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';
import girassolDecorative from '../assets/cwOBjdPch1va.jpg';
import girassolImage from '../assets/LvjEpd3d90Of.webp';
import campoGirassol from '../assets/campo_girassol.jpg';

const FeedbacksPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
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
          <motion.h1 
            className="text-4xl font-bold text-gray-800 my-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🌻 Um Momento Para Você 🌻
          </motion.h1>

          <motion.div 
            className="space-y-6"
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="bg-[#FDE9CE]/95 p-8 rounded-3xl shadow-xl border-2 border-white relative text-gray-700"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-[#B45F42] mb-4">
                "Cuidar da sua alma é a sua maior prioridade"
              </h2>
              <p className="mb-4 leading-relaxed">
                Em meio à correria do dia a dia, muitas vezes esquecemos de nos conectar com o que realmente importa: a nossa paz interior. 
                Permita-se um momento de pausa, um sopro de ar fresco para a sua alma.
              </p>
              <p className="mb-4 leading-relaxed">
                Assim como os girassóis buscam o sol, a sua alma busca a luz. Essa luz está em você, no seu interior. 
                Cuidar de si mesmo é um ato de amor e coragem. É a decisão de se priorizar e de nutrir a sua essência.
              </p>
              <p className="leading-relaxed">
                Respire fundo, sinta a vida e saiba que, passo a passo, você está no caminho certo. 
                Cuidar da alma é a sua maior prioridade.
              </p>
              <motion.div 
                className="absolute -top-3 -left-3 text-2xl"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                🌻
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              to="/" 
              className="inline-block bg-gradient-to-r from-[#B45F42] to-[#781113] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:from-[#A0523A] hover:to-[#680F11] transition-all"
            >
              Voltar para a Página Inicial
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeedbacksPage;