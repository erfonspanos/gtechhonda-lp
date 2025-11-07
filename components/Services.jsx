'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Droplet, Settings, Gauge, Shield, Zap } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import WhatsappIcon from './ui/WhatsappIcon';

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

const galleryImages = [
  {
    src: '/trabalhando.jpg',
    alt: 'Mecânico trabalhando em um Honda no elevador',
  },
  {
    src: '/trabalhando2.jpg',
    alt: 'Close-up do motor de um carro durante a manutenção',
  },
  {
    src: '/trabalhando3.jpg',
    alt: 'Diagnóstico computadorizado em um Honda',
  },
];

export default function Services() {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  
  const phoneNumber = '5585988364125';
  const message = 'Olá, G-Tech! Gostaria de marcar uma visita!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

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

        <motion.div
          className="text-center mt-16" // Margem para separar dos cards
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsappIcon size={24} />
            Fale com um especialista
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
            Galeria de <span className="text-red-600">Serviços</span>
          </h2>

          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto" // Centraliza o carrossel
            opts={{
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  // AQUI ESTÁ A CORREÇÃO:
                  // Removi 'md:basis-1/2 lg:basis-1/3'
                  className="pl-4"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0 rounded-lg overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Setas de navegação */}
            <CarouselPrevious className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}