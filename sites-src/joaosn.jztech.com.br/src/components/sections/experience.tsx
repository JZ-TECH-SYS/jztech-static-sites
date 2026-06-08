import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Laptop } from "lucide-react";
import Timeline from "../Timeline";

export function Experience() {
  return (
    <section id='experience' className='py-20'>
      <div className='container px-4 mx-auto'>
        <h2 className='text-3xl font-bold tracking-tight mb-8'>
          Experiência Profissional
        </h2>
        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <div className='flex items-center gap-4'>
                <Building2 className='h-6 w-6 text-primary' />
                <div>
                  <h3 className='text-xl font-semibold'>
                    Desenvolvedor Full Stack Senior
                  </h3>
                  <p className='text-muted-foreground'>
                    GazinTech - 2019 até o presente
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>
                Atuação na resolução de problemas complexos e apoio ao time, com
                implementações inovadoras em diversos setores do sistema.
                Experiência em:
              </p>
              <ul className='list-disc list-inside space-y-2 text-muted-foreground mb-4'>
                <li>Desenvolvimento e manutenção de sistemas críticos</li>
                <li>Liderança técnica em projetos desafiadores</li>
                <li>Implementação de soluções inovadoras</li>
                <li>Mentoria e suporte a desenvolvedores júnior</li>
              </ul>
              <div className='flex flex-wrap gap-2'>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>PHP</Badge>
                <Badge>SQL</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className='flex items-center gap-4'>
                <Laptop className='h-6 w-6 text-primary' />
                <div>
                  <h3 className='text-xl font-semibold'>
                    Desenvolvedor Freelancer
                  </h3>
                  <p className='text-muted-foreground'>
                    Projetos Independentes - 2018 até o presente
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>
                Desenvolvimento de soluções personalizadas para diversos
                clientes, incluindo:
              </p>
              <ul className='list-disc list-inside space-y-2 text-muted-foreground mb-4'>
                <li>
                  Sistemas desktop com Electron (gerenciadores de impressão,
                  emissores de tickets)
                </li>
                <li>Plataformas web completas (ClickExpress, ClickJoias)</li>
                <li>Sistemas de gestão empresarial</li>
                <li>Gestores de OS e projetos sob demanda</li>
              </ul>
              <div className='flex flex-wrap gap-2'>
                <Badge>Electron</Badge>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Full Stack</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='mt-12'>
          <Timeline />
        </div>  
      </div>
    </section>
  );
}
