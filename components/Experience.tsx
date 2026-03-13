"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Zap } from "lucide-react";
import resume from "../lib/resume.json";

const companyLogos: Record<string, { img: string; url: string }> = {
  "Digital Genei": { img: "/Digital genei work .png", url: "https://www.linkedin.com/company/digitalgenei/posts/?feedView=all" },
  "Skillify Zone": { img: "/skiillify zone internship.jpg", url: "https://www.linkedin.com/company/skillifyzone/" },
};

const Experience: React.FC = () => {
  const experiences = (resume as any).experience || [];
  const profileLink = (resume as any).basics?.links?.find((l:any)=>l.platform==='LinkedIn')?.url || '#';

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <Briefcase className="text-blue-400" /> Experience
      </h3>
      <div className="space-y-8">
        {experiences.map((exp: any, idx: number) => {
          const logo = companyLogos[exp.company];
          const dateRange = exp.startDate || exp.date ? `${exp.startDate || exp.date}${exp.endDate ? ' — ' + exp.endDate : ''}` : '';
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="experience-card p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl relative overflow-hidden group flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                {logo ? (
                  <a href={logo.url} target="_blank" rel="noreferrer" className="block w-full h-full">
                    <img src={logo.img} alt={exp.company} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">No logo</div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col">
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <p className="text-slate-400">{exp.company}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-blue-400 font-mono text-sm">{dateRange}</p>
                    <a href={logo?.url || profileLink} target="_blank" rel="noreferrer" className="text-slate-400 text-sm underline mt-1 inline-block">Company</a>
                  </div>
                </div>

                <div className="mt-4">
                {exp.bullets && (
                  <ul className="space-y-2">
                    {exp.bullets.map((b: string, i: number) => (
                      <li key={i} className="text-slate-300 flex items-start gap-2">
                        <Zap className="w-4 h-4 text-blue-500 mt-1 shrink-0" /> <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;