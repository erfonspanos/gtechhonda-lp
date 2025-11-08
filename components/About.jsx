// components/About.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// EDIÇÃO 1: Importar o ícone 'Star'
import { Award, Users, Clock, ThumbsUp, Star } from 'lucide-react';

// Importa o plugin de autoplay do Embla (base do seu carrossel)
import Autoplay from 'embla-carousel-autoplay';

// Importa os componentes de UI do seu projeto
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const stats = [
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: Users, value: '5000+', label: 'Clientes Satisfeitos' },
  { icon: Clock, value: '24h', label: 'Suporte Disponível' },
  { icon: ThumbsUp, value: '98%', label: 'Aprovação' },
];

const testimonials = [
  {
    name: 'Juliana Santos',
    avatar: 'https://avatar.vercel.app/juliana.png',
    comment:
      'Serviço impecável! Meu Honda CR-V está perfeito. A equipe é super atenciosa e honesta. Melhor oficina de Fortaleza, recomendo de olhos fechados!',
  },
  {
    name: 'Marcos Oliveira',
    avatar: 'https://avatar.vercel.app/marcos.png',
    comment:
      'São realmente especialistas em Honda. Levei meu Civic com um problema elétrico que ninguém aqui em Fortaleza resolvia, e eles acharam a falha em um dia.',
  },
  {
    name: 'Fernando Costa',
    avatar: 'https://avatar.vercel.app/fernando.png',
    comment:
      'Atendimento nota 10! A revisão preventiva foi rápida e o carro saiu parecendo novo. Confiança total na G-Tech. Não troco por nenhuma outra no Ceará.',
  },
  {
    name: 'Ana Clara Lima',
    avatar: 'https://avatar.vercel.app/ana.png',
    comment:
      'Levei meu Fit para a G-Tech e fui muito bem atendida. Eles explicam tudo o que precisa ser feito, sem "empurrar" serviços. Virei cliente fiel aqui em Fortal.',
  },
  {
    name: 'Rafael Martins',
    avatar: 'https://avatar.vercel.app/rafael.png',
    comment:
      'Desde que comprei meu Accord, só faço manutenção na G-Tech. São 5 anos de parceria e meu carro nunca deu problema. A melhor oficina Honda de Fortaleza!',
  },
];

const aboutImages = [
  {
    src: './oficina.png',
    alt: 'Foto da estrutura da oficina G-Tech',
  },
  // FOTO COMENTADA DA EQUIPE POR SER FOTO ERRADA (Assim que enviarem a foto certa, troco aqui)
  // {
  //   src: './equipegtech.png',
  //   alt: 'Equipe de especialistas G-Tech Honda',
  // },
];

export default function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % aboutImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre">
      {/* Container principal para a seção de depoimentos */}
      <div className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* GLOWS DE BACKGROUND */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse-slow z-0" />
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-red-600/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow delay-500 z-0" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-600/25 rounded-full filter blur-3xl opacity-40 animate-pulse-slow delay-1000 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
              O que nossos <span className="text-red-600">Clientes Dizem</span>
            </h2>

            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                loop: true,
              }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.name}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="h-full shadow-xl border-red-400 bg-gradient-to-br from-red-700 to-red-900 text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl">
                        {/* EDIÇÃO 2: ESTRUTURA DO CARDCONTENT MUDOU */}
                        <CardContent className="flex flex-col items-start p-6 h-full">
                          {/* Novo container flex para (Nome/Avatar) e (Estrelas) */}
                          <div className="flex items-start justify-between w-full mb-3">
                            {/* Lado Esquerdo: Avatar + Nome */}
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                />
                                <AvatarFallback className="bg-red-800 text-white">
                                  {testimonial.name
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-bold text-lg text-white">
                                  {testimonial.name}
                                </h4>
                              </div>
                            </div>

                            {/* Lado Direito: Estrelas (movidas para cá) */}
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>

                          {/* Bloco de estrelas original (daqui de baixo) foi REMOVIDO */}

                          <p className="text-gray-100 text-left leading-relaxed">
                            "{testimonial.comment}"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>

      {/* FAIXA DO "SOBRE NÓS" */}
      <div className="py-20 bg-gray-50">
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
                Somos a{' '}
                <strong>
                  única oficina em Fortaleza especializada exclusivamente em
                  veículos Honda
                </strong>
                . Com mais de 15 anos de experiência, nossa equipe é formada
                por técnicos certificados e apaixonados pela marca,
                garantindo um conhecimento que vai além do superficial.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Nosso foco exclusivo permite o uso de peças 100% originais e
                equipamentos de última geração específicos para a Honda,
                garantindo que seu veículo receba o melhor cuidado possível.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Aqui, seu Honda está em casa. Somos a verdadeira especialista
                de Fortaleza, combinando conhecimento técnico profundo com um
                atendimento que entende suas necessidades.
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
                <AnimatePresence>
                  <motion.img
                    key={aboutImages[currentImageIndex].src}
                    src={aboutImages[currentImageIndex].src}
                    alt={aboutImages[currentImageIndex].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Bloco de STATS */}
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
                <div className="text-gray-60To-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}