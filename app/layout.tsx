import React from "react";
import "../styles/globals.css";
import AnimatedBackgroundClient from "../components/AnimatedBackgroundClient";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#071023] text-white antialiased">
        <AnimatedBackgroundClient />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
