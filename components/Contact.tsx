"use client";
import React from "react";
import { motion } from "framer-motion";
import resume from "../lib/resume.json";

const Contact: React.FC = () => {
  const basics = (resume as any).basics || {};
  const links = basics.links || [];
  const github = links.find((l: any) => l.platform === 'GitHub')?.url || '#';
  const linkedin = links.find((l: any) => l.platform === 'LinkedIn')?.url || '#';

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // fallback: open mailto with filled subject/body
    const subject = encodeURIComponent(`Website contact from ${name || 'Client'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${basics.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-3xl font-bold mb-4">Contact</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <p className="text-slate-300 mb-4">Prefer email? Use the form or contact me directly using the links below.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713L.5 5.25V19a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2V5.25L12 12.713z"/></svg>
              <a href={`mailto:${basics.email}`} className="text-slate-300 underline">{basics.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.1-2.1a1 1 0 0 1 1.1-.2c1.2.5 2.6.8 4 .8a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.1 21 3 13.9 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.4.3 2.8.8 4 .2.4 0 .9-.2 1.1l-2.6 2.7z"/></svg>
              <div className="text-slate-300">
                {(basics.phone || '').split(',').map((p: string, i: number) => (
                  <div key={i}><a href={`tel:${p.trim().replace(/\s+/g,'')}`} className="underline">{p.trim()}</a></div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"/></svg>
              <div className="text-slate-300">{basics.location}</div>
            </div>
            <div className="mt-4 flex gap-2">
              <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-300 px-3 py-2 bg-white/5 rounded-full">LinkedIn</a>
              <a href={github} target="_blank" rel="noreferrer" className="text-slate-300 px-3 py-2 bg-white/5 rounded-full">GitHub</a>
            </div>
          </div>
        </div>
        <div>
          <div className="glass-card p-6">
            <form onSubmit={submit} className="grid grid-cols-1 gap-3">
              <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="p-3 rounded-md bg-white/5" />
              <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="p-3 rounded-md bg-white/5" />
              <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="p-3 rounded-md bg-white/5 min-h-[120px]" />
              <div className="flex gap-3 items-center">
                <button type="submit" className="px-4 py-2 bg-blue-600 rounded-full">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
