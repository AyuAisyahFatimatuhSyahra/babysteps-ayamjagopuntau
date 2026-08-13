import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Search,
  ArrowRight,
  Sparkles,
  LayoutDashboard,
  UserCircle,
  HelpCircle
} from "lucide-react";

export default function HelpCenter({ onNavigate, onLogin }) {
  const categories = [
    {
      title: "Keanggotaan BabySteps",
      desc: "Pelajari tentang paket langganan, peningkatan, dan manfaat keanggotaan."
    },
    {
      title: "Fitur Aplikasi",
      desc: "Temukan panduan tentang pelacakan bayi, wawasan AI, dan alat parenting."
    },
    {
      title: "Akun & Profil Bayi",
      desc: "Kelola akun, profil bayi, dan informasi pribadi Anda."
    },
    {
      title: "Pertanyaan Umum",
      desc: "Temukan jawaban tentang penggunaan BabySteps dan masalah umum."
    }
  ];

  // Pemetaan kategori ke ikon dan warna latar belakang
  const categoryMap = {
    "Keanggotaan BabySteps": {
      icon: Sparkles,
      bg: "bg-amber-100",
      color: "text-amber-600"
    },
    "Fitur Aplikasi": {
      icon: LayoutDashboard,
      bg: "bg-blue-100",
      color: "text-blue-600"
    },
    "Akun & Profil Bayi": {
      icon: UserCircle,
      bg: "bg-purple-100",
      color: "text-purple-600"
    },
    "Pertanyaan Umum": {
      icon: HelpCircle,
      bg: "bg-rose-100",
      color: "text-rose-600"
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800">
      <Navbar onNavigate={onNavigate} onLogin={onLogin} />

      {/* HERO */}
      <section className="py-24 text-center bg-[#F0F8FF]">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-black text-slate-900">
            Ada yang bisa kami bantu?
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Temukan jawaban tentang fitur BabySteps, akun, dan alat parenting.
          </p>

          <div className="mt-10 max-w-2xl mx-auto bg-white border border-slate-200 rounded-full flex items-center px-5 py-3">
            <Search className="text-slate-400" />
            <input
              placeholder="Cari artikel bantuan..."
              className="ml-3 w-full outline-none text-sm"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {categories.map((item, index) => {
            const { icon: Icon, bg, color } = categoryMap[item.title] || {};
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-md hover:border-[#609EF5] transition flex flex-col"
              >
                {/* Ikon + judul */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-full ${bg} ${color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-xl text-slate-900">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-1 text-sm text-slate-500 leading-relaxed flex-1">
                  {item.desc}
                </p>

                <button className="mt-5 flex items-center gap-2 text-[#609EF5] font-bold text-sm">
                  Jelajahi
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900">
            Pertanyaan Umum - Aplikasi BabySteps
          </h2>
          <p className="mt-4 text-slate-600">
            Tidak menemukan jawaban? Hubungi tim dukungan kami.
          </p>
          <button
            onClick={onLogin}
            className="mt-8 bg-[#609EF5] text-white font-bold px-7 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Hubungi Dukungan
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}