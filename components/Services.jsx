'use client';

import { motion } from 'framer-motion';
import { Wrench, Droplet, Settings, Gauge, Shield, Zap } from 'lucide-react';

// Lista de serviços ATUALIZADA com base no briefing
const services = [
  {
    icon: Wrench,
    title: 'Revisões Conforme o Manual',
    description: 'Revisões programadas seguindo à risca as especificações da Honda para garantir o melhor desempenho.',
  },
  {
    icon: Settings,
    title: 'Reparo de Câmbio CVT',
    description: 'Diagnóstico e reparo especializado em transmissões CVT, um dos nossos maiores diferenciais.',
  },
  {
    icon: Gauge,
    title: 'Suspensão e Alinhamento',
    description: 'Serviço completo em suspensão, alinhamento e balanceamento para máxima dirigibilidade e segurança.',
  },
  {
    icon: Shield,
    title: 'Diagnóstico Computadorizado',
    description: 'Tecnologia de ponta para identificar com precisão qualquer falha mecânica ou elétrica no seu Honda.',
  },
  {
    icon: Zap,
    title: 'Elétrica e Módulos ABS',
    description: 'Especialização em eletrônica Honda, incluindo diagnóstico e reparo de módulos ABS.',
  },
  {
    icon: Droplet,
    title: 'Manutenção de Câmbio Automático',
    description: 'Realizamos a troca total ou parcial do fluido e manutenção em câmbios automáticos (AT).',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços especializados para manter seu Honda em perfeito estado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
            >
              <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}