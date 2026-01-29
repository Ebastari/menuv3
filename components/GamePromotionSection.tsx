
import React from 'react';

export const GamePromotionSection: React.FC = () => {
  // Array placeholder untuk 6 foto yang bisa diganti nanti
  const photos = [
  `${import.meta.env.BASE_URL}1.jpg`,
  `${import.meta.env.BASE_URL}2.jpg.jpeg`,
  `${import.meta.env.BASE_URL}3.jpg.jpeg`,
  `${import.meta.env.BASE_URL}4.jpg.jpeg`,
  `${import.meta.env.BASE_URL}5.jpg.jpeg`,
  `${import.meta.env.BASE_URL}6.jpg.jpeg`,
];


  const handlePlayGame = () => {
    // Link game yang bisa diganti sesuai keinginan user
    window.open('https://pokemonkey1.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="px-6 py-12 max-w-[1440px] mx-auto animate-fadeIn">
      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl rounded-[48px] p-8 md:p-12 border border-white/20 dark:border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-emerald-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-xl shadow-emerald-500/20">
              <i className="fas fa-gamepad"></i>
              Interactive Simulation
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-4">
              Mainkan  Game  Pokemonkey <br className="hidden md:block" />
              <span className="text-emerald-600">Game  Planing  Target 2026  Reklamasi</span>
            </h2>
            <p className="text-lg md:text-xl font-medium italic text-slate-500 dark:text-slate-400">
              “Pekerjaan serasa bermain tapi hasil bukan main-main”
            </p>
          </div>

          {/* 6 Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mb-12">
            {photos.map((src, idx) => (
              <div 
                key={idx} 
                className="aspect-video rounded-[24px] overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg group relative cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Gameplay Preview ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Preview Mode {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button 
            onClick={handlePlayGame}
            className="group relative flex items-center gap-4 px-12 py-6 bg-slate-900 dark:bg-emerald-600 text-white rounded-[32px] font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-105 active:scale-95 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <i className="fas fa-play-circle text-2xl group-hover:rotate-12 transition-transform"></i>
            <span>Mulai Bermain Sekarang</span>
          </button>
          
          <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-8">
            Optimized for Desktop & Tablet Experience
          </p>
        </div>
      </div>
    </section>
  );
};
