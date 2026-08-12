import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import { 
  Sparkles, TrendingUp, Stethoscope, Users, Bot, 
  ChevronRight, ArrowRight, Heart, ShieldCheck, 
  Lightbulb, Moon, Milk, PlayCircle
} from 'lucide-react';

export default function Dashboard({ onLogout, onNavigateToFeature }) {
  const [activeTab, setActiveTab] = useState('tips');

  const handleGoTo = (feature) => {
    if (onNavigateToFeature) onNavigateToFeature(feature);
    else alert(`Buka Fitur: ${feature}`);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] font-sans text-slate-800 pb-16">
     <DashboardNavbar

onNavigate={onNavigateToFeature}

onLogout={onLogout}

/>

      <main className="max-w-[1100px] mx-auto px-4 lg:px-8 pt-6 space-y-8">
        
        {/* ================= 1. HEADER RINGKAS ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF78A] flex items-center justify-center text-2xl shadow-xs">
              👶
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-slate-900">Halo, Mama Ayu!</h1>
                <span className="bg-[#BADAFF] text-slate-800 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                  Arka • 3 Bulan
                </span>
              </div>
              <p className="text-xs text-slate-500 font-bold mt-0.5">
                Status Hari Ini: <span className="text-emerald-600 font-black">Sangat Baik (92%) ✨</span>
              </p>
            </div>
          </div>

          <button 
            onClick={() => handleGoTo('health')}
            className="bg-[#FDE63F] hover:bg-yellow-400 font-extrabold text-xs px-4 py-2.5 rounded-2xl flex items-center gap-2 cursor-pointer shadow-xs transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Digital Medical Resume</span>
          </button>
        </div>

        {/* ================= 2. 4 MODUL FITUR UTAMA (VISUAL CARDS) ================= */}
        <div>
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-3 ml-1">Layanan Utama</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Smart Tracking */}
            <div 
              onClick={() => handleGoTo('tracking')}
              className="bg-[#BADAFF]/40 hover:bg-[#BADAFF]/70 border-2 border-[#BADAFF] p-5 rounded-3xl transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-2xl bg-white text-[#609EF5] flex items-center justify-center shadow-xs">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm group-hover:text-[#609EF5] transition-colors">
                  Smart Tracking
                </h3>
                <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                  Grafik WHO & Nutrisi
                </p>
              </div>
              <div className="flex items-center text-[11px] font-extrabold text-[#609EF5]">
                <span>Buka</span> <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: AI Assistant */}
            <div 
              onClick={() => handleGoTo('ai')}
              className="bg-[#D6C7FF]/40 hover:bg-[#D6C7FF]/70 border-2 border-[#D6C7FF] p-5 rounded-3xl transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-2xl bg-white text-purple-600 flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm group-hover:text-purple-600 transition-colors">
                  AI Assistant
                </h3>
                <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                  Deteksi Pup & Tangisan
                </p>
              </div>
              <div className="flex items-center text-[11px] font-extrabold text-purple-600">
                <span>Tanya AI</span> <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Health Support */}
            <div 
              onClick={() => handleGoTo('health')}
              className="bg-[#FFF78A]/50 hover:bg-[#FFF78A]/80 border-2 border-[#FFF78A] p-5 rounded-3xl transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-2xl bg-white text-amber-600 flex items-center justify-center shadow-xs">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm group-hover:text-amber-700 transition-colors">
                  Health Support
                </h3>
                <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                  Konsultasi Dokter
                </p>
              </div>
              <div className="flex items-center text-[11px] font-extrabold text-amber-700">
                <span>Hubungi</span> <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Family Sync */}
            <div 
              onClick={() => handleGoTo('family')}
              className="bg-white hover:bg-slate-50 border-2 border-slate-200 p-5 rounded-3xl transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#F0F4FA] text-slate-700 flex items-center justify-center shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm group-hover:text-[#609EF5] transition-colors">
                  Family Sync
                </h3>
                <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                  Akses Papa & Caregiver
                </p>
              </div>
              <div className="flex items-center text-[11px] font-extrabold text-slate-600">
                <span>Kelola</span> <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>

        {/* ================= 3. EXPERT TIPS & MINIPLANS (HUCKLEBERRY STYLE) ================= */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          
          {/* Header & Tabs */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#FDE63F] fill-[#FDE63F]" />
              <h2 className="text-base font-black text-slate-900">Tips & Miniplans Hari Ini</h2>
            </div>

            <div className="flex bg-[#F0F4FA] p-1 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveTab('tips')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'tips' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400'
                }`}
              >
                Tips
              </button>
              <button
                onClick={() => setActiveTab('miniplans')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'miniplans' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400'
                }`}
              >
                Miniplans
              </button>
            </div>
          </div>

          {/* TAB CONTENT 1: VISUAL STEP CARD (TIPS) */}
          {activeTab === 'tips' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Visual Card 1: Transport Response */}
              <div className="bg-[#BADAFF]/20 border-2 border-[#BADAFF] p-6 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-[#609EF5] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    TIDUR & REWEL
                  </span>
                  <span className="text-xs font-extrabold text-slate-400">2/2</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 text-center py-1">
                  Cara Pakai <span className="text-[#609EF5]">"Transport Response"</span>
                </h3>

                {/* Step Visual List */}
                <div className="space-y-2">
                  <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 flex items-center gap-3 font-bold text-xs text-slate-700 shadow-xs">
                    <span className="text-lg">🤱</span> Peluk erat si kecil di dada
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 flex items-center gap-3 font-bold text-xs text-slate-700 shadow-xs">
                    <span className="text-lg">🚶‍♂️</span> Jalan santai selama 5 menit
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 flex items-center gap-3 font-bold text-xs text-slate-700 shadow-xs">
                    <span className="text-lg">🪑</span> Duduk tenang selama 8 menit
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 flex items-center gap-3 font-bold text-xs text-slate-700 shadow-xs">
                    <span className="text-lg">🛏️</span> Pindahkan perlahan ke kasur
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button className="text-xs font-extrabold text-[#609EF5] hover:underline inline-flex items-center gap-1">
                    Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Visual Card 2: Article Card with Image Cover */}
              <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop" 
                    alt="Baby Sleeping" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full">
                    3 BULAN
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-black text-slate-900 text-base leading-snug">
                    Jadwal Tidur Siang & Malam Bayi Usia 3 Bulan
                  </h3>
                  <p className="text-xs text-slate-500 font-medium line-clamp-2">
                    Panduan durasi tidur ideal dan penanganan jam biologis si kecil dari Dr. Amber LoRe.
                  </p>
                </div>

                <div className="px-5 pb-5 pt-1 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400">Oleh Dr. Amber LoRe</span>
                  <button className="text-xs font-black text-[#609EF5] flex items-center gap-1">
                    Lihat Chart <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT 2: MINIPLANS */}
          {activeTab === 'miniplans' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-[#D6C7FF]/30 border-2 border-[#D6C7FF] p-5 rounded-3xl space-y-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center font-black text-xs">
                  01
                </div>
                <h4 className="font-black text-slate-900 text-sm">Rutinitas Tidur Nyenyak</h4>
                <p className="text-xs text-slate-500 font-medium">Program 3 hari membentuk pola tidur malam teratur.</p>
                <button className="text-xs font-extrabold text-purple-700 hover:underline pt-2">Mulai Plan →</button>
              </div>

              <div className="bg-[#FFF78A]/40 border-2 border-[#FFF78A] p-5 rounded-3xl space-y-3">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xs">
                  02
                </div>
                <h4 className="font-black text-slate-900 text-sm">Stimulasi Tummy Time</h4>
                <p className="text-xs text-slate-500 font-medium">Latihan 5 menit sehari penguat otot leher si kecil.</p>
                <button className="text-xs font-extrabold text-amber-800 hover:underline pt-2">Mulai Plan →</button>
              </div>

              <div className="bg-[#BADAFF]/30 border-2 border-[#BADAFF] p-5 rounded-3xl space-y-3">
                <div className="w-8 h-8 rounded-xl bg-[#609EF5] text-white flex items-center justify-center font-black text-xs">
                  03
                </div>
                <h4 className="font-black text-slate-900 text-sm">Pijat Perut Anti-Kembung</h4>
                <p className="text-xs text-slate-500 font-medium">Teknik pijat ILU relaksasi sesudah mandi pagi.</p>
                <button className="text-xs font-extrabold text-[#609EF5] hover:underline pt-2">Mulai Plan →</button>
              </div>

            </div>
          )}

        </div>

      </main>
    </div>
  );
}