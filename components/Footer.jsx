'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/gtechoficinaespecializada/?locale=pt_BR', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/gtechoficinaespecializada/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Bloco 1: Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // Classes adicionadas para centralizar no mobile e alinhar à esquerda no desktop
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo-gtech.png"
                className="sm:w-[18vh] w-[16vh]"
                alt="logo-gtech"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em veículos Honda há mais de 15 anos. Sua
              confiança, nossa motivação.
            </p>
          </motion.div>

          {/* Bloco 2: Horário de Funcionamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // Classes adicionadas para centralizar no mobile e alinhar à esquerda no desktop
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-gray-400">
              <p>Segunda a Sexta: 8h às 18h</p> <span>FECHADA das 12h as 13h</span>
              <p>Sábado: 8h as 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </motion.div>

          {/* Bloco 3: Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Classes adicionadas para centralizar no mobile e alinhar à esquerda no desktop
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* O copyright já estava centralizado e não precisa de alteração */}
      <div className="border-t border-gray-800 pt-6">
        <p className="text-center text-gray-400">
          {currentYear} G-Tech Honda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}