import { ArrowUpRight, MessageCircle } from 'lucide-react';

type ContactButtonProps = {
  href: string;
  phoneLabel: string;
  caption?: string;
};

export default function ContactButton({ href, phoneLabel, caption = 'Atendimento imediato' }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-full items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 sm:w-auto sm:px-5"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 shadow-inner backdrop-blur">
          <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
        </span>
        <div className="text-left leading-tight">
          <p className="text-[11px] uppercase tracking-[0.2em] opacity-80">{caption}</p>
          <p className="text-base font-semibold sm:text-lg">{phoneLabel}</p>
        </div>
      </div>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.6} />
      </span>
    </a>
  );
}
