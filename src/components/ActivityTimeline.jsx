import React from 'react';
import { Clock } from 'lucide-react';

export default function ActivityTimeline() {
  const logs = [
    { time: '08:30', title: 'Minum ASI 150ml', detail: 'Dari Payudara Kiri', color: 'bg-[#609EF5]' },
    { time: '07:15', title: 'Ganti Diaper', detail: 'BAK & BAB Normal', color: 'bg-[#FFF78A]' },
    { time: '06:00', title: 'Bangun Tidur Pagi', detail: 'Kondisi ceria & segar', color: 'bg-[#D6C7FF]' },
    { time: '00:30', title: 'Minum ASI Malam 120ml', detail: 'Susu Formula / Botol', color: 'bg-[#FDE63F]' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#609EF5]" /> Riwayat Aktivitas
        </h3>
        <span className="text-xs font-bold text-[#609EF5] cursor-pointer hover:underline">Lihat Semua</span>
      </div>

      <div className="space-y-3">
        {logs.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${item.color} shadow-sm`}></span>
              <div>
                <div className="font-bold text-slate-900">{item.title}</div>
                <div className="text-[10px] text-slate-400">{item.detail}</div>
              </div>
            </div>
            <span className="font-bold text-slate-500">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}