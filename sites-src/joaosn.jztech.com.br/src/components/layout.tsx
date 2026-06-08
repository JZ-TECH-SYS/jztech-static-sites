import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Layout({ children, activeSection, onSectionChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header activeSection={activeSection} onSectionChange={onSectionChange} />
      {children}
      <Footer />
    </div>
  );
}