"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="flex flex-col items-center gap-4">
          <img
            src="/faizan.jpeg"
            alt="Faizan"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).onerror = null;
              (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="100%" height="100%" fill="%23071523"/><text x="50%" y="52%" font-size="48" fill="%23ffffff" font-family="Arial,Helvetica,sans-serif" text-anchor="middle" dominant-baseline="middle">FY</text></svg>';
            }}
            className="avatar avatar--lg ring-2 ring-blue-400/40"
            style={{ objectPosition: 'center 12%' }}
          />
          <h2 className="text-blue-400 font-mono mb-0">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
            FAIZAN <span className="gradient-name">YOUSAF</span>
          </h1>
        </div>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          Computer Science student specializing in <span className="text-white">Full-Stack Development</span> and
          <span className="text-white"> AI/RAG systems</span>. Building high-impact applications with React, Python, and Generative AI.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#experience" className="px-8 py-4 rounded-full font-bold btn-accent hover-tilt glow-accent">
            View Experience
          </a>
          <a href="/MUHAMMAD%20FAIZAN%20YOUSAF%20CV.pdf" download className="px-8 py-4 rounded-full font-bold btn-outline hover-tilt" target="_blank" rel="noreferrer noopener">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
