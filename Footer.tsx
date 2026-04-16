export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-500 text-sm font-light">
          &copy; {currentYear} Agora Data Driven. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium text-zinc-500">
          <a href="#about" className="hover:text-zinc-950 transition-colors">About</a>
          <a href="#work" className="hover:text-zinc-950 transition-colors">Work</a>
          <a href="#contact" className="hover:text-zinc-950 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
