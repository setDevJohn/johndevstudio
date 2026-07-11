interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <span className="block mb-2 font-mono text-emerald-500 text-sm uppercase tracking-widest">
        {subtitle}
      </span>
      <h2 className="font-bold text-white text-3xl md:text-4xl tracking-tight">
        {title}
      </h2>
      <div className="bg-emerald-500 mt-4 rounded-full w-12 h-1"></div>
    </div>
  );
}
