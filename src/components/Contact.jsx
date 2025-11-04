import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
          Let’s build something great
        </h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          I’m available for freelance projects, collaborations, and full-time roles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@arthursaruny.dev"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 px-5 py-3 text-sm font-medium transition-colors"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-800 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-800 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Arthur Saruny. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
