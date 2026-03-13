"use client";
import React from "react";
import { motion } from "framer-motion";

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "Coursera – Machine Learning Specialization",
      subtitle: "(Supervised Learning, Unsupervised Learning, Advanced Learning Algorithms)",
      img: "/machine learning specilization.jpg",
    },
  ];
  const [modalSrc, setModalSrc] = React.useState<string | null>(null);

  return (
    <motion.section
      id="certifications"
      className="py-20 px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-3xl font-bold mb-6">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <div key={i} className="glass-card p-4 flex items-center gap-4">
            {c.img && (
              <button onClick={() => setModalSrc(c.img)} className="rounded-md overflow-hidden">
                <img src={c.img} alt={c.title} className="w-28 h-16 object-cover rounded-md" />
              </button>
            )}
            <div>
              <p className="font-semibold">{c.title}</p>
              <p className="text-sm text-slate-300 mt-1">{c.subtitle}</p>
            </div>
            <div className="ml-auto">
              <a href={c.img} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md btn-accent hover-tilt">Open</a>
            </div>
          </div>
        ))}
        {modalSrc && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center" onClick={() => setModalSrc(null)}>
            <div className="bg-black p-4 rounded-md max-w-[90%] w-[70%]">
              <img src={modalSrc} alt="cert" className="w-full h-auto" />
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Certifications;