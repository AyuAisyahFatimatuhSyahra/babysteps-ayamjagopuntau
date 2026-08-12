import React from 'react';
import { Droplets, Moon, Activity, Smile } from 'lucide-react';

export default function WellnessCard() {
  const metrics = [
    {
      title: 'Asupan ASI Hari Ini',
      value: '550 ml',
      sub: 'Target: 600 ml',
      icon: Droplets,
      bg: 'bg-[#FFF78A]/50',
      border: 'border-[#FFF78A]',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Tidur Malam',
      value: '10.5 Jam',
      sub: 'Tidur berkualitas',
      icon: Moon,
      bg: 'bg-[#D6C7FF]/40',
      border: 'border-[#D6C7FF]',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Pop & Diaper',
      value: '3 Kali',
      sub: 'Warna & tekstur normal',
      icon: Activity,
      bg: 'bg-[#BADAFF]/40',
      border: 'border-[#BADAFF]',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Mood Si Kecil',
      value: 'Ceria ✨',
      sub: 'Aktif merespons suara',
      icon: Smile,
      bg: 'bg-[#FDE63F]/40',
      border: 'border-[#FDE63F]',
      iconColor: 'text-amber-700'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className={`${item.bg} border-2 ${item.border} p-5 rounded-3xl space-y-2 transition-transform hover:-translate-y-1`}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-700">{item.title}</span>
              <Icon className={`w-4 h-4 ${item.iconColor}`} />
            </div>
            <div className="text-2xl font-black text-slate-900">{item.value}</div>
            <div className="text-[11px] text-slate-600 font-medium">{item.sub}</div>
          </div>
        );
      })}
    </div>
  );
}