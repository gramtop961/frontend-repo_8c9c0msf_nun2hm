import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-neutral-900 dark:text-white tracking-tight text-lg">
          Arthur Saruny
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#skills" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
          <div className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />
          <a href="mailto:hello@arthursaruny.dev" aria-label="Email" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
