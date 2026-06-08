import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"

const timeline = [
  {
    year: "2017–2018",
    title: "Primeiros passos",
    desc: "Comecei a estudar programação por conta própria, vendo vídeos no YouTube e fazendo cursos da B7Web.",
  },
  {
    year: "2020",
    title: "Faculdade e ComandaMaster",
    desc: "Início da Engenharia da Computação na UNIPAR e desenvolvimento do primeiro sistema em produção, o ComandaMaster.",
  },
  {
    year: "2021–2022",
    title: "ClickExpress & TCC",
    desc: "Foco nos estudos e entrega do TCC com o sistema ClickExpress para comanda e pedidos leves.",
  },
  {
    year: "2023–2024",
    title: "Fundação da JZ Tech",
    desc: "Criação da JZ Tech com projetos como ClickJoias, ZeroPapel, SenseiSuite e estudo intenso de DevOps e IA.",
  },
  {
    year: "2025",
    title: "Gazin Tech & Expansão",
    desc: "Atuação na área de TI da Gazin Tech e expansão da JZ Tech com novos projetos e parcerias.",
  },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-background" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💻 Minha Linha do Tempo 
        </motion.h2>

        <div className="relative border-l border-muted-foreground/20">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-2.5 flex items-center justify-center border-4 border-background">
                <CalendarDays className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-base font-medium text-primary">{item.year}</h3>
              <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
