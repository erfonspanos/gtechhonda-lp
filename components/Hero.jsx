'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Especialistas em
            <span className="text-red-600"> HONDA</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Somos a única oficina de Fortaleza dedicada 100% à manutenção, tecnologia e atendimento personalizado para o seu Honda.
          </motion.p>

          {/* ================== INÍCIO DA EDIÇÃO ================== */}
          <motion.button
            onClick={scrollToContact}
            // 1. Classes de transição do Tailwind removidas e glow adicionado
            className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto shadow-xl shadow-red-600/50"
            
            // 2. 'initial' mantido para a animação de entrada
            initial={{ opacity: 0, y: 30 }}
            
            // 3. 'animate' combina a animação de entrada (opacity, y) com a de pulsação (scale, boxShadow)
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 20px rgba(220, 38, 38, 0.3)",
                "0 0 35px rgba(220, 38, 38, 0.6)",
                "0 0 20px rgba(220, 38, 38, 0.3)",
              ],
            }}
            
            // 4. 'transition' define durações separadas para a entrada e para o loop de pulsação
            transition={{
              // Transições para a entrada (como estava antes)
              opacity: { duration: 0.8, delay: 0.6 },
              y: { duration: 0.8, delay: 0.6 },
              
              // Transições para a pulsação (infinita)
              // Delay de 1.4s (0.8 + 0.6) para começar a pulsar *após* entrar na tela
              scale: { duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 1.4 },
              boxShadow: { duration: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: 1.4 }
            }}
            
            // 5. 'whileHover' removido (conflitava) e 'whileTap' mantido
            whileTap={{ scale: 0.95 }}
          >
            Agendar Serviço
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          {/* =================== FIM DA EDIÇÃO ==================== */}
          
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}