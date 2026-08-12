import React from 'react';
import { Sparkles, Calendar, Heart } from 'lucide-react';

export default function HeroCard() {
  return (
    <div className="bg-gradient-to-r from-[#BADAFF]/60 via-[#D6C7FF]/40 to-[#FFF78A]/50 p-6 sm:p-8 rounded-[32px] border-2 border-blue-100/80 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="space-y-2 z-10">
        <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-300" />
          Selamat Pagi, Mama Ayu!
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
          Perkembangan <span className="bg-[#FFF78A] px-2 py-0.5 rounded-xl">Arka Hari Ini</span> Sangat Baik 🎉
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm font-medium">
          Usia: <span className="font-bold text-slate-800">3 Bulan 12 Hari</span> • Berat Terakhir: <span className="font-bold text-slate-800">6.2 kg</span>
        </p>
      </div>

      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white shadow-sm z-10 text-xs font-bold text-slate-700">
        <Calendar className="w-4 h-4 text-[#609EF5]" />
        <span>Sabtu, 8 Agustus 2026</span>
      </div>
    </div>
  );
}