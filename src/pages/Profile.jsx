import React, { useState, useRef, useMemo } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import {
  Edit3,
  Clock,
  Sun,
  Moon,
  Calendar,
  Award,
  Shield,
  Brain,
  Users,
  Heart,
  ChevronRight,
  ChevronDown,
  Star,
  CheckCircle,
  Zap,
  Phone,
  FileText,
  UserPlus,
  X,
  Upload,
  Save,
  Baby,
  Cake,
  Venus,
  Mars,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function ChildProfile({ onNavigate, onLogout }) {
  // Data anak State
  const [child, setChild] = useState({
    name: "Mama Ayu",
    photo: "https://i.pravatar.cc/150?img=5",
    dayStart: "08:00 AM",
    nightEnd: "06:00 PM",
    timeSlots: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    premium: true,
    birthday: "2026-02-01",
    isPremature: false,
    gender: "male", // 'male' | 'female'
  });

  // State untuk Kontrol Dropdown / Accordion Section
  const [openSections, setOpenSections] = useState({
    info: true, // Seksi Informasi Bayi terbuka secara default
    schedule: false, // Seksi Jadwal terlipat
    premium: false, // Seksi Layanan Premium terlipat
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // State untuk Modal Edit Profile
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...child });
  const [photoFile, setPhotoFile] = useState(null);
  const fileInputRef = useRef(null);

  // Helper kalkulasi usia dari tanggal lahir
  const calculatedAge = useMemo(() => {
    if (!child.birthday) return "Belum diisi";
    const birth = new Date(child.birthday);
    const now = new Date();
    const diffTime = Math.abs(now - birth);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const months = Math.floor(diffDays / 30.4375);
    const remainingDays = Math.floor(diffDays % 30.4375);
    const weeks = Math.floor(remainingDays / 7);

    if (months < 1) {
      return `${weeks} minggu ${remainingDays % 7} hari`;
    }
    return `${months} bulan ${weeks > 0 ? `${weeks} minggu` : ""}`.trim();
  }, [child.birthday]);

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const openEditModal = () => {
    setEditForm({
      name: child.name,
      photo: child.photo,
      birthday: child.birthday || "",
      isPremature: child.isPremature || false,
      gender: child.gender || "male",
    });
    setPhotoFile(null);
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setPhotoFile(null);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setEditForm((prev) => ({
          ...prev,
          photo: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = () => {
    setChild((prev) => ({
      ...prev,
      name: editForm.name,
      photo: editForm.photo,
      birthday: editForm.birthday,
      isPremature: editForm.isPremature,
      gender: editForm.gender,
    }));
    closeEditModal();
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-sans text-slate-800 pb-20">
      <DashboardNavbar onNavigate={onNavigate} onLogout={onLogout} />

      <main className="w-full max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb Navigasi */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
          <button onClick={() => onNavigate("dashboard")} className="hover:text-[#609EF5] transition">
            Home
          </button>
          <span>/</span>
          <button onClick={() => onNavigate("family")} className="hover:text-[#609EF5] transition">
            Keluarga
          </button>
          <span>/</span>
          <span className="font-semibold text-[#609EF5]">Profil Anak</span>
        </nav>

        {/* Outer Container Card */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          
          {/* Header Card dengan Gradient Brand */}
          <div className="relative px-6 pt-8 pb-10 flex flex-col items-center bg-gradient-to-br from-[#609EF5] via-[#7CB1F7] to-[#BADAFF] text-white">
            {/* Status Premium Badge */}
            {child.premium && (
              <div className="absolute top-5 right-5 bg-[#FFF78A] text-slate-800 px-3.5 py-1 rounded-full text-xs font-black flex items-center gap-1.5 shadow-md border border-yellow-200">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                PREMIUM
              </div>
            )}

            {/* Profile Avatar Container */}
            <div className="relative group">
              <img
                src={child.photo}
                alt={`Foto ${child.name}`}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl object-cover ring-4 ring-white/30"
              />
              <button
                onClick={openEditModal}
                className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 transition transform hover:scale-105"
                title="Ubah Foto"
              >
                <Edit3 className="w-4 h-4 text-[#609EF5]" />
              </button>
            </div>

            {/* Profil Info Detail */}
            <h1 className="text-2xl sm:text-3xl font-extrabold mt-3 text-center tracking-tight drop-shadow-sm">
              {child.name}
            </h1>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-bold bg-white/25 backdrop-blur-md text-white px-3.5 py-1 rounded-full border border-white/20">
                {calculatedAge}
              </span>
              <button
                onClick={openEditModal}
                className="text-xs font-semibold underline underline-offset-2 opacity-90 hover:opacity-100 transition"
              >
                Edit Profil
              </button>
            </div>
          </div>

          {/* Body Content - Accordion Items */}
          <div className="p-6 sm:p-8 space-y-4">
            
            {/* ==================== DROPDOWN 1: INFORMASI BAYI ==================== */}
            <section className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-2xs transition">
              {/* Trigger Button / Header Dropdown */}
              <button
                onClick={() => toggleSection("info")}
                className="w-full p-4 sm:p-5 flex items-center justify-between bg-[#F7F9FC] hover:bg-slate-100/80 transition cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#609EF5]/15 rounded-xl text-[#609EF5]">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-800">
                      Informasi Bayi
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      {openSections.info ? "Sembunyikan data utama" : "Tampilkan tanggal lahir, gender, dan status prematur"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal();
                    }}
                    className="text-xs font-bold text-[#609EF5] hover:underline flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200"
                  >
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                  <div className="p-1 rounded-full bg-white border border-slate-200 text-slate-500">
                    {openSections.info ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              {openSections.info && (
                <div className="p-4 sm:p-5 border-t border-slate-100 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {/* Tanggal Lahir Card */}
                    <div className="bg-[#F7F9FC] p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Cake className="w-4 h-4 text-[#609EF5]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Tanggal Lahir</span>
                      </div>
                      <span className="text-sm font-bold text-slate-800">{formatDate(child.birthday)}</span>
                    </div>

                    {/* Gender Card */}
                    <div className="bg-[#F7F9FC] p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        {child.gender === "male" ? (
                          <Mars className="w-4 h-4 text-[#609EF5]" />
                        ) : (
                          <Venus className="w-4 h-4 text-rose-400" />
                        )}
                        <span className="text-[11px] font-bold uppercase tracking-wider">Jenis Kelamin</span>
                      </div>
                      <span className="text-sm font-bold text-slate-800">
                        {child.gender === "male" ? "Laki-laki" : "Perempuan"}
                      </span>
                    </div>

                    {/* Usia Card */}
                    <div className="bg-[#F7F9FC] p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Clock className="w-4 h-4 text-[#609EF5]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Usia Tumbuh</span>
                      </div>
                      <span className="text-sm font-bold text-slate-800">{calculatedAge}</span>
                    </div>

                    {/* Kondisi Prematur Card */}
                    <div className="bg-[#F7F9FC] p-4 rounded-2xl border border-slate-100 flex flex-col justify-between">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Prematur</span>
                      </div>
                      <span
                        className={`text-sm font-bold ${
                          child.isPremature ? "text-amber-600" : "text-emerald-600"
                        }`}
                      >
                        {child.isPremature ? "Ya" : "Tidak"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* ==================== DROPDOWN 2: JADWAL & TIME SLOTS ==================== */}
            <section className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-2xs transition">
              {/* Trigger Button / Header Dropdown */}
              <button
                onClick={() => toggleSection("schedule")}
                className="w-full p-4 sm:p-5 flex items-center justify-between bg-[#F7F9FC] hover:bg-slate-100/80 transition cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#BADAFF]/50 rounded-xl text-[#609EF5]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-800">
                      Day vs Night & Time Slots
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      {openSections.schedule ? "Sembunyikan pengaturan jadwal" : "Tampilkan jam acuan dan slot waktu laporan"}
                    </p>
                  </div>
                </div>

                <div className="p-1 rounded-full bg-white border border-slate-200 text-slate-500">
                  {openSections.schedule ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible Content */}
              {openSections.schedule && (
                <div className="p-4 sm:p-5 border-t border-slate-100 space-y-5 animate-in fade-in duration-200">
                  <div>
                    <p className="text-xs text-slate-500 mb-3">
                      Waktu acuan pemisah aktivitas harian dan tidur malam anak.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F7F9FC] p-3.5 rounded-xl border border-slate-100 flex items-center gap-3">
                        <div className="p-2 bg-amber-50 rounded-lg">
                          <Sun className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">Day Start</span>
                          <span className="text-sm font-black text-slate-800">{child.dayStart}</span>
                        </div>
                      </div>

                      <div className="bg-[#F7F9FC] p-3.5 rounded-xl border border-slate-100 flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 rounded-lg">
                          <Moon className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">Night Start</span>
                          <span className="text-sm font-black text-slate-800">{child.nightEnd}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#609EF5]" /> Time Slots Laporan
                      </span>
                      <button className="text-[11px] font-semibold text-[#609EF5] hover:underline">
                        Atur di Laporan
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {child.timeSlots.map((slot, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F7F9FC] border border-slate-200 text-slate-600 px-3 py-1 rounded-lg text-xs font-medium shadow-2xs"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* ==================== DROPDOWN 3: LAYANAN PREMIUM ==================== */}
            <section className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-2xs transition">
              {/* Trigger Button / Header Dropdown */}
              <button
                onClick={() => toggleSection("premium")}
                className="w-full p-4 sm:p-5 flex items-center justify-between bg-[#F7F9FC] hover:bg-slate-100/80 transition cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#FFF78A]/60 rounded-xl text-amber-700">
                    <Zap className="w-5 h-5 fill-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-800">
                      Layanan Ekosistem Premium
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      {openSections.premium ? "Sembunyikan rincian layanan" : "Tampilkan fitur Telemedicine, AI Tracking, dan Family Circle"}
                    </p>
                  </div>
                </div>

                <div className="p-1 rounded-full bg-white border border-slate-200 text-slate-500">
                  {openSections.premium ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible Content */}
              {openSections.premium && (
                <div className="p-4 sm:p-5 border-t border-slate-100 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Health Support */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-white border border-[#609EF5]/20 hover:border-[#609EF5]/50 transition shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="bg-[#609EF5]/15 p-2 rounded-xl">
                          <Heart className="w-4 h-4 text-[#609EF5]" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm">Health & Telemedicine</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        Konsultasi terintegrasi dengan <strong>Digital Medical Resume</strong> yang siap dibagikan ke dokter anak.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#609EF5]">
                        <Phone className="w-3 h-3" /> Telemedicine Aktif <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* AI Intelligence */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-white border border-[#D6C7FF]/40 hover:border-[#D6C7FF] transition shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="bg-[#D6C7FF]/30 p-2 rounded-xl">
                          <Brain className="w-4 h-4 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm">AI Intelligence Tracking</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        Analisis data pola tidur, nutrisi, dan tumbuh kembang menjadi rekomendasi yang dipersonalisasi.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600">
                        <Sparkles className="w-3 h-3" /> Smart Analytics <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Family Circle */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-white border border-[#FFF78A]/60 hover:border-amber-300 transition shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="bg-[#FFF78A]/50 p-2 rounded-xl">
                          <Users className="w-4 h-4 text-amber-700" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm">Family Circle</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        Hubungkan Pasangan, Ayah, maupun Pengasuh dalam satu sistem monitoring real-time bersama.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700">
                        <UserPlus className="w-3 h-3" /> Kelola Anggota <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Deteksi Dini */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F7F9FC] to-white border border-[#BADAFF]/60 hover:border-[#609EF5] transition shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="bg-[#BADAFF]/40 p-2 rounded-xl">
                          <Shield className="w-4 h-4 text-[#609EF5]" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm">Deteksi Dini AI</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        Model pembelajaran mesin (ML) awal untuk memantau tanda-tanda keterlambatan perkembangan anak.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#609EF5]">
                        <CheckCircle className="w-3 h-3" /> Fitur Aktif <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Quick Actions Footer Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <button className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-[#609EF5] hover:bg-blue-600 text-white py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm transition shadow-sm">
                <Edit3 className="w-4 h-4" />
                SweetSpot® Settings
              </button>
              <button className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-[#FFF78A] hover:bg-[#f3ee77] text-slate-800 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm transition shadow-sm">
                <Calendar className="w-4 h-4" />
                Schedule Creator
              </button>
              <button className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-[#D6C7FF] hover:bg-[#c3b1f8] text-slate-800 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm transition shadow-sm">
                <FileText className="w-4 h-4" />
                Kuesioner
              </button>
            </div>

            {/* Footer Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-[#F7F9FC] py-2.5 px-4 rounded-2xl border border-slate-100">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Status Fitur: <strong>Akses Penuh Premium</strong></span>
            </div>

          </div>
        </div>
      </main>

      {/* ===== MODAL EDIT PROFIL ENHANCED ===== */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-md z-10">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#609EF5]" />
                Edit Profil Anak
              </h2>
              <button
                onClick={closeEditModal}
                className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Inputs */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Photo Change */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative group">
                  <img
                    src={editForm.photo || child.photo}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#609EF5]/20 shadow-md"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="absolute bottom-0 right-0 bg-[#609EF5] text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                <span className="text-[11px] text-slate-400 font-medium mt-2">
                  Format yang didukung: JPG, PNG
                </span>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nama Anak
                </label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#609EF5] focus:outline-none transition"
                  placeholder="Masukkan nama anak"
                />
              </div>

              {/* Birth Date Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={editForm.birthday}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#609EF5] focus:outline-none transition"
                />
              </div>

              {/* Gender Radio Choice Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Jenis Kelamin
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEditForm((prev) => ({ ...prev, gender: "male" }))}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition ${
                      editForm.gender === "male"
                        ? "bg-[#609EF5] text-white border-[#609EF5]"
                        : "bg-[#F7F9FC] text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Mars className="w-4 h-4" /> Laki-laki
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditForm((prev) => ({ ...prev, gender: "female" }))}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition ${
                      editForm.gender === "female"
                        ? "bg-rose-400 text-white border-rose-400"
                        : "bg-[#F7F9FC] text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Venus className="w-4 h-4" /> Perempuan
                  </button>
                </div>
              </div>

              {/* Premature Selection Switch/Buttons */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Lahir Prematur?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEditForm((prev) => ({ ...prev, isPremature: false }))}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition ${
                      !editForm.isPremature
                        ? "bg-slate-800 text-white border-slate-800"
                        : "bg-[#F7F9FC] text-slate-600 border-slate-200"
                    }`}
                  >
                    Tidak
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditForm((prev) => ({ ...prev, isPremature: true }))}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition ${
                      editForm.isPremature
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-[#F7F9FC] text-slate-600 border-slate-200"
                    }`}
                  >
                    Ya (Lahir Prematur)
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 p-5 sm:p-6 border-t border-slate-100 bg-slate-50/50 rounded-b-3xl">
              <button
                onClick={closeEditModal}
                className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-100 transition"
              >
                Batal
              </button>
              <button
                onClick={saveProfile}
                className="flex-1 py-3 bg-[#609EF5] hover:bg-blue-600 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Save className="w-4 h-4" />
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}