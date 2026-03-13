"use client";
import React, { useEffect, useState } from "react";

const Splash: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => Math.min(100, p + Math.random() * 10)), 250);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <img
        src="/faizan.jpeg"
        alt="Faizan"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).onerror = null;
          (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="100%" height="100%" fill="%23071523"/><text x="50%" y="52%" font-size="28" fill="%23ffffff" font-family="Arial,Helvetica,sans-serif" text-anchor="middle" dominant-baseline="middle">FY</text></svg>';
        }}
        className="avatar"
        style={{
          width: 96,
          height: 96,
          objectPosition: 'center 12%'
        }}
      />
      <p className="mt-6 text-slate-300">Loading</p>
      <div className="w-64 h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-blue-500 transition-all" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Splash;
