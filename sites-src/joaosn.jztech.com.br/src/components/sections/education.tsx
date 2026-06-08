import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Book } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Educação</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Engenharia da Computação</h3>
                  <p className="text-muted-foreground">UNIPAR - Universidade Paranaense</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Formação completa em 2023, com foco em desenvolvimento de software e sistemas computacionais.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Book className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Desenvolvimento Web Full Stack</h3>
                  <p className="text-muted-foreground">B7-Web</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Curso completo de desenvolvimento web, abrangendo tecnologias front-end e back-end modernas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}