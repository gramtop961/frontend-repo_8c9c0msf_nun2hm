import React from 'react';
import { Database, Boxes, Shield, Cloud, Terminal, GitBranch } from 'lucide-react';

const skills = [
  {
    title: 'APIs & Services',
    icon: Terminal,
    items: ['FastAPI', 'Node/Express', 'REST/GraphQL', 'gRPC'],
  },
  {
    title: 'Data & Storage',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma/SQLAlchemy'],
  },
  {
    title: 'Architecture',
    icon: Boxes,
    items: ['Microservices', 'Event-driven', 'Domain Modeling', 'CQRS'],
  },
  {
    title: 'Cloud & Ops',
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD'],
  },
  {
    title: 'Security',
    icon: Shield,
    items: ['AuthN/Z', 'OWASP Top 10', 'JWT/OAuth2', 'Rate limiting'],
  },
  {
    title: 'Collaboration',
    icon: GitBranch,
    items: ['GitHub Flow', 'Code Review', 'Testing', 'Docs'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            A focused toolkit for building secure, scalable back end systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {items.map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
