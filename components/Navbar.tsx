"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import resume from "../lib/resume.json";

const getLink = (platform: string) => {
  const basics = (resume as any).basics || {};
  const links = basics.links || [];
  const found = links.find((l: any) => l.platform.toLowerCase() === platform.toLowerCase());
  return found ? found.url : platform === 'github' ? basics.links?.find((l:any)=>l.platform==='GitHub')?.url || '#' : '#';
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-30">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between bg-white/3 backdrop-blur-md border border-white/6 rounded-2xl px-4 py-2">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">FY</div>
            <span className="font-semibold">Faizan Yousaf</span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm nav-link text-slate-200 hover:text-white transition">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="ml-4 px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">Get in touch</a>
            <a href={getLink('LinkedIn')} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white ml-3" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.1c.7-1.2 2.5-2.4 4.9-2.4C23.9 7 24 12 24 15.8V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4.1V24H8V7z"/></svg>
            </a>
            <a href={getLink('GitHub')} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white ml-2" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.01-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.75.41-1.26.75-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.51.11-3.16 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.65.24 2.86.12 3.16.74.8 1.18 1.82 1.18 3.08 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.06.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z"/></svg>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen((v) => !v)} aria-label="menu" className="p-2">
              {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 bg-white/3 backdrop-blur-md border border-white/6 rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link text-slate-200">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold text-center">Get in touch</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// observe sections and set active link on client
if (typeof window !== 'undefined') {
  // run in microtask to avoid interfering with module initialization
  setTimeout(() => {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id;
            const nav = document.querySelector('header');
            if (!nav) return;
            const links = nav.querySelectorAll('a[href^="#"]');
            links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === id));
          }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    } catch (e) {}
  }, 0);
}
