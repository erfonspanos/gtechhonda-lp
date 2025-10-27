'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: Users, value: '5000+', label: 'Clientes Satisfeitos' },
  { icon: Clock, value: '24h', label: 'Suporte Disponível' },
  { icon: ThumbsUp, value: '98%', label: 'Aprovação' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Sobre <span className="text-red-600">Nós</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos uma oficina especializada exclusivamente em veículos Honda, com mais de 15 anos de experiência no mercado automotivo. Nossa equipe é formada por técnicos certificados e apaixonados pela marca.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Utilizamos apenas peças originais e equipamentos de última geração para garantir que seu Honda receba o melhor cuidado possível. Nossa missão é proporcionar excelência em cada serviço realizado.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aqui, seu Honda está em casa. Combinamos conhecimento técnico profundo com atendimento personalizado para superar suas expectativas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4489735/pexels-photo-4489735.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Equipe da oficina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
