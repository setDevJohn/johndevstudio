export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6 border-white/5 border-t">
      <div className="flex flex-col justify-between items-center gap-4 mx-auto max-w-6xl text-slate-500 text-sm">
        <p>Desenvolvido com dedicação e café ☕</p>

        <p>&copy; {new Date().getFullYear()} John Dev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
