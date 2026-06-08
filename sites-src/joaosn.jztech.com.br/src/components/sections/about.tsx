import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, BookOpen, Zap, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "../ImageCarousel";

const paragraphs = [
  () => (
    <p className='flex items-center gap-3 text-2xl font-bold text-primary'>
      <span className='inline-block bg-primary/10 p-2 rounded-full'>
        <BookOpen className='w-6 h-6 text-primary' />
      </span>
      Minha Jornada
    </p>
  ),
  () => (
    <p>
      Minha história começou cedo, lá em <strong>Pirapozinho – SP</strong>, onde
      comecei a trabalhar com apenas <strong>12 anos</strong>. Vendia picolé
      pelas ruas da cidade inteira, andando de canto a canto com meu carrinho
      pra garantir o dinheiro do dia. A rotina era puxada, mas o foco era claro:
      juntar um dinheirinho pra ajudar e conquistar minhas próprias coisas.
    </p>
  ),
  () => (
    <p>
      Depois disso, trabalhei em uma <strong>borracharia</strong>, onde tive o
      privilégio de aprender com o mestre <strong>Buiu</strong>, que me ensinou
      quase tudo que sabia da profissão. Em paralelo, sempre que surgia
      oportunidade, eu estava lá: <strong>capinando lote</strong>, que era “de
      lei” nos tempos livres — pra fazer aquele dinheiro extra.
    </p>
  ),
  () => (
    <p>
      Também peguei muitos serviços no campo: desde{" "}
      <strong>catar tomate, colher abacaxi, capinar mandioca</strong>, até
      carregar saco e ajudar o pessoal da roça. Mesmo sendo menor de idade,
      dizia que tinha 16 anos só pra poder acompanhar a galera e garantir um dia
      de serviço. E assim fui moldando meu jeito guerreiro de viver.
    </p>
  ),
  () => (
    <p>
      Depois fui morar com meus tios, <strong>Ângelo Marcos e Janaina</strong>,
      em uma fazenda na região de <strong>Terra Boa – PR</strong>. Ali eu vivi
      uma experiência intensa e inesquecível: cuidava de gado, tirava leite,
      fazia cerca, plantava, cuidava de horta e dos animais. Aprendi de verdade
      como é a vida no campo, na roça de raiz.
    </p>
  ),
  () => (
    <p>
      Ao voltar pra Pirapozinho, continuei pegando o que aparecia: serviço em
      sítio, <strong>servente de pedreiro</strong> (onde aprendi muita coisa
      também), e tudo que dava pra fazer com dignidade.
    </p>
  ),
  () => (
    <p>
      Mais tarde, quando os bicos começaram a rarear, resolvi{" "}
      <strong>mudar pra Douradina – PR</strong>, onde vivia a família do meu
      pai. Logo que cheguei, fui trabalhar com ele na pintura de casas. Aprendi
      direitinho, fiquei bom na coisa. Mas quando o serviço caiu, voltei a
      buscar novas oportunidades.
    </p>
  ),
  () => (
    <p>
      Foi aí que consegui vaga numa <strong>fazenda</strong> da região, onde
      fiquei por mais de um ano. Depois disso, voltei pra cidade e passei a
      fazer serviços gerais pra sitiantes e também diárias nos depósitos da{" "}
      <strong>Gazin</strong> — tanto no varejo quanto na indústria.
    </p>
  ),
  () => (
    <p>
      Durante um tempo, fui “pingando” de um lugar pra outro até que apareceu
      uma vaga fixa no{" "}
      <strong>Centro de Distribuição de Matéria-Prima da Gazin</strong>. Era pra
      ser só 3 meses… acabou virando 1 ano. Me dediquei tanto que fui{" "}
      <strong>efetivado com carteira assinada aos 17 anos</strong>. Esse foi meu
      primeiro registro CLT. Foi ali, entre esse ano de diárias e o ano
      contratado, que algo dentro de mim começou a despertar.
    </p>
  ),
  () => <hr className='my-8 border-muted' />,
  () => (
    <p className='flex items-center gap-3 text-2xl font-bold text-primary'>
      <span className='inline-block bg-primary/10 p-2 rounded-full'>
        <Zap className='w-6 h-6 text-primary' />
      </span>
      A Virada
    </p>
  ),
  () => (
    <p>
      Comprei meu primeiro PC gamer com um ano de economia porque sempre gostei
      muito de jogos. Fiquei uns dias só curtindo isso, mas aí parei e pensei:
      “Poxa, gastei quase 1 ano de economia pra ficar só nos games… acho melhor
      eu procurar algo que me dê retorno com esse PC.”
    </p>
  ),
  () => (
    <p>
      O estalo veio quando assisti à série{" "}
      <strong>“Como Vender Drogas Online”</strong> — não que eu fosse fazer
      isso, viu? 😂 — e vi um personagem no computador com umas letrinhas
      coloridas. Aquilo acendeu uma lâmpada na minha cabeça. Falei: “Isso aí
      deve ser programação!” E era mesmo. Ao decorrer do episódio o personagem
      virou a noite e no outro dia tava lá, com um site funcionando. Achei
      aquilo incrível.
    </p>
  ),
  () => (
    <p>
      Pesquisei sobre programação, comecei com vídeos no YouTube e então conheci
      a plataforma que mudou tudo: a <strong>B7Web</strong>.
    </p>
  ),
  () => <hr className='my-8 border-muted' />,
  () => (
    <p className='flex items-center gap-3 text-2xl font-bold text-primary'>
      <span className='inline-block bg-primary/10 p-2 rounded-full'>
        <GraduationCap className='w-6 h-6 text-primary' />
      </span>
      Formação e Futuro
    </p>
  ),
  () => (
    <p>
      Tudo que eu sei hoje como desenvolvedor nasceu na <strong>B7Web</strong>,
      criada por <strong>Boniek Lacerda</strong>. Eu nunca vi uma plataforma tão
      completa. Foi lá que aprendi frontend, backend, lógica, APIs, bancos de
      dados e muito mais. Até hoje consulto os cursos de lá quando preciso. Sem
      exagero: aquilo ali foi o divisor de águas da minha vida.
    </p>
  ),
  () => (
    <p>
      Hoje, em <strong>Douradina – PR</strong>, atuo na área de TI da
      <strong>Gazin Tech</strong> e também gerencio minha própria empresa: a
      <strong>JZ Tech</strong>. Sou desenvolvedor/programador de sistemas com
      experiência completa em web, desktop e mobile. Minha paixão está em criar
      soluções inovadoras, resolver problemas reais e entregar valor em cada
      projeto.
    </p>
  ),
  () => (
    <p>
      Continuo aprendendo diariamente — seja com a <strong>B7Web</strong>, seja
      com ferramentas como o <strong>ChatGPT</strong> — porque{" "}
      <strong>evolução constante faz parte do meu DNA</strong>.
    </p>
  ),
];

export function About() {
  const [visible, setVisible] = useState(3)

  const showMore = () => setVisible(v => Math.min(v + 1, paragraphs.length))
  const reset = () => setVisible(3)

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Título */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-5 rounded-xl shadow-xl mb-12 flex items-center justify-center gap-4">
          <User className="h-8 w-8" />
          <h2 className="text-5xl font-extrabold tracking-tight">Sobre Mim</h2>
        </div>

        {/* Container principal */}
        <div className="relative">
          
          {/* Imagem flutuante à esquerda no desktop */}
          <div className="float-none md:float-left md:mr-10 mb-6 w-full md:w-72 max-w-full shrink-0">
            <ImageCarousel />
          </div>

          {/* Texto fluindo */}
          <div className="text-justify text-2xl leading-relaxed font-light space-y-6 [&>p>strong]:text-primary">
            <AnimatePresence mode="wait">
              {paragraphs.slice(0, visible).map((Component, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {Component()}
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex justify-end gap-4 pt-6">
              {visible < paragraphs.length && (
                <Button onClick={showMore}>Continuar</Button>
              )}
              {visible > 3 && (
                <Button variant="secondary" onClick={reset}>
                  Recolher
                </Button>
              )}
            </div>
          </div>

          {/* Limpa float no fim */}
          <div className="clear-both" />
        </div>
      </div>
    </section>
  )
}