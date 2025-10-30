'use client';

import { motion } from 'framer-motion';
// Importe o ícone do WhatsApp que criamos
import WhatsappIcon from './WhatsappIcon';

export default function WhatsappButton() {
  // Número de telefone do seu arquivo Contact.jsx
  const phoneNumber = '5585988364125';
  // Mensagem solicitada
  const message = 'Olá, G-Tech! Gostaria de marcar uma visita!';
  
  // Codifica a mensagem para a URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Estilização do botão
      className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-red-700"
      aria-label="Entre em contato pelo WhatsApp"
      
      // Animação de entrada (opcional, mas dá um efeito bom)
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }} // Adiciona um delay para o botão aparecer
      
      // Animações de interação
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Usando o ícone com tamanho 32 */}
      <WhatsappIcon size={32} />
    </motion.a>
  );
}