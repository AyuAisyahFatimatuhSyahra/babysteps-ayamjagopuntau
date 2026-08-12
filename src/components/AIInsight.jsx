import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AIInsight() {
  return (
    <div className="bg-[#D6C7FF]/30 border-2 border-[#D6C7FF] p-6 rounded-3xl space-y-4 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-[#609EF5] text-white p-2 rounded-xl text-xs font-black flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-white" /> AI Insight
          </span>
          <span className="text-xs font-bold text-slate-500">Pembaruan 10 Menit Lalu</span>
        </div>
        <h3 className="font-extrabold text-slate-900 text-lg">Pola Tidur Arka Membaik 😴</h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          Model AI mendeteksi Arka terbangun 1 kali lebih sedikit dibandingkan kemarin malam. Durasi tidur nyenyak meningkat sebesar 18%.
        </p>
        <div className="bg-white/80 p-3 rounded-2xl text-xs font-semibold text-slate-800 border border-white">
          💡 <span className="bg-[#FFF78A] px-1.5 py-0.5 rounded">Saran AI:</span> Pertahankan suhu kamar di 24°C untuk tidur malam nanti.
        </div>
      </div>

      <button className="bg-white hover:bg-slate-50 font-bold text-xs text-slate-900 py-3 px-4 rounded-full flex items-center justify-between shadow-sm cursor-pointer mt-2">
        Tanyakan Detail ke AI <ArrowRight className="w-4 h-4 text-[#609EF5]" />
      </button>
    </div>
  );
}