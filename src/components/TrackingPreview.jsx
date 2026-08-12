import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function TrackingPreview() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Progress Pemenuhan Nutrisi Hari Ini
        </h3>
        <span className="bg-[#BADAFF] text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full">92% Terpenuhi</span>
      </div>

      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5">
        <div className="bg-gradient-to-r from-[#609EF5] via-[#D6C7FF] to-[#FDE63F] h-full rounded-full w-[92%] transition-all duration-700"></div>
      </div>

      <div className="flex justify-between text-xs text-slate-500 font-medium pt-1">
        <span>Susu Pagi: 200ml</span>
        <span>Susu Siang: 180ml</span>
        <span>Susu Sore: 170ml</span>
      </div>
    </div>
  );
}