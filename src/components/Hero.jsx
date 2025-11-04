import React from 'react';
import Spline from '@splinetool/react-spline';
import { Server, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full pt-20">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/80 dark:from-neutral-950/80 dark:via-neutral-950/20 dark:to-neutral-950/90" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <div className="pointer-events-none w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-6">
            <Server className="h-4 w-4" /> Backend Web Developer
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Arthur Saruny
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I build resilient, scalable APIs and services. Passionate about clean architecture, performance,
            and delightful developer experience. Explore my work and skills below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#skills"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 px-5 py-3 text-sm font-medium transition-colors"
            >
              Explore Skills <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-800 px-5 py-3 text-sm font-medium text-neutral-900 dark:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
