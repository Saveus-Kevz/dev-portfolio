import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main className="flex flex-col items-center w-full mx-auto pb-24">
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  );
}