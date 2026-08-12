import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function BabySelector() {
  return (
    <div className="flex items-center space-x-3 bg-babysteps-cream border border-amber-200/60 px-3.5 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div className="w-8 h-8 rounded-full bg-babysteps-softBlue flex items-center justify-center font-bold text-babysteps-blue text-xs ring-2 ring-white">
        👶
      </div>
      <div className="text-left">
        <div className="flex items-center space-x-1">
          <span className="font-bold text-slate-800 text-xs">Arka</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>
        <span className="text-[10px] text-slate-500 font-medium block leading-none">
          3 bulan • 6.2 kg
        </span>
      </div>
    </div>
  );
}