import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";

import {
  HeartPulse,
  PhoneCall,
  FileText,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Lock,
  Download,
  Send,
  Clock,
  UserCheck,
  Stethoscope,
  Zap,
  AlertCircle,
  ArrowRight,
  Bot,
  Activity,
  Calendar,
  Check,
  MessageSquare
} from "lucide-react";

export default function HealthSupport({ onNavigate, onLogout }) {
  // Toggle State untuk Demo (Gratis vs Care+ Aktif)
  const [isCarePlus, setIsCarePlus] = useState(false);

  // Accordion State untuk "Kapan Mama perlu bantuan?"
  const [openAccordion, setOpenAccordion] = useState("demam");

  // AI Assistant Input State
  const [assistantInput, setAssistantInput] = useState("");
  const [aiChatLogs, setAiChatLogs] = useState([]);

  // Handler Kirim Pesan ke AI Assistant
  const handleSendAi = (e) => {
    e.preventDefault();
    if (!assistantInput.trim()) return;
    setAiChatLogs((prev) => [
      ...prev,
      { sender: "user", text: assistantInput },
      {
        sender: "ai",
        text: "Kondisi Arka terpantau stabil. Jika demam > 38.5°C lebih dari 2 hari, segera konsultasikan dengan dr. Nabila via Care+."
      }
    ]);
    setAssistantInput("");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Poppins',sans-serif] text-slate-800 pb-12">
      {/* NAVBAR */}
      <DashboardNavbar onNavigate={onNavigate} onLogout={onLogout} />

      {/* DEMO MODE TOGGLE BAR (Memudahkan Test Tampilan Free vs Care+) */}
      <div className="bg-slate-900 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-3 shadow-inner">
        <span className="text-slate-300">Mode Tampilan:</span>
        <div className="inline-flex bg-slate-800 p-1 rounded-full border border-slate-700">
          <button
            onClick={() => setIsCarePlus(false)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              !isCarePlus ? "bg-[#609EF5] text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Versi Gratis (Basic)
          </button>
          <button
            onClick={() => setIsCarePlus(true)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              isCarePlus ? "bg-[#FDE047] text-slate-900 shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Care+ Aktif ⭐
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 space-y-6 sm:space-y-8">
        
        {/* ==========================================
            BREADCRUMB & HEADER BADGE
        ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={() => onNavigate("dashboard")} className="hover:text-[#609EF5]">Home</button>
            <span>/</span>
            <span className="font-bold text-[#609EF5]">Health Support</span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {isCarePlus && (
              <span className="bg-[#FEF08A] text-amber-900 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-yellow-300">
                ★ Care+ Aktif
              </span>
            )}
            <div className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Arka • 3 bulan • 6.2 kg
            </div>
          </div>
        </div>


        {/* ==========================================
            HERO BANNER (Adaptive: Free vs Care+)
        ========================================== */}
        {!isCarePlus ? (
          // HERO STANDARD (FREE)
          <section className="bg-gradient-to-br from-[#FAF5FF] via-[#F4F0FF] to-[#EDF4FF] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-purple-100 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              <div className="md:col-span-7 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md text-purple-700 px-3 py-1 rounded-full text-[11px] font-bold border border-purple-100">
                  <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>BabySteps Care+ • Perlindungan tambahan untuk Arka</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                  Tenang, Mama.<br />Kami siap membantu Arka.
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                  Ketika Mama merasa khawatir, BabySteps membantu menemukan langkah berikutnya dengan tenang.
                </p>
              </div>
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="relative w-48 sm:w-56 lg:w-64">
                  <img
                    src="https://img.freepik.com/free-vector/pediatrician-concept-illustration_114360-7888.jpg"
                    alt="Dokter dan Bayi"
                    className="w-full h-auto object-contain rounded-2xl mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </section>
        ) : (
          // HERO CARE+ ACTIVE (PREMIUM)
          <section className="bg-[#FEF9C3] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-yellow-200 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              <div className="md:col-span-7 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-yellow-300 text-slate-900 px-3.5 py-1 rounded-full text-[11px] font-black">
                  ★ BabySteps Care+ Aktif • Bantuan Medis Prioritas
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                  Tenang, Mama.<br />Bantuan siap kapan saja.
                </h1>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg">
                  Sebagai anggota Care+, Mama mendapat akses penuh ke konsultasi dokter, resume medis lengkap, dan dukungan prioritas.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button className="bg-[#609EF5] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition shadow-md flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" /> Mulai Konsultasi
                  </button>
                  <button className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-200 transition shadow-xs flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#609EF5]" /> Buat Resume
                  </button>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <img
                  src="https://img.freepik.com/free-vector/pediatrician-concept-illustration_114360-7888.jpg"
                  alt="Care+ Doctor"
                  className="w-48 sm:w-56 lg:w-64 h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </section>
        )}


        {/* ==========================================
            STATUS KESEHATAN / WELLNESS SUMMARY
        ========================================== */}
        {!isCarePlus ? (
          // Free Mode: 2 Column Box
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Box Left */}
            <div className="bg-[#EFF6FF] rounded-[24px] p-5 sm:p-6 border border-blue-100 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Activity className="w-4 h-4 text-[#609EF5]" /> Kondisi Arka
                </div>
                <div className="mt-3 flex items-center gap-2 text-emerald-600 font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 shrink-0" /> Arka terbilang stabil
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  BabySteps membantu Mama memahami perubahan kecil sebelum mengambil keputusan.
                </p>
                
                <div className="mt-4 pt-4 border-t border-blue-200/60 space-y-2">
                  <p className="text-[10px] font-black tracking-wider uppercase text-slate-400">PANTAUAN KESEHATAN</p>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Health guidance</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Tanda yang perlu diperhatikan</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500" /> Catatan kesehatan sederhana</li>
                  </ul>
                </div>
              </div>
              <button className="w-full bg-white hover:bg-blue-50 text-[#609EF5] font-bold text-xs py-3 rounded-xl border border-blue-200 transition text-center shadow-2xs">
                Lihat Panduan
              </button>
            </div>

            {/* Box Right */}
            <div className="bg-[#FEF9C3] rounded-[24px] p-5 sm:p-6 border border-yellow-200 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Stethoscope className="w-4 h-4 text-amber-700" /> Hubungi Dokter Langsung
                </div>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                  Dapatkan bantuan tenaga medis tanpa harus menjelaskan kondisi Arka dari awal.
                </p>
                <ul className="text-xs text-slate-800 space-y-2 mt-4 font-semibold">
                  <li className="flex items-center gap-2"><span className="text-amber-500">★</span> Konsultasi dokter anak</li>
                  <li className="flex items-center gap-2"><span className="text-amber-500">★</span> Ringkasan kondisi otomatis</li>
                  <li className="flex items-center gap-2"><span className="text-amber-500">★</span> Prioritas antrean</li>
                </ul>
              </div>
              <button onClick={() => setIsCarePlus(true)} className="w-full bg-[#D6C7FF] hover:bg-purple-300 text-purple-950 font-black text-xs py-3.5 rounded-xl transition text-center shadow-xs">
                Upgrade BabySteps Care+
              </button>
            </div>
          </div>
        ) : (
          // Care+ Active Mode: Blue Wellness Dashboard Banner
          <div className="bg-[#609EF5] rounded-[28px] p-5 sm:p-7 text-white shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-slate-900 flex items-center justify-center font-black text-xl sm:text-2xl border-4 border-yellow-300 shadow-inner">
                    92%
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black">Arka dalam kondisi sangat baik</h3>
                  <p className="text-xs text-blue-100 mt-0.5">Dipantau Care+ • Pertumbuhan, hidrasi, tidur, dan feeding semua normal.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">✓ Growth</span>
                    <span className="bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">✓ Hidrasi</span>
                    <span className="bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">✓ Tidur</span>
                    <span className="bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">✓ Feeding</span>
                  </div>
                </div>
              </div>
              <span className="self-start md:self-auto bg-emerald-400 text-emerald-950 text-[11px] font-black px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-900 animate-ping" /> Live Monitoring
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/20">
              <div className="bg-white text-slate-800 rounded-xl p-3 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Status</p>
                <p className="text-xs sm:text-sm font-black text-emerald-600 mt-0.5">Stabil</p>
              </div>
              <div className="bg-white text-slate-800 rounded-xl p-3 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Dokter</p>
                <p className="text-xs sm:text-sm font-black text-blue-600 mt-0.5">Siap</p>
              </div>
              <div className="bg-white text-slate-800 rounded-xl p-3 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Resume</p>
                <p className="text-xs sm:text-sm font-black text-purple-600 mt-0.5">Terbaru</p>
              </div>
              <div className="bg-white text-slate-800 rounded-xl p-3 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Antrean</p>
                <p className="text-xs sm:text-sm font-black text-amber-600 mt-0.5">Prioritas</p>
              </div>
            </div>
          </div>
        )}


        {/* ==========================================
            HUBUNGKAN ARKA DENGAN DOKTER (Step Workflow)
        ========================================== */}
        <section className="bg-gradient-to-br from-[#FFF5F5] via-[#FFF9E6] to-[#F3E8FF] rounded-[28px] p-5 sm:p-8 border border-rose-100 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="bg-rose-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                BabySteps Care+
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 mt-2">Hubungkan Arka dengan Dokter</h2>
              <p className="text-xs text-slate-600 mt-1">Saat Mama membutuhkan kepastian, konsultasi langsung tersedia.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#FF6B6B] hover:bg-rose-600 text-white font-bold text-xs px-5 py-3 rounded-full transition shadow-sm flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" /> Mulai Konsultasi
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs px-4 py-3 rounded-full border border-slate-200 transition">
                Lihat Paket Care+
              </button>
            </div>
          </div>

          {/* Workflow Steps Horizontal/Responsive */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative">
            <WorkflowStep icon={<Activity className="w-4 h-4 text-blue-600" />} label="BabySteps Monitoring" bg="bg-blue-100" active />
            <WorkflowStep icon={<Zap className="w-4 h-4 text-amber-600" />} label="Health Check-up" bg="bg-amber-100" active />
            <WorkflowStep icon={<FileText className="w-4 h-4 text-purple-600" />} label="Medical Resume" bg="bg-purple-100" active />
            <WorkflowStep icon={<Stethoscope className="w-4 h-4 text-rose-600" />} label="Dokter Konsultasi" bg="bg-rose-100" active />
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Konsultasi dokter anak cepat</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ringkasan kondisi otomatis</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Data 3 hari langsung terintegrasi</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tidak perlu menjelaskan berulang</div>
          </div>
        </section>


        {/* ==========================================
            RINGKASAN MEDIS OTOMATIS (MEDICAL RESUME)
        ========================================== */}
        <section className={`rounded-[28px] p-5 sm:p-8 transition-all shadow-xs ${isCarePlus ? "bg-[#DBEAFE] border border-blue-200" : "bg-white border border-slate-200"}`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Card Preview Graphic Left */}
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 w-full max-w-xs relative overflow-hidden">
                <div className="bg-[#609EF5] -mx-4 -mt-4 p-3 text-white text-center rounded-t-2xl font-bold text-xs flex items-center justify-between px-4">
                  <span>FULL MEDICAL RESUME</span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">BabySteps</span>
                </div>
                
                <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between font-bold text-slate-800 pb-2 border-b">
                    <span>Nama: Arka</span>
                    <span>Usia: 3 Bulan</span>
                  </div>

                  {!isCarePlus ? (
                    // Locked Overlay Blur
                    <div className="relative py-6 flex flex-col items-center justify-center text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center">
                        <Lock className="w-5 h-5" />
                      </div>
                      <p className="font-extrabold text-xs text-slate-800">Full 3-Day Medical Resume Locked</p>
                      <p className="text-[10px] text-slate-400">Upgrade ke Care+ untuk membuka riwayat medis lengkap</p>
                    </div>
                  ) : (
                    // Unlocked Real Data
                    <div className="space-y-2 py-1 text-[11px]">
                      <div className="flex justify-between bg-slate-50 p-2 rounded">
                        <span>Feeding avg:</span> <span className="font-bold text-slate-800">537 ml / hari</span>
                      </div>
                      <div className="flex justify-between bg-slate-50 p-2 rounded">
                        <span>Tidur avg:</span> <span className="font-bold text-slate-800">11.5 jam / hari</span>
                      </div>
                      <div className="flex justify-between bg-slate-50 p-2 rounded">
                        <span>Suhu badan:</span> <span className="font-bold text-emerald-600">36.7°C - Normal</span>
                      </div>
                      <div className="flex justify-between bg-slate-50 p-2 rounded">
                        <span>Catatan Dokter:</span> <span className="font-bold text-blue-600">Siap dikirim</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Resume Description Right */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-900">Ringkasan Medis Otomatis</h3>
                {isCarePlus && <span className="bg-amber-300 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">Care+</span>}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Siapkan data Arka sebelum bertemu dokter tanpa repot mencatat ulang dari awal.
              </p>

              {!isCarePlus ? (
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-700">VERSI GRATIS:</div>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Profil bayi</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Catatan kondisi hari ini</li>
                  </ul>

                  <div className="text-xs font-bold text-amber-800 pt-2">UNLOCK CARE+ UNTUK MENDAPATKAN:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-amber-500" /> Riwayat feeding 3 hari</div>
                    <div className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-amber-500" /> Auto tidur &amp; pampers</div>
                    <div className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-amber-500" /> Riwayat BAB/BAK</div>
                    <div className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-amber-500" /> Catatan suhu tubuh</div>
                  </div>

                  <button onClick={() => setIsCarePlus(true)} className="mt-3 bg-[#FDE047] hover:bg-yellow-400 text-slate-900 font-black text-xs px-6 py-3.5 rounded-full transition shadow-sm w-full sm:w-auto">
                    ★ Unlock Medical Resume
                  </button>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="bg-white/80 p-4 rounded-xl border border-blue-100 text-xs space-y-1.5">
                    <p className="flex justify-between"><span className="text-slate-500">Diperbarui:</span> <span className="font-bold">Hari ini - 14:30</span></p>
                    <p className="flex justify-between"><span className="text-slate-500">Periode:</span> <span className="font-bold">3 Hari terakhir</span></p>
                    <p className="flex justify-between"><span className="text-slate-500">Status Resume:</span> <span className="font-bold text-emerald-600">Siap Diterima Dokter</span></p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-[#609EF5] hover:bg-blue-600 text-white font-bold text-xs px-5 py-3 rounded-full flex items-center gap-2 transition shadow-xs">
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                    <button className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs px-5 py-3 rounded-full border border-slate-300 flex items-center gap-2 transition shadow-2xs">
                      <Send className="w-4 h-4 text-[#609EF5]" /> Kirim ke Dokter
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>


        {/* ==========================================
            BENEFIT GRID (4 CARDS)
        ========================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black text-slate-900">Apa yang Mama dapatkan dengan BabySteps Care+?</h2>
            <span className="bg-[#FEF08A] text-amber-900 text-[10px] font-black px-2.5 py-1 rounded-full">★ Premium</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <BenefitCard
              icon={<Zap className="w-5 h-5 text-amber-600" />}
              bg="bg-[#FFF9E6]"
              title="Fast Medical Access"
              desc="Terhubung dengan dokter ketika Mama membutuhkan bantuan."
            />
            <BenefitCard
              icon={<FileText className="w-5 h-5 text-blue-600" />}
              bg="bg-[#EFF6FF]"
              title="Smart Medical Resume"
              desc="Data tersusun otomatis dalam format yang mudah dipahami."
            />
            <BenefitCard
              icon={<ShieldCheck className="w-5 h-5 text-purple-600" />}
              bg="bg-[#F3E8FF]"
              title="Priority Support"
              desc="Mendapatkan bantuan cepat saat kondisi membutuhkan."
            />
            <BenefitCard
              icon={<HeartPulse className="w-5 h-5 text-emerald-600" />}
              bg="bg-[#E6F4EA]"
              title="Peace of Mind"
              desc="Lebih tenang karena tidak menghadapi kekhawatiran sendirian."
            />
          </div>
        </section>


        {/* ==========================================
            ACCORDION GUIDANCE & HISTORY (2 COLUMNS)
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: Accordion Kapan Mama perlu bantuan? */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-5 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">Kapan Mama perlu bantuan?</h2>
              <p className="text-xs text-slate-500">Panduan ringan untuk mengenali tanda perlu perhatian.</p>
            </div>

            <div className="space-y-2.5">
              <AccordionItem
                id="demam"
                title="Demam"
                icon="🌡️"
                isOpen={openAccordion === "demam"}
                onToggle={() => setOpenAccordion(openAccordion === "demam" ? null : "demam")}
              >
                Suhu tubuh tinggi atau terasa tidak biasa dibanding hari-hari sebelumnya. Anggota Care+ bisa langsung konsultasi dengan dokter.
                <div className="mt-3">
                  <button className="bg-[#609EF5] text-white text-[11px] font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition">
                    Konsultasi Sekarang
                  </button>
                </div>
              </AccordionItem>

              <AccordionItem
                id="minum"
                title="Sulit Minum"
                icon="🍼"
                isOpen={openAccordion === "minum"}
                onToggle={() => setOpenAccordion(openAccordion === "minum" ? null : "minum")}
              >
                Bayi menolak menyusu secara konstan atau asupan susu menurun drastis dalam 24 jam terakhir.
              </AccordionItem>

              <AccordionItem
                id="dehidrasi"
                title="Dehidrasi"
                icon="💧"
                isOpen={openAccordion === "dehidrasi"}
                onToggle={() => setOpenAccordion(openAccordion === "dehidrasi" ? null : "dehidrasi")}
              >
                Popok basah kurang dari 4 kali sehari, atau bayi terlihat sangat lemas dan tidak aktif.
              </AccordionItem>

              <AccordionItem
                id="perilaku"
                title="Perubahan Perilaku"
                icon="👶"
                isOpen={openAccordion === "perilaku"}
                onToggle={() => setOpenAccordion(openAccordion === "perilaku" ? null : "perilaku")}
              >
                Bayi rewel terus menerus tanpa sebab yang jelas atau sebaliknya terlalu mengantuk dan sulit dibangunkan.
              </AccordionItem>
            </div>
          </div>

          {/* RIGHT: Riwayat Bantuan / Activity Timeline */}
          <div className="lg:col-span-5 bg-white rounded-[28px] p-5 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">Riwayat Bantuan</h2>
              <p className="text-xs text-slate-500">Jurnal komunikasi kesehatan Arka.</p>
            </div>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-100 pt-2">
              <TimelineItem
                title="Konsultasi dengan dr. Nabila"
                time="Hari ini - 14:30"
                status="Selesai"
                color="bg-emerald-500"
              />
              <TimelineItem
                title="Resume Medis Dikirim"
                time="Hari ini - 12:05"
                status="Terkirim"
                color="bg-blue-500"
              />
              <TimelineItem
                title="Panduan Kesehatan Dibaca"
                time="Kemarin - 10:15"
                status="Dibaca"
                color="bg-amber-500"
              />
              <TimelineItem
                title="Data BB Diperbarui"
                time="27 Nov 2026 - 09:00"
                status="Diperbarui"
                color="bg-purple-500"
              />
            </div>
          </div>

        </div>


        {/* ==========================================
            BABYSTEPS AI ASSISTANT CARD
        ========================================== */}
        <section className="bg-[#E9D5FF] rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 border border-purple-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-purple-700 flex items-center justify-center shadow-xs">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-900">BabySteps Assistant</h3>
              <p className="text-xs text-purple-900 font-medium">Dukungan emosional &amp; informasi sebelum hubungi dokter</p>
            </div>
          </div>

          {/* AI Output Card List */}
          <div className="space-y-2.5">
            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-xs text-slate-700 font-medium shadow-2xs border border-purple-100">
              • Pola tidur Arka dalam 3 hari terakhir sangat konsisten — rata-rata 11.5 jam/hari, sesuai rekomendasi usia 3 bulan.
            </div>
            <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl text-xs text-slate-700 font-medium shadow-2xs border border-purple-100">
              • Intake feeding naik +50 ml dibanding minggu lalu. Ini tanda positif pertumbuhan yang baik.
            </div>

            {/* Render User Chat Dynamically */}
            {aiChatLogs.map((log, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl text-xs font-medium ${
                  log.sender === "user"
                    ? "bg-purple-700 text-white self-end ml-auto max-w-md"
                    : "bg-white text-slate-800 shadow-2xs border border-purple-100"
                }`}
              >
                {log.text}
              </div>
            ))}
          </div>

          {/* AI Question Form */}
          <form onSubmit={handleSendAi} className="pt-2 flex gap-2">
            <input
              type="text"
              placeholder="Tanya BabySteps Assistant mengenai kondisi Arka..."
              value={assistantInput}
              onChange={(e) => setAssistantInput(e.target.value)}
              className="flex-1 bg-white border border-purple-200 rounded-full px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-purple-400 font-medium"
            />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-full text-xs font-extrabold transition shrink-0 shadow-xs flex items-center gap-1.5"
            >
              <span>Tanya</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* =========================================================
   REUSABLE HELPER COMPONENTS
========================================================= */

function WorkflowStep({ icon, label, bg, active }) {
  return (
    <div className="bg-white/80 rounded-2xl p-3 text-center border border-slate-100 shadow-2xs flex flex-col items-center justify-center space-y-1.5">
      <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center`}>
        {icon}
      </div>
      <p className="text-[11px] font-bold text-slate-800 leading-tight">{label}</p>
    </div>
  );
}

function BenefitCard({ icon, bg, title, desc }) {
  return (
    <div className={`${bg} rounded-2xl p-4 sm:p-5 border border-slate-100/80 shadow-2xs space-y-2`}>
      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-2xs">
        {icon}
      </div>
      <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">{title}</h4>
      <p className="text-[11px] text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function AccordionItem({ id, title, icon, children, isOpen, onToggle }) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3.5 flex items-center justify-between text-left font-extrabold text-xs text-slate-800 hover:bg-slate-100/60 transition"
      >
        <div className="flex items-center gap-2.5">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}

function TimelineItem({ title, time, status, color }) {
  return (
    <div className="relative pl-7 text-xs">
      <div className={`absolute left-1.5 top-1 w-3 h-3 rounded-full ${color} ring-4 ring-white`} />
      <p className="font-extrabold text-slate-800">{title}</p>
      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
        <span>{time}</span>
        <span>•</span>
        <span className="font-bold text-slate-600">{status}</span>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}