import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import logo from "../assets/babysteps.png";
import familyImage from "../assets/family.png";
import babycoImage from "../assets/babyco.png";

// Ikon
import {
  Users,
  UserPlus,
  ChevronRight,
  Clock,
  CheckCircle,
  Plus,
  Edit2,
  Trash2,
  MoreVertical,
  Crown,
  Heart,
  Activity,
  Droplets,
  Moon,
  Milk,
  MessageCircle,
  Share2,
  Link,
  Settings,
  ChevronDown,
  ChevronUp,
  Calendar,
  Star,
  Baby,
  User,
  Mail,
  Phone,
  TreePine,
  X,
  UserCog,
} from "lucide-react";

export default function Family({ onNavigate, onLogout }) {
  // ============================================================
  // STATE
  // ============================================================
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("Co-Parent");
  const [newMemberAccess, setNewMemberAccess] = useState("Shared Access");
  const [expandedMember, setExpandedMember] = useState(null);

  // ============================================================
  // DATA DUMMY (dengan level akses)
  // ============================================================
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      name: "Mama Ayu",
      role: "Parent Owner",
      access: "Full Access",
      icon: "👩",
      isOwner: true,
      tasks: ["Pumping ASI malam", "Catat feeding sore"],
      notes: "Arka lebih nyaman tidur setelah digendong.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "Papa Dimas",
      role: "Co-Parent",
      access: "Shared Access",
      icon: "👨",
      isOwner: false,
      tasks: ["Siapkan perlengkapan bayi", "Mandiri Arka pagi"],
      notes: "Botol ASIP malam sudah disiapkan.",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      name: "Mbak Sari",
      role: "Caregiver",
      access: "Care Access",
      icon: "👩",
      isOwner: false,
      tasks: ["Rutinitas tidur sore", "Tummy time session"],
      notes: "Arka lebih tenang setelah tummy time.",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
  ]);

  // ============================================================
  // HANDLERS KELOLA ANGGOTA
  // ============================================================
  const handleAddMember = () => {
    if (!newMemberName.trim()) {
      alert("Nama anggota tidak boleh kosong.");
      return;
    }
    const newMember = {
      id: Date.now(),
      name: newMemberName,
      role: newMemberRole,
      access: newMemberAccess,
      icon: "👤",
      isOwner: newMemberRole === "Parent Owner",
      tasks: [],
      notes: "",
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    };
    setFamilyMembers([...familyMembers, newMember]);
    setNewMemberName("");
    setNewMemberRole("Co-Parent");
    setNewMemberAccess("Shared Access");
    alert(`✅ ${newMemberName} berhasil ditambahkan!`);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus anggota ini?")) {
      setFamilyMembers(familyMembers.filter((m) => m.id !== id));
    }
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setNewMemberName(member.name);
    setNewMemberRole(member.role);
    setNewMemberAccess(member.access);
    setShowMemberModal(true);
  };

  const handleUpdateMember = () => {
    if (!newMemberName.trim()) {
      alert("Nama anggota tidak boleh kosong.");
      return;
    }
    setFamilyMembers(
      familyMembers.map((m) =>
        m.id === editingMember.id
          ? {
              ...m,
              name: newMemberName,
              role: newMemberRole,
              access: newMemberAccess,
              isOwner: newMemberRole === "Parent Owner",
            }
          : m
      )
    );
    setEditingMember(null);
    setNewMemberName("");
    setNewMemberRole("Co-Parent");
    setNewMemberAccess("Shared Access");
    setShowMemberModal(false);
    alert("✅ Anggota berhasil diperbarui!");
  };

  const closeModal = () => {
    setShowMemberModal(false);
    setEditingMember(null);
    setNewMemberName("");
    setNewMemberRole("Co-Parent");
    setNewMemberAccess("Shared Access");
  };

  const toggleExpand = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  // ============================================================
  // DATA LAIN
  // ============================================================
  const careSummary = {
    totalFeeding: "370ml",
    totalDiaper: "3x",
    totalSleep: "2j 40m",
  };

  const importantInfo = [
    "Morning feeding selesai",
    "Rutinitas tidur selesai",
    "Tummy time (favorit Arka)",
  ];

  const familyNotes = [
    { name: "Mama Ayu", note: "Arka lebih nyaman tidur setelah digendong." },
    { name: "Papa Dimas", note: "Botol ASIP malam sudah disiapkan." },
    { name: "Mbak Sari", note: "Arka lebih tenang setelah tummy time." },
  ];

  const familyMoments = [
    { month: "Bulan 1", event: "Pertama kali tummy time" },
    { month: "Bulan 2", event: "Mulai mengenali suara Papa" },
    { month: "Bulan 3", event: "Rutinitas tidur baru dimulai" },
    { month: "Bulan 4", event: "Senyum pertama di depan kamera" },
  ];

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-[#F7F9FC] font-sans text-slate-800 pb-16">
      <DashboardNavbar onNavigate={onNavigate} onLogout={onLogout} />

      <main className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8">
        {/* ============================================================
            BREADCRUMB
        ============================================================ */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 mb-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate("dashboard")}
            className="hover:text-[#609EF5] transition"
          >
            Home
          </button>
          <span>/</span>
          <span className="font-bold text-[#609EF5]">Family Sync</span>
        </div>

{/* ============================================================
    HERO CARD – posisi gambar disesuaikan (right-12)
============================================================ */}
<section className="bg-gradient-to-br from-[#FFF78A] via-[#FFE57F] to-[#FFD54F] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-yellow-200 shadow-xs relative overflow-visible">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
    {/* Kolom Teks */}
    <div className="md:col-span-7 space-y-3 sm:space-y-4">
      <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md text-[#609EF5] px-3 py-1 rounded-full text-[11px] font-bold border border-blue-100">
        <Share2 className="w-3.5 h-3.5" />
        <span>Family Sync</span>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
        Mama tidak sendiri dalam perjalanan ini.
      </h1>
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg">
        BabySteps membantu seluruh keluarga ikut merawat Arka dengan lebih terkoordinasi – dari Mama, Papa, hingga pengasuh.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <button className="bg-[#609EF5] hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-full shadow-md shadow-blue-200 transition flex items-center gap-2 text-sm">
          <Link className="w-4 h-4" /> Hubungkan Keluarga
        </button>
        <button className="bg-white/80 hover:bg-white text-slate-700 font-bold px-5 py-3 rounded-full border border-white/60 transition flex items-center gap-2 text-sm">
          <Activity className="w-4 h-4" /> Lihat Aktivitas
        </button>
      </div>
    </div>

    {/* Kolom Gambar – diubah right-12 agar tidak terlalu ke kiri */}
    <div className="md:col-span-5 flex justify-center md:justify-end items-center relative">
      <div className="absolute right-1 top-[100%] -translate-y-[30%] w-82 sm:w-90 lg:w-106 transition-all duration-300 hover:scale-105">
        <img
          src={familyImage}
          alt="Ibu dan anak"
          className="w-full h-auto object-contain rounded-2xl mix-blend-multiply drop-shadow-md"
        />
      </div>
    </div>
  </div>
</section>

        {/* ============================================================
            SECTION: SIAPA SAJA YANG TERHUBUNG? (TREE VIEW)
        ============================================================ */}
        <section className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden mb-6">
          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h2 className="font-black text-lg text-slate-800 flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-emerald-600" />
                  Siapa saja yang terhubung dengan Arka?
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Setiap orang memiliki peran dalam perjalanan kecil Arka.
                </p>
              </div>
              <button
                onClick={() => setShowMemberModal(true)}
                className="bg-[#609EF5] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full text-xs flex items-center gap-1.5 transition"
              >
                <UserCog className="w-4 h-4" /> Kelola Anggota
              </button>
            </div>

            {/* TREE VIEW */}
            <div className="flex flex-col items-center overflow-x-auto pb-4 mt-4">
              <div className="flex flex-col items-center">
                {/* Root: Arka - warna #BADAFF dengan gambar babyco */}
                <div className="flex items-center gap-3 bg-[#BADAFF] px-6 py-3 rounded-2xl border-2 border-blue-200 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center border-2 border-blue-300 overflow-hidden">
                    <img
                      src={babycoImage}
                      alt="Arka"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-slate-800 text-lg">Arka</p>
                    <p className="text-xs text-slate-600">{familyMembers.length} terhubung</p>
                  </div>
                </div>

                {/* Garis vertikal dari Arka ke bawah */}
                <div className="w-0.5 h-6 bg-slate-300"></div>

                {/* Container untuk child nodes */}
                <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 pt-2">
                  {/* Garis horizontal di atas child nodes */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-slate-300 hidden sm:block"></div>

                  {familyMembers.map((member) => (
                    <div key={member.id} className="relative flex flex-col items-center pt-4">
                      {/* Garis vertikal dari horizontal ke node */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>

                      <div
                        className={`flex flex-col items-center p-3 rounded-2xl border-2 transition cursor-pointer w-28 sm:w-32 ${
                          expandedMember === member.id
                            ? "border-[#609EF5] bg-[#F0F7FF] shadow-md"
                            : "border-slate-200 hover:border-[#609EF5] bg-white"
                        }`}
                        onClick={() => toggleExpand(member.id)}
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <p className="font-bold text-slate-800 text-xs sm:text-sm mt-2 text-center leading-tight">
                          {member.name}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 text-center">
                          {member.role}
                        </p>
                        <p className="text-[8px] sm:text-[9px] text-slate-400 text-center">
                          {member.access}
                        </p>
                        {member.isOwner && (
                          <span className="mt-1 bg-amber-100 text-amber-700 text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <Crown className="w-3 h-3" /> Owner
                          </span>
                        )}
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 mt-1 transition ${
                            expandedMember === member.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* TUGAS (muncul saat expand) */}
                      {expandedMember === member.id && (
                        <div className="mt-2 w-full min-w-[180px] bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs shadow-sm">
                          <p className="font-bold text-slate-600 mb-1">📋 Tugas:</p>
                          {member.tasks.length > 0 ? (
                            <ul className="space-y-1">
                              {member.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-slate-600">
                                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-slate-400 text-[10px]">Belum ada tugas</p>
                          )}
                          {member.notes && (
                            <p className="text-[10px] text-slate-400 mt-2 italic">“{member.notes}”</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION: PERAWATAN BERSAMA
        ============================================================ */}
        <section className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden mb-6">
          <div className="p-5 sm:p-7">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-5 h-5 text-rose-400" />
              <h2 className="font-black text-lg text-slate-800">Rawat Arka bersama-sama.</h2>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Bagikan tanggung jawab kecil agar perawatan bayi terasa lebih ringan.
            </p>

            <div className="space-y-4">
              {familyMembers.map((member) => (
                <div key={member.id} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-bold text-sm text-slate-700">{member.name}</span>
                  </div>
                  <ul className="space-y-1.5 pl-11">
                    {member.tasks.length > 0 ? (
                      member.tasks.map((task, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                          {task}
                        </li>
                      ))
                    ) : (
                      <li className="text-xs text-slate-400">Belum ada tugas</li>
                    )}
                  </ul>
                </div>
              ))}

              <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-xs font-bold text-slate-400 hover:text-[#609EF5] hover:border-[#609EF5] transition flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Tambah Tugas
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION: ARKA'S CARE SUMMARY
        ============================================================ */}
        <section className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden mb-6">
          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-black text-lg text-slate-800 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#609EF5]" />
                Arka's Care Summary
              </h2>
              <span className="text-[10px] text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" /> Diperbarui 12 menit lalu
              </span>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-3 gap-3 mt-4 mb-5">
              <div className="bg-[#FFF78A] rounded-xl p-3 text-center">
                <p className="text-2xl font-black text-slate-800">{careSummary.totalFeeding}</p>
                <p className="text-[10px] text-slate-500 font-bold">Total Feeding</p>
              </div>
              <div className="bg-[#BADAFF] rounded-xl p-3 text-center">
                <p className="text-2xl font-black text-slate-800">{careSummary.totalDiaper}</p>
                <p className="text-[10px] text-slate-500 font-bold">Ganti Popok</p>
              </div>
              <div className="bg-[#D6C7FF] rounded-xl p-3 text-center">
                <p className="text-2xl font-black text-slate-800">{careSummary.totalSleep}</p>
                <p className="text-[10px] text-slate-500 font-bold">Waktu Tidur</p>
              </div>
            </div>

            {/* Info Penting */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-amber-600 flex items-center gap-2">
                <Star className="w-3.5 h-3.5" /> Info Penting Hari Ini
              </h4>
              <ul className="mt-2 space-y-1">
                {importantInfo.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 mt-2 italic">
                “Arka lebih nyaman digendong sebelum tidur.”
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION: CATATAN KELUARGA
        ============================================================ */}
        <section className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden mb-6">
          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-black text-lg text-slate-800 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#609EF5]" />
                Catatan Kecil untuk Keluarga
              </h2>
              <button className="text-xs font-bold text-[#609EF5] hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" /> Tambah
              </button>
            </div>
            <p className="text-sm text-slate-500 mb-4">
              Bagikan informasi tentang kebiasaan dan kebutuhan Arka.
            </p>

            <div className="space-y-3">
              {familyNotes.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-xs font-bold text-slate-700">{item.name}</p>
                  <p className="text-xs text-slate-600 mt-1">“{item.note}”</p>
                </div>
              ))}
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-400">Tulis catatan untuk keluarga...</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION: MOMEN KECIL
        ============================================================ */}
        <section className="bg-gradient-to-r from-[#FFF78A] to-[#FDE68A] rounded-[28px] p-5 sm:p-7 overflow-hidden mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="w-5 h-5 text-rose-500" />
            <h2 className="font-black text-lg text-slate-800">Momen kecil yang menjadi kenangan besar.</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Simpan pengalaman keluarga bersama Arka.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {familyMoments.map((moment, idx) => (
              <div key={idx} className="bg-white/70 rounded-xl p-3 text-center border border-white/60">
                <p className="text-xs font-black text-amber-600">{moment.month}</p>
                <p className="text-xs text-slate-600 mt-1">{moment.event}</p>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-white/80 hover:bg-white text-slate-700 font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2 border border-white/60">
            <Plus className="w-4 h-4" /> Tulis Catatan untuk Keluarga
          </button>
        </section>

        {/* ============================================================
            SECTION: FAMILY PLUS UPGRADE
        ============================================================ */}
        <section className="bg-gradient-to-r from-[#D6C7FF] to-[#BADAFF] rounded-[28px] p-5 sm:p-7 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-500" />
                <h2 className="font-black text-lg text-slate-800">Unlock BabySteps Family Plus</h2>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                Bangun pengalaman parenting bersama seluruh keluarga. Koordinasikan tanpa batas, lebih tenang bersama.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white/70 text-xs font-bold px-3 py-1 rounded-full text-slate-700">
                  Unlimited family members
                </span>
                <span className="bg-white/70 text-xs font-bold px-3 py-1 rounded-full text-slate-700">
                  Advanced care coordination
                </span>
                <span className="bg-white/70 text-xs font-bold px-3 py-1 rounded-full text-slate-700">
                  Shared insights & analitik
                </span>
                <span className="bg-white/70 text-xs font-bold px-3 py-1 rounded-full text-slate-700">
                  Personalized family assistant
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-full shadow-lg transition text-sm">
                Upgrade Family Plus
              </button>
              <button className="text-slate-700 font-medium text-xs hover:underline text-center">
                Pelajari lebih lanjut →
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================
            MODAL KELOLA ANGGOTA KELUARGA
        ============================================================ */}
        {showMemberModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
              {/* Header Modal */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">
                  <UserCog className="w-6 h-6 text-[#609EF5]" />
                  Kelola Anggota Keluarga
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 rounded-full transition"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Daftar Anggota Aktif */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-600 flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4" /> Anggota Aktif
                </h3>
                <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                  {familyMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                          <p className="font-bold text-sm text-slate-800">{member.name}</p>
                          <p className="text-xs text-slate-500">
                            {member.role} · {member.access}
                          </p>
                        </div>
                        {member.isOwner && (
                          <span className="bg-amber-100 text-amber-700 text-[8px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <Crown className="w-3 h-3" /> Owner
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditMember(member)}
                          className="p-1.5 hover:bg-slate-200 rounded-full transition"
                        >
                          <Edit2 className="w-4 h-4 text-slate-400 hover:text-[#609EF5]" />
                        </button>
                        {!member.isOwner && (
                          <button
                            onClick={() => handleDeleteMember(member.id)}
                            className="p-1.5 hover:bg-red-50 rounded-full transition"
                          >
                            <Trash2 className="w-4 h-4 text-slate-400 hover:text-red-500" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Tambah/Edit Anggota */}
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-bold text-slate-600 flex items-center gap-2 mb-3">
                  <UserPlus className="w-4 h-4" />
                  {editingMember ? "Edit Anggota" : "Tambah Anggota Baru"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 block mb-1">
                      Nama
                    </label>
                    <input
                      type="text"
                      value={newMemberName}
                      onChange={(e) => setNewMemberName(e.target.value)}
                      placeholder="Nama anggota"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609EF5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 block mb-1">
                      Peran
                    </label>
                    <select
                      value={newMemberRole}
                      onChange={(e) => setNewMemberRole(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609EF5] focus:border-transparent"
                    >
                      <option value="Parent Owner">Parent Owner</option>
                      <option value="Co-Parent">Co-Parent</option>
                      <option value="Caregiver">Caregiver</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 block mb-1">
                      Level Akses
                    </label>
                    <select
                      value={newMemberAccess}
                      onChange={(e) => setNewMemberAccess(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#609EF5] focus:border-transparent"
                    >
                      <option value="Full Access">Full Access</option>
                      <option value="Shared Access">Shared Access</option>
                      <option value="Care Access">Care Access</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={editingMember ? handleUpdateMember : handleAddMember}
                    className="flex-1 bg-[#609EF5] hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl transition"
                  >
                    {editingMember ? "Update Anggota" : "Tambah Anggota"}
                  </button>
                  {editingMember && (
                    <button
                      onClick={() => {
                        setEditingMember(null);
                        setNewMemberName("");
                        setNewMemberRole("Co-Parent");
                        setNewMemberAccess("Shared Access");
                      }}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition"
                    >
                      Batal Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}