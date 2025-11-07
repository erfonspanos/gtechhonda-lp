'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsappIcon from './ui/WhatsappIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // A função formatPhone aplica a máscara (XX) XXXXX-XXXX
  const formatPhone = (value) => {
    let v = value.replace(/\D/g, ''); // Remove todos os não-dígitos
    v = v.slice(0, 11); // Limita a 11 dígitos (DDD + 9 + 8 dígitos)

    if (v.length > 7) {
      // (XX) XXXXX-XXXX
      v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (v.length > 2) {
      // (XX) XXXXX
      v = v.replace(/^(\d{2})(\d{1,5}).*/, '($1) $2');
    } else if (v.length > 0) {
      // (XX
      v = v.replace(/^(\d{1,2}).*/, '($1');
    }
    return v;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      setFormData({ ...formData, phone: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message } = formData;
    const phoneNumber = '5585988364125';

    const whatsappMessage = `${name}\n${phone}\n\n${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: WhatsappIcon,
      title: 'WhatsApp',
      content: '(85) 98836-4125',
      link: 'https://wa.me/5585988364125',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Antônio Sales, 343 - Joaquim Távora, Fortaleza-CE 60135-101',
      link: 'https://maps.google.com',
    },
  ];

  return (
    // 1. ADICIONADO 'relative' e 'overflow-hidden' À SEÇÃO
    <section
      id="contato"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* 2. ADICIONADO O DIV DA IMAGEM DE FUNDO */}
      {/* Troque a URL abaixo pela sua imagem. 
        Uma textura sutil ou um blueprint (esquema técnico) funcionam bem.
      */}
      <div
        className="absolute inset-0 z-0 opacity-5" // Opacidade bem baixa (5%)
        style={{
          backgroundImage:
            "url('/oficina.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply', // Mistura a imagem com o bg-white
        }}
      />

      {/* 3. ADICIONADO 'relative z-10' AO CONTEÚDO PARA FICAR NA FRENTE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Entre em <span className="text-red-600">Contato</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Agende seu serviço ou tire suas
            dúvidas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* O formulário permanece com bg-gray-50, como solicitado */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength="15"
                  placeholder="(DDD) 9XXXX-XXXX"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-8 mb-8">
              {/* Os cards de informação permanecem com bg-gray-50 */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={
                    info.link.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
                >
                  <div className="bg-red-600 p-3 rounded-lg">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg">
                      {info.title}
                    </h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-2xl h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2217.8240960717158!2d-38.5198207310923!3d-3.7402568558634903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749a73c68550d%3A0x7b1daf2040ea03a3!2sGtech%20oficina%20especializada%20em%20ve%C3%ADculos%20Honda!5e0!3m2!1spt-BR!2sbr!4v1761786085961!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}