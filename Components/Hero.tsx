import React from 'react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f644,transparent)]" />
      
      <div className="container relative mx-auto px-6 text-center">
        <h1 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Build Your AI SaaS <br /> 10x Faster
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          The ultimate boilerplate for ambitious developers. Pre-configured with Auth, Database, Payments, and specialized Claude Skills.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all">
            Get Started
          </button>
          <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-slate-300 transition-colors">
            Live Demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
