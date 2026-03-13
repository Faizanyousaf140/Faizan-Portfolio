"use client";
import React from "react";

const grouped = {
  Frontend: [
    { name: 'React.js', pct: 90 },
    { name: 'Next.js', pct: 85 },
    { name: 'JavaScript (ES6+)', pct: 92 },
    { name: 'Tailwind CSS', pct: 90 },
    { name: 'ShadCN UI', pct: 85 },
    { name: 'HTML5/CSS3', pct: 95 },
  ],
  Backend: [
    { name: 'Node.js', pct: 90 },
    { name: 'Express.js', pct: 88 },
    { name: 'MongoDB', pct: 85 },
    { name: 'MySQL', pct: 80 },
    { name: 'RESTful APIs', pct: 92 },
    { name: 'Python', pct: 85 },
  ],
  'AI/ML': [
    { name: 'NLP', pct: 90 },
    { name: 'Machine Learning', pct: 90 },
    { name: 'Generative AI', pct: 90 },
    { name: 'RAG (Retrieval Augmented Generation)', pct: 90 },
    { name: 'LLMs', pct: 90 },
  ],
  Tools: [
    { name: 'Git/GitHub', pct: 90 },
    { name: 'VS Code', pct: 95 },
    { name: 'Vercel', pct: 85 },
    { name: 'Postman', pct: 88 },
    { name: 'npm/yarn', pct: 90 },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-6">Skills</h3>
      <p className="text-slate-400 mb-8">Technologies and tools I use to bring ideas to life</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group} className="glass-card p-6">
            <h4 className="font-bold text-lg mb-4">{group}</h4>
            <div className="space-y-3">
              {items.map((s: any) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">{s.name}</span>
                    <span className="text-sm text-slate-300">{s.pct}%</span>
                  </div>
                  <div className="w-full bg-white/6 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] h-3 rounded-full transition-all" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
