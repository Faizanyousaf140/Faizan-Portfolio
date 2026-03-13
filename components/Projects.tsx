"use client";
import React from "react";
import resume from "../lib/resume.json";

  const imageMap: Record<string, string> = {
  "HealthMate (Final Year Project)": "/healthMate.png",
  "AI Knowledge OS": "/AI Knowledge OS.png",
  "RAG for diagnostic reasoning for Clinical Notes": "/RAG.png",
    "Neural-Machine-Translation-Urdu-to-Roman-Urdu": "/NMT urdu to roman urdu.png",
    "Conversational-Chatbot-in-Urdu": "/Conversational chatbot.png",
    "VerbatimAI": "/Digital genei work .png",
};

  const repoMap: Record<string, string> = {
    "RAG for diagnostic reasoning for Clinical Notes": "https://github.com/Faizanyousaf140/RAG-for-Diagnostic-Reasoning-in-Clinical-Notes-DiReCT-",
    "Neural-Machine-Translation-Urdu-to-Roman-Urdu": "https://github.com/Faizanyousaf140/Neural-Machine-Translation-Urdu-to-Roman-Urdu",
    "VerbatimAI": "https://github.com/Faizanyousaf140/Verbatim-AI-Project",
    "Conversational-Chatbot-in-Urdu": "https://github.com/Faizanyousaf140/Conversational-Chatbot-in-Urdu",
  };

  // small logos (reuse imageMap if explicit logos not provided)
  const logoMap: Record<string, string> = {
    ...imageMap,
  };

const Projects: React.FC = () => {
  const projects = (resume as any).projects || [];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold mb-8">Projects</h3>

      <div className="space-y-6">
        {projects.map((p: any, idx: number) => {
          const img = imageMap[p.title];
          const logo = logoMap[p.title];
          return (
            <article key={idx} className="glass-card p-4 hover:scale-[1.01] transition-transform">
              <div className="grid grid-cols-12 gap-4">
                {/* Left: logo + title */}
                <div className="col-span-2 flex flex-col items-start">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-white/5 p-2 mb-3 flex items-center justify-center">
                    {logo ? (
                      <a href={repoMap[p.title] || (resume as any).basics?.links?.find((l:any)=>l.platform==='GitHub')?.url || '#'} target="_blank" rel="noreferrer">
                        <img src={logo} alt={p.title} className="w-full h-full object-contain" />
                      </a>
                    ) : (
                      <div className="text-slate-400">No logo</div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                </div>

                {/* Middle: buttons + screenshot */}
                <div className="col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    {repoMap[p.title] ? (
                      <a href={repoMap[p.title]} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md btn-accent flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.948 0-1.092.39-1.986 1.03-2.686-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.547 1.377.203 2.394.1 2.647.64.7 1.028 1.594 1.028 2.686 0 3.846-2.338 4.692-4.566 4.942.359.31.679.923.679 1.861 0 1.343-.012 2.423-.012 2.753 0 .269.18.58.688.482A10.02 10.02 0 0 0 22 12.02C22 6.484 17.523 2 12 2z" fill="currentColor"/>
                        </svg>
                        <span>View Repo</span>
                      </a>
                    ) : (
                      <a href={(resume as any).basics?.links?.find((l:any)=>l.platform==='GitHub')?.url || '#'} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md btn-outline flex items-center gap-2">
                        <span>GitHub</span>
                      </a>
                    )}

                    <a href={(resume as any).basics?.links?.find((l:any)=>l.platform==='LinkedIn')?.url || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center text-slate-300 hover:text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.18h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24H18V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24H7.5V8z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>

                  {img && (
                    <a href={repoMap[p.title] || '#'} target="_blank" rel="noreferrer">
                      <img src={img} alt={p.title} className="w-full h-40 object-cover rounded-md shadow-sm" />
                    </a>
                  )}
                </div>

                {/* Right: long description */}
                <div className="col-span-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.stack.map((s: string, i: number) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/6 rounded-full">{s}</span>
                    ))}
                  </div>

                  <div className="text-slate-300 text-sm">
                    <ul className="space-y-2">
                      {p.bullets.map((b: string, i: number) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
