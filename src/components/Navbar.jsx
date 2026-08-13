import React, { useState } from "react";
import logo from "../assets/babysteps.png";
import { Menu, X } from "lucide-react";

export default function Navbar({ onNavigate, onLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigasi biasa + tutup menu
  const handleNavigate = (page) => {
    onNavigate(page);
    closeMenu();
  };

  // Navigasi ke landing + set hash untuk scroll otomatis
  const handleNavigateWithHash = (targetHash) => {
    onNavigate("landing");
    // Setelah navigasi ke landing, kita set hash agar komponen landing
    // bisa mendeteksi dan scroll ke elemen target
    window.location.hash = targetHash;
    closeMenu();
  };

  return (
    <header className="
      bg-white/90
      backdrop-blur-md
      border-b
      border-slate-100
      sticky
      top-0
      z-50
    ">
      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
      ">
        {/* LOGO */}
        <button
          onClick={() => handleNavigate("landing")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo BabySteps"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* NAVIGASI DESKTOP */}
        <nav className="
          hidden
          md:flex
          items-center
          gap-8
          text-sm
          font-semibold
          text-slate-600
        ">
          <button
            onClick={() => handleNavigate("landing")}
            className="hover:text-[#609EF5] transition"
          >
            Beranda
          </button>

          {/* === PERUBAHAN DI SINI === */}
          <button
            onClick={() => handleNavigateWithHash("#challenges")}
            className="hover:text-[#609EF5] transition"
          >
            Tantangan Kami
          </button>

          <button
            onClick={() => handleNavigateWithHash("#features")}
            className="hover:text-[#609EF5] transition"
          >
            Fitur
          </button>

          <button
            onClick={() => handleNavigateWithHash("#pricing")}
            className="hover:text-[#609EF5] transition"
          >
            Harga
          </button>
          {/* ========================= */}

          <button
            onClick={() => handleNavigate("articles")}
            className="hover:text-[#609EF5] transition"
          >
            Artikel
          </button>

          <button
            onClick={() => handleNavigate("help")}
            className="hover:text-[#609EF5] transition"
          >
            Bantuan
          </button>

          <button
            onClick={() => handleNavigate("age-guides")}
            className="hover:text-[#609EF5] transition"
          >
            Panduan Usia
          </button>
        </nav>

        {/* CTA BUTTON + HAMBURGER */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLogin}
            className="
              hidden sm:inline-block
              bg-[#609EF5]
              hover:bg-blue-600
              text-white
              font-bold
              px-6
              py-2.5
              rounded-full
              shadow-md
              shadow-blue-200
              transition
              hover:scale-105
            "
          >
            Coba Gratis
          </button>

          {/* Tombol Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-600 hover:text-[#609EF5] transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="
          md:hidden
          bg-white
          border-t
          border-slate-100
          py-4
          px-6
          flex
          flex-col
          gap-4
          text-sm
          font-semibold
          text-slate-600
        ">
          <button
            onClick={() => handleNavigate("landing")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Beranda
          </button>

          {/* === PERUBAHAN DI SINI === */}
          <button
            onClick={() => handleNavigateWithHash("#challenges")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Tantangan Kami
          </button>

          <button
            onClick={() => handleNavigateWithHash("#features")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Fitur
          </button>

          <button
            onClick={() => handleNavigateWithHash("#pricing")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Harga
          </button>
          {/* ========================= */}

          <button
            onClick={() => handleNavigate("articles")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Artikel
          </button>

          <button
            onClick={() => handleNavigate("help")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Bantuan
          </button>

          <button
            onClick={() => handleNavigate("age-guides")}
            className="text-left hover:text-[#609EF5] transition"
          >
            Panduan Usia
          </button>

          <button
            onClick={onLogin}
            className="
              bg-[#609EF5]
              hover:bg-blue-600
              text-white
              font-bold
              px-6
              py-2.5
              rounded-full
              shadow-md
              shadow-blue-200
              transition
              text-center
              mt-2
            "
          >
            Coba Gratis
          </button>
        </div>
      )}
    </header>
  );
}