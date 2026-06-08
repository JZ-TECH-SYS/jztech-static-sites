import { useState } from 'react';
import { Layout } from '@/components/layout';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Certifications } from '@/components/sections/certifications';
import { Hobbies } from '@/components/sections/hobbies';
import { Contact } from '@/components/sections/contact';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Hobbies />
          <Contact />
        </main>
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}