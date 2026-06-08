import { ArrowUpRight } from 'lucide-react';

type FooterProps = {
  brand: string;
  year: number;
  websiteUrl: string;
};

export default function Footer({ brand, year, websiteUrl }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-white/70 pt-6 text-center text-sm text-slate-600">
      <p className="text-base font-semibold text-slate-800">{'\u00a9'} {year} {brand}</p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="font-medium text-slate-700">Desenvolvido com cuidado por</span>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-3 py-1.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          JZTech
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
