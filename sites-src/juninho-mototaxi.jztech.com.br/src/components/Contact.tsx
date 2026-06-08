import React from 'react';
import { Phone, Clock, CreditCard, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Contact() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale com o Juninho</h2>
          <p className="text-xl text-yellow-500">"Deus é Fiel!"</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border border-yellow-500 rounded-lg"
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Telefone/WhatsApp</h3>
            <p className="text-lg">(18) 99623-4940</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border border-yellow-500 rounded-lg"
          >
            <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Horário</h3>
            <p className="text-lg">Atendimento até 22h</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 border border-yellow-500 rounded-lg"
          >
            <CreditCard className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Pagamento</h3>
            <p className="text-lg">Aceitamos PIX</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a 
            href="https://wa.me/5518996234940?text=Olá! Vi seu site e gostaria de solicitar um serviço de moto táxi." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-6 h-6" />
            Chamar Agora no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}