import React, { useState } from "react";
import logo from "../assets/babysteps.png";
import { LogOut, Menu, X } from "lucide-react";

export default function DashboardNavbar({
  onNavigate,
  onLogout
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menu = [
    {
      title: "Pemantauan",
      page: "tracking"
    },
    {
      title: "AI Baby",
      page: "ai",
    },
    {
      title: "Dokter",
      page: "health",
    },
    {
      title: "Keluarga",
      page: "family",
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <button
          onClick={() => handleNavigate("dashboard")}
          className="cursor-pointer flex-shrink-0"
        >
          <img
            src={logo}
            alt="BabySteps"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {menu.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(item.page)}
              className="text-sm font-bold text-slate-600 hover:text-[#609EF5] transition cursor-pointer"
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* DESKTOP USER & LOGOUT */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Profil */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate("profile")}
          >
            <img 
              src="https://i.pravatar.cc/150?img=5" 
              alt="Foto Profil Mama Ayu" 
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <span className="text-sm font-bold text-slate-700 hidden lg:block">
              Mama Ayu
            </span>
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-bold text-sm transition cursor-pointer"
          >
            <span className="hidden sm:inline">Logout</span>
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {/* MOBILE HAMBURGER + PROFILE (mini) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Profile avatar mini di mobile */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigate("profile")}
          >
            <img 
              src="https://i.pravatar.cc/150?img=5" 
              alt="Foto Profil" 
              className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
            />
          </div>

          {/* Hamburger button */}
          <button
            onClick={toggleMobileMenu}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          md:hidden 
          overflow-hidden 
          transition-all duration-300 ease-in-out
          bg-white border-b border-slate-100
          ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 py-3 space-y-2">
          {menu.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(item.page)}
              className="block w-full text-left px-4 py-3 text-sm font-bold text-slate-700 hover:bg-[#F7F9FC] hover:text-[#609EF5] rounded-xl transition"
            >
              {item.title}
            </button>
          ))}
          
          {/* Logout di mobile (opsional, bisa juga tetap pakai tombol di header) */}
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 mt-3 bg-rose-500 hover:bg-rose-600 text-white px-4 py-3 rounded-xl font-bold text-sm transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

    </header>
  );
}