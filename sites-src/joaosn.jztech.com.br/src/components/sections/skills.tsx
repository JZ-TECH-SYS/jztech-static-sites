import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  Cloud,
  Layout as LayoutIcon,
  Server,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <LayoutIcon className="h-6 w-6" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: <Server className="h-6 w-6" />,
    skills: ['Node.js', 'PHP', 'Express', 'Laravel', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server'],
  },
  {
    title: 'DevOps',
    icon: <Cloud className="h-6 w-6" />,
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}