import React from 'react';
import { Plus, Milk, Moon, Baby, Bot } from 'lucide-react';

export default function QuickActionCard() {
  const actions = [
    { label: '+ Catat Menyusui', bg: 'bg-[#609EF5] hover:bg-blue-600 text-white', icon: Milk },
    { label: '+ Catat Tidur', bg: 'bg-[#D6C7FF] hover:bg-purple-300 text-slate-900', icon: Moon },
    { label: '+ Catat Pop/Diaper', bg: 'bg-[#FFF78A] hover:bg-yellow-300 text-slate-900', icon: Baby },
    { label: 'Tanya AI Assistant', bg: 'bg-[#FDE63F] hover:bg-yellow-400 text-slate-900', icon: Bot },
  ];

  return (
    <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3">
      <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Aksi Cepat Harian</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <button key={idx} className={`${act.bg} font-bold text-xs py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer transform active:scale-95`}>
              <Icon className="w-4 h-4" />
              <span>{act.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}