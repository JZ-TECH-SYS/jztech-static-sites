import React from 'react';
import { Phone, Clock, Bike } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-black text-white p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2 text-2xl font-bold text-yellow-500"
          whileHover={{ scale: 1.05 }}
        >
          <Bike className="w-8 h-8" />
          Juninho MotoTáxi
        </motion.div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Clock size={20} className="text-yellow-500" />
            <span>Atendimento até 22h</span>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Phone size={20} className="text-yellow-500" />
            <span>(18) 99623-4940</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}