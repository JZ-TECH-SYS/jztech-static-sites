import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Sistema de Gestão',
    description: 'Sistema completo para gerenciamento empresarial, incluindo módulos de vendas, estoque, financeiro e muito mais. Desenvolvido com foco em performance e usabilidade.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/joaosn',
  },
  {
    title: 'Sistemas Sob Demanda',
    description: 'Desenvolvimento de soluções personalizadas como ClickExpress, ClickJoias e Gestor de OS. Cada projeto é único e adaptado às necessidades específicas do cliente.',
    technologies: ['React', 'Node.js', 'Electron', 'MySQL'],
    github: 'https://github.com/joaosn',
  },
  {
    title: 'Aplicações Desktop',
    description: 'Desenvolvimento de aplicações desktop com Electron, incluindo gerenciadores de impressão e emissores de tickets para eventos.',
    technologies: ['Electron', 'React', 'Node.js', 'SQLite'],
    github: 'https://github.com/joaosn',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}