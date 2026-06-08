/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock, Heart, Star, Award, Users, CheckCircle, Leaf, BookOpen, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from './Header';
import heroImage from "../assets/hero-principal.jpg.jpeg";
import terapiaImage from '../assets/prescila3.jpg';
import girassolImage from '../assets/LvjEpd3d90Of.webp';
import girassolDecorative from '../assets/cwOBjdPch1va.jpg';
import campoGirassol from '../assets/campo_girassol.jpg';
import fundoRosaGirassol from '../assets/fundo_rosa_girassol.jpg';
import prescilapalestra from '../assets/prescila_palestra.png';

const HomePage = () => {
  // Animações Framer Motion
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Função para rolar para o topo da página
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Conteúdo estático
  const content = {
    hero: {
      title: "Cuidando da sua Alma Humana",
      quote: "Não é nenhuma outra Alma como a sua no mundo. Não há ninguém como você no mundo",
      whatsappMessage: 'Olá! Gostaria de agendar uma consulta. Pode me ajudar com informações sobre horários e valores?',
      instagramLink: 'https://instagram.com/premartinss'
    },
    about: {
      title: "🌻 Sobre Mim",
      introQuote: "Eu quero ser um Girassol para a alma dos que me buscam",
      bio: [
        `Meu nome é PRESCILA, sim com "E". Eu amo os girassóis! 🌻 O Girassol é uma flor servidora, ela fornece alimento para outros animais e melhora a qualidade do solo onde está plantada. Desde criança, sempre fui uma pessoa que serve, tenho uma energia muito afetiva e amo sorrir!`,
        `Sempre fui a amiga fiel, aquela que escuta sem fazer uma única pergunta. Posso passar horas ouvindo uma pessoa e me conectando completamente com o que ela está dizendo. Meus pais me chamavam de "psicóloga" e "professora" porque sabiam que eu mergulharia nessas águas.`,
        `Minha principal atuação foi na Psicologia Organizacional na GAZIN por 18 anos, onde tive acesso a muitos campos da psicologia: treinamentos, desenvolvimento, escuta ativa, lideranças, mediação de conflitos, comunicação, CNV, PNL, Neurociência e workshops.`,
        `Sou casada com meu grande amor Luiz Vitório e mãe do Vittório e da Maria Flor. Após vivenciar a maternidade e momentos desafiadores em família, ressignifiquei minha relação com o trabalho e meu chamado como psicóloga.`,
      ],
      finalQuote: "Cada pessoa que me procura, me escolheu, e eu tenho como obrigação escolher ela também. 🌻",
      education: [
        { name: "Graduação em Psicologia", detail: "Universidade Paranaense (2018)" },
        { name: "Formação em Neurociência", detail: "FGV" },
        { name: "Liderança Inspiradora", detail: "FRST FALCONI" },
        { name: "Comunicação Assertiva", detail: "com Lena Souza (Campeã Mundial em Oratória)" },
      ],
    },
    services: {
      title: "Serviços",
      subtitle: "Atendimento personalizado para seu bem-estar",
      packages: [
        {
          title: "🌻 Pacote Quinzenal",
          description: "2 encontros por mês",
          details: `Ideal para quem busca um acompanhamento regular e consistente. Duas sessões mensais que proporcionam continuidade no processo terapêutico, permitindo desenvolvimento gradual e sustentável.`,
          features: [
            "Atendimento online ou presencial",
            "Materiais terapêuticos inclusos",
            "Escuta familiar sem custo adicional",
            "Flexibilidade de horários",
          ],
          whatsappMessage: 'Olá! Gostaria de mais informações sobre o pacote quinzenal.'
        },
        {
          title: "🌻 Pacote Semanal",
          description: "4 encontros por mês",
          details: `Perfeito para quem deseja um acompanhamento mais intensivo e transformador. Quatro sessões mensais que aceleram o processo de autoconhecimento e proporcionam resultados mais rápidos e duradouros.`,
          features: [
            "Atendimento online ou presencial",
            "Materiais terapêuticos inclusos",
            "Escuta familiar sem custo adicional",
            "Acompanhamento mais intensivo",
            "Prioridade no agendamento"
          ],
          isPopular: true,
          whatsappMessage: 'Olá! Gostaria de mais informações sobre o pacote semanal.'
        },
      ],
    },
    aboutServices: {
      title: "O que faço",
      items: [
        {
          icon: <Leaf className="w-8 h-8 text-[#781113]" />,
          title: "Olhar para a Alma Humana",
          description: "Abordo a terapia de forma integrada, unindo corpo, mente e alma. Meu trabalho é construir uma relação de confiança para que você se sinta seguro e acolhido."
        },
        {
          icon: <BookOpen className="w-8 h-8 text-[#781113]" />,
          title: "Sessões Personalizadas",
          description: "Cada pessoa é única. As sessões são totalmente personalizadas de acordo com as suas necessidades e objetivos. Juntos, traçaremos o melhor caminho."
        },
        {
          icon: <Heart className="w-8 h-8 text-[#781113]" />,
          title: "Acolhimento e Empatia",
          description: "Ofereço um espaço seguro, sem julgamentos, onde você pode se expressar livremente. A escuta ativa e a empatia são a base do nosso trabalho."
        }
      ]
    },
    diferentials: {
      title: "Diferenciais",
      items: [
        "Sessões online ou presenciais em clínica",
        "Atendimento com abordagem da psicologia integrada, humanizada e cristã",
        "Escuta individual, familiar e organizacional",
        "Terapia para crianças, adolescentes e adultos",
        "Flexibilidade de horários",
        "Supervisão e estudo de caso contínuos"
      ]
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Estou aqui para ajudar você",
      phone: "(44) 98803-6966",
      instagram: "@premartinss",
      crp: "CRP 08/28396",
      paymentInfo: "Pagamentos via Pix com recibo e ficha de acompanhamento mensal",
      contactMessage: 'Olá! Vi seu site e gostaria de agendar uma consulta. Pode me passar mais informações?'
    }
  };

  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5544988036966?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8E2C5] overflow-x-hidden">
      <Header currentPage="home" onScrollToTop={handleScrollToTop} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative bg-[#F8E2C5]">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{ backgroundImage: `url(${campoGirassol})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        </div>
        
        <motion.div 
          className="absolute top-20 right-10 w-12 h-12 opacity-20"
          animate={{ rotate: [0, 360], y: [-10, 10, -10] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
          <img src={girassolImage} alt="Girassol" className="w-full h-full" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-10 w-8 h-8 opacity-15"
          animate={{ rotate: [360, 0], x: [-5, 5, -5] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, x: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        >
          <img src={girassolImage} alt="Girassol" className="w-full h-full" />
        </motion.div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-[#781113] leading-tight"
                variants={fadeInUp}
              >
                Cuidando da sua
                <span className="text-transparent bg-gradient-to-r from-[#781113] to-[#B86145] bg-clip-text block flex items-center gap-3">
                  Alma Humana
                  <motion.span 
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🌻
                  </motion.span>
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#B86145] leading-relaxed font-medium"
                variants={fadeInUp}
              >
                "{content.hero.quote}"
              </motion.p>
              
              {/* Botões CORRIGIDOS */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Button 
                  size="lg" 
                  className="w-full md:flex-1 bg-[#B86145] hover:bg-[#781113] text-white px-8 py-3 shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => handleWhatsAppClick(content.hero.whatsappMessage)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar Consulta 🌻
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full md:flex-1 border-2 border-[#781113] text-[#781113] hover:bg-[#F8E2C5] px-8 py-3 transform hover:scale-105 transition-all"
                  onClick={() => window.open(content.hero.instagramLink, '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram 📸
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-6 text-sm text-[#781113] bg-white/80 rounded-full px-6 py-3 backdrop-blur-sm shadow-sm"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-[#B86145]" />
                  CRP 08/28396
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-[#B86145]" />
                  Online/Presencial
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Prescila Martins - Psicóloga" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#781113] to-transparent"></div>
              </div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-[#B86145] rounded-full p-4 shadow-lg"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
              >
                <img src={girassolImage} alt="Girassol" className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-[#781113] rounded-full p-4 shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção "O que faço" (Nova) */}
      <section id="o-que-faco" className="py-16 bg-[#F8E2C5]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-[#781113] mb-4">{content.aboutServices.title}</h3>
            <p className="text-xl text-[#B86145] max-w-3xl mx-auto">
              Minha filosofia de trabalho é baseada na **psicologia integrada**, combinando diferentes técnicas para oferecer um tratamento completo e personalizado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {content.aboutServices.items.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h4 className="text-xl font-semibold text-[#781113] mt-4 mb-2">{item.title}</h4>
                <p className="text-sm text-[#B86145]">{item.description}</p>
              </motion.div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Seção "Diferenciais" (Nova) */}
      <section id="diferenciais" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-[#781113] mb-4">{content.diferentials.title}</h3>
            <p className="text-xl text-[#B86145] max-w-3xl mx-auto">
              O que me torna diferente e o que você pode esperar do nosso trabalho juntos.
            </p>
          </motion.div>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.diferentials.items.map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start space-x-3 bg-[#F8E2C5] p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-[#B86145] mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sobre Section - FUNDO BRANCO REMOVIDO */}
      <section id="sobre" className="py-16 bg-[#F8E2C5] relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${campoGirassol})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-[#781113] mb-4">{content.about.title}</h3>
            <p className="text-xl text-[#B86145] max-w-3xl mx-auto">
              "{content.about.introQuote}" 🌻
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {content.about.bio.map((paragraph, index) => (
                  <p key={index} className="text-lg">{paragraph}</p>
                ))}
                
                <p className="text-[#B86145] font-medium text-lg">
                  <strong>"{content.about.finalQuote}"</strong>
                </p>
              </div>
            </motion.div>
            
            {/* IMAGEM ATUALIZADA - RESPONSIVA E PROPORCIONAL */}
            <motion.div
              className="w-full flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md lg:max-w-lg">
                <img 
                  src={prescilapalestra} 
                  alt="Prescila Martins em palestra" 
                  className="w-full h-auto object-contain"
                  style={{ 
                    maxHeight: '500px',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Seção de Formações com destaque e separador (NOVA POSIÇÃO) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-[#F8E2C5] rounded-xl p-8 shadow-md max-w-4xl mx-auto text-center border-t-2 border-[#B86145]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-[#781113] mb-4">Minhas Formações</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 divide-x divide-[#B86145]">
              {content.about.education.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 text-left">
                  <Star className="w-6 h-6 text-[#B86145] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-[#781113]">{item.name}</h5>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Fim da Seção de Formações */}
      
      {/* Serviços Section */}
      <section id="servicos" className="py-16 bg-[#F8E2C5]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-[#781113] mb-4">{content.services.title}</h3>
            <p className="text-xl text-[#B86145]">{content.services.subtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.services.packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col ${pkg.isPopular ? 'border-2 border-[#781113]' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="bg-[#B86145] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#781113]">{pkg.title}</h4>
                  <p className="text-[#B86145]">{pkg.description}</p>
                  {pkg.isPopular && (
                    <div className="bg-[#781113] text-white text-xs px-2 py-1 rounded-full inline-block mt-2">
                      Mais Popular
                    </div>
                  )}
                </div>
                
                <div className="text-center flex-grow">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {pkg.details}
                  </p>
                  
                  <div className="space-y-3 text-left mb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <Star className="w-4 h-4 text-[#B86145] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-[#B86145] hover:bg-[#781113]"
                    onClick={() => handleWhatsAppClick(pkg.whatsappMessage)}
                  >
                    Escolher Plano
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-[#781113] mb-4">{content.contact.title}</h3>
            <p className="text-xl text-[#B86145]">{content.contact.subtitle}</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#B86145] rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#781113]">Telefone/WhatsApp</h4>
                  <p className="text-gray-600">{content.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-[#B86145] rounded-full p-3">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#781113]">Instagram</h4>
                  <p className="text-gray-600">{content.contact.instagram}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-[#B86145] rounded-full p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#781113]">Registro Profissional</h4>
                  <p className="text-gray-600">{content.contact.crp}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#B86145] to-[#781113] rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-2">Formas de Pagamento</h4>
                <p className="text-white/90 mb-4">{content.contact.paymentInfo}</p>
                <Button 
                  className="bg-white hover:bg-gray-200 text-[#781113]"
                  onClick={() => handleWhatsAppClick(content.contact.contactMessage)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Agendar Agora
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={terapiaImage} 
                alt="Sessão de Terapia" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-[#B86145] rounded-full p-4 shadow-lg"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={girassolImage} alt="Girassol" className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#781113] text-white py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.img 
              src={girassolDecorative} 
              alt="Girassol" 
              className="w-8 h-8 rounded-full object-cover"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <h4 className="text-xl font-bold">Prescila Martins</h4>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌻
            </motion.div>
          </div>
          <p className="text-gray-300 mb-4">
            Psicóloga CRP 08/28396 | Cuidando da sua Alma Humana 🌻
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleWhatsAppClick(content.contact.contactMessage)}
            >
              <Phone className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://instagram.com/premartinss', '_blank')}
            >
              <Instagram className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-xs text-gray-400 border-t border-gray-700 pt-4">
            <p>Feito com ❤️ por <a href="https://jztech.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#B86145] hover:text-gray-200 font-medium">JZ Tech</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;