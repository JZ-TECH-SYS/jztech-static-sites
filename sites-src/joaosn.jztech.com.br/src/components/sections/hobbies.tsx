import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Music, Utensils, Book } from 'lucide-react';

const hobbies = [
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: 'Academia',
    description: 'Dedicação diária ao treino e bem-estar físico',
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: 'Viola Caipira',
    description: 'Tocar música tradicional brasileira',
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: 'Churrasco',
    description: 'Apreciador da arte do churrasco',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Estudos',
    description: 'Aprendizado contínuo em tecnologia',
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Hobbies</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary mb-4">{hobby.icon}</div>
                  <h3 className="font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}