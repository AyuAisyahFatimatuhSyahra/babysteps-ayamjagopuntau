import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";
import babyce from "../assets/babyce.png";
import babyco from "../assets/babyco.png";

export default function AgeGuides({ onNavigate, onLogin }) {
  const guides = [
    {
      age: "Baru Lahir",
      title: "Panduan 0 Bulan",
      desc: "Pelajari dasar-dasar menyusui, tidur, dan perawatan bayi baru lahir.",
      image: babyco
    },
    {
      age: "1-3 Bulan",
      title: "Panduan Perkembangan Awal",
      desc: "Pahami pola tidur, pertumbuhan, dan rutinitas harian.",
      image: babyco
    },
    {
      age: "4-6 Bulan",
      title: "Pertumbuhan & Tonggak",
      desc: "Dukung perkembangan fisik dan kognitif bayi Anda.",
      image: babyce
    },
    {
      age: "7-12 Bulan",
      title: "Menjelajahi Dunia",
      desc: "Pandu bayi melalui gerakan, makanan, dan pembelajaran.",
      image: babyco
    }
  ];

  // Warna latar belakang untuk setiap lingkaran
  const bgColors = ["#FFF78A", "#D6C7FF", "#BADAFF", "#FDE63F"];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800">
      <Navbar onNavigate={onNavigate} onLogin={onLogin} />

      <section className="py-24 text-center bg-[#F0F8FF]">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-black text-slate-900">
            Panduan Tumbuh & Kembang Bayi
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Panduan terpercaya untuk setiap tahap, dari bayi baru lahir hingga balita.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {[
            "Semua Usia",
            "Baru Lahir",
            "1-3 Bulan",
            "4-6 Bulan",
            "7-12 Bulan"
          ].map((item, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-full border border-slate-200 bg-white font-semibold text-sm hover:bg-[#BADAFF] hover:border-[#609EF5] transition"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {guides.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-[#609EF5] transition flex flex-col"
            >
              {/* Lingkaran gambar dengan warna latar bergantian */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 overflow-hidden"
                style={{ backgroundColor: bgColors[index % bgColors.length] }}
              >
                <img
                  src={item.image}
                  alt={`Bayi ${item.age}`}
                  className="w-55 h-55 object-contain"
                />
              </div>

              <span className="text-xs font-bold text-[#609EF5] uppercase tracking-wide">
                {item.age}
              </span>

              <h3 className="mt-3 text-xl font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                {item.desc}
              </p>

              <button className="mt-5 text-[#609EF5] font-bold text-sm flex items-center gap-1">
                Baca Panduan <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-black text-slate-900">
          Pahami Bayi Anda Lebih Baik
        </h2>
        <p className="mt-3 text-slate-600">
          Dapatkan wawasan personal dengan BabySteps.
        </p>
        <button
          onClick={onLogin}
          className="mt-8 bg-[#609EF5] text-white font-bold px-8 py-3 rounded-full hover:bg-blue-600 transition"
        >
          Coba BabySteps Gratis
        </button>
      </section>

      <Footer />
    </div>
  );
}