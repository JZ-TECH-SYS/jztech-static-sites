import React from 'react';
import { Users, Building2, Clock, Package, MapPin, Bike } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Bike className="w-8 h-8" />,
    title: 'Corridas Rápidas',
    description: 'Chegue ao seu destino com agilidade e segurança'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Serviços Bancários',
    description: 'Pagamentos e serviços bancários com total confiança'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Entregas Agendadas',
    description: 'Pontualidade garantida nas suas entregas'
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Entregas Express',
    description: 'Envio de documentos, pacotes e encomendas'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Cobertura Regional',
    description: 'Atendimento em Pirapozinho e toda região'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Nossos Serviços
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}