import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import {
  Search,
  ArrowRight,
  Droplet,
  Moon,
  TrendingUp,
  Heart,
  Milk,
  Sparkles
} from "lucide-react";

export default function Articles({ onNavigate, onLogin }) {
  const articles = [
    {
      title: "Berapa Banyak ASI yang Dibutuhkan Bayi Saya?",
      category: "Nutrisi",
      desc: "Pahami kebutuhan asupan susu harian berdasarkan tahap pertumbuhan bayi."
    },
    {
      title: "Pola Tidur Bayi Berdasarkan Usia",
      category: "Tidur",
      desc: "Pelajari rutinitas tidur sehat dan perubahan umum seiring perkembangan."
    },
    {
      title: "Tanda Bayi Tumbuh dengan Baik",
      category: "Pertumbuhan",
      desc: "Temukan tonggak penting dan sinyal perkembangan bayi yang sehat."
    },
    {
      title: "Memahami Pola Tangisan Bayi",
      category: "Pola Asuh",
      desc: "Pelajari cara mengenali berbagai sinyal bayi dan merespons dengan percaya diri."
    },
    {
      title: "Panduan Penyimpanan ASI",
      category: "Menyusui",
      desc: "Panduan sederhana untuk menyimpan dan mengelola ASI dengan aman."
    },
    {
      title: "Cek Perkembangan Bayi",
      category: "Perkembangan",
      desc: "Lacak keterampilan penting yang berkembang setiap bulan pada bayi Anda."
    }
  ];

  // Pemetaan kategori ke ikon dan warna
  const categoryMap = {
    Nutrisi: { icon: Droplet, bg: "bg-blue-100", color: "text-blue-600" },
    Tidur: { icon: Moon, bg: "bg-purple-100", color: "text-purple-600" },
    Pertumbuhan: { icon: TrendingUp, bg: "bg-green-100", color: "text-green-600" },
    "Pola Asuh": { icon: Heart, bg: "bg-rose-100", color: "text-rose-600" },
    Menyusui: { icon: Milk, bg: "bg-amber-100", color: "text-amber-600" },
    Perkembangan: { icon: Sparkles, bg: "bg-indigo-100", color: "text-indigo-600" }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800">
      <Navbar onNavigate={onNavigate} onLogin={onLogin} />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-black text-slate-900">Artikel BabySteps</h1>
          <p className="mt-4 text-slate-600 text-lg">
            Panduan parenting ahli untuk membantu Anda memahami kebutuhan bayi.
          </p>

          <div className="mt-10 max-w-2xl mx-auto flex items-center bg-white border rounded-full px-5 py-3">
            <Search className="text-slate-400" />
            <input
              placeholder="Cari artikel parenting..."
              className="ml-3 w-full outline-none text-sm"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Panduan Parenting Terbaru"
            desc="Informasi bermanfaat untuk setiap tahap perjalanan bayi Anda."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {articles.map((item, i) => {
              const { icon: Icon, bg, color } = categoryMap[item.category] || {};
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  {/* Baris ikon + kategori */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-full ${bg} ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="bg-[#BADAFF] px-3 py-1 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-black text-xl mt-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-3 flex-1">{item.desc}</p>

                  <button className="mt-5 flex items-center gap-2 text-[#609EF5] font-bold text-sm">
                    Baca Selengkapnya
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}