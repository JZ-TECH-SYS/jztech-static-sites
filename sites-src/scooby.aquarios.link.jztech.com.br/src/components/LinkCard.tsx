import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type LinkCardProps = {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  pill?: string;
  gradient: string;
};

export default function LinkCard({ title, description, url, icon: Icon, pill, gradient }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} - ${description}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 rounded-2xl"
    >
      <div
        className={`relative rounded-2xl bg-gradient-to-br ${gradient} p-[1px] shadow-xl transition-all duration-300 hover:shadow-2xl`}
      >
        <div className="relative flex items-center gap-4 rounded-2xl bg-white/90 p-5 backdrop-blur-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-sky-800 shadow-inner ring-1 ring-white/60">
            <Icon className="h-6 w-6" strokeWidth={2.4} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              {pill ? (
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {pill}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          </div>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-sky-800 shadow-md transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white">
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </a>
  );
}
