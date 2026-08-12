import React from "react";
import logo from "../assets/babysteps.png";

import Navbar from "../components/Navbar";

import {
  Play,
  ArrowRight,
  Search,
  Check,
  MapPin,
  Heart,
  ShieldCheck,
  ChevronRight,
  Mail,
  Zap,
  Droplets,
  Moon,
  Sparkles,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

export default function LandingPage({onNavigate, onLogin}) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800 selection:bg-[#FFF78A]">
      
      <Navbar 
  onNavigate={onNavigate}
  onLogin={onLogin}
/>

      {/* 2. HERO SECTION */}
      <section id="home" className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Text */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-[#FFF78A] text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-sm">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> Untuk Ibu & Ayah Indonesia
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Pantau <span className="bg-[#FFF78A] px-2 py-0.5 rounded-xl inline-block">Tumbuh</span> <br />
            <span className="bg-[#FFF78A] px-2 py-0.5 rounded-xl inline-block">Kembang</span> Bayi <br />
            dengan Lebih <span className="bg-[#BADAFF] text-slate-900 px-3 py-0.5 rounded-xl inline-block">Tenang</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            BabySteps membantu orang tua memantau kalori, stok ASI freezer, dan sinyal kesehatan harian secara akurat <i>tanpa tebak-tebakan</i>.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={onLogin}
              className="bg-[#609EF5] hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-blue-200 flex items-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Mulai Sekarang <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onLogin}
              className="bg-white border-2 border-slate-200 hover:border-slate-300 font-bold text-slate-800 px-6 py-3.5 rounded-full flex items-center gap-2 transition-all cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#D6C7FF] flex items-center justify-center text-slate-800">
                <Play className="w-3 h-3 fill-slate-800" />
              </div>
              Lihat Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-6 flex items-center gap-4 border-t border-slate-100">
            <div className="flex -space-x-2">
              <span className="w-9 h-9 rounded-full bg-rose-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">M</span>
              <span className="w-9 h-9 rounded-full bg-sky-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">A</span>
              <span className="w-9 h-9 rounded-full bg-purple-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">S</span>
              <span className="w-9 h-9 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">R</span>
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900">2.400+ Mama sudah bergabung</p>
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                {"★".repeat(5)} <span className="text-slate-500 ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - UI Element Mockup (Ganti Emoji dengan UI Element) */}
        <div className="relative flex justify-center">
          {/* Soft Glow Ambient Shape */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#BADAFF]/40 to-[#FFF78A]/40 rounded-full filter blur-3xl opacity-70"></div>

          {/* Main Card UI Element */}
          <div className="relative w-full max-w-md bg-white p-6 sm:p-8 rounded-[36px] border-2 border-blue-100/80 shadow-xl space-y-5">
            
            {/* Floating Badge Top Left */}
            <div className="absolute -top-4 -left-3 bg-[#FFF78A] text-slate-900 font-extrabold text-xs px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-4 h-4 text-amber-600 fill-amber-400" /> Great Job!
            </div>

            {/* Header Widget: Baby Profile Card */}
            <div className="flex items-center justify-between bg-[#F0F4FA] p-3.5 rounded-2xl border border-blue-100/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#609EF5] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  👶
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    Arka Syahreza <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">3 Bulan • 6.2 kg</div>
                </div>
              </div>
              <span className="bg-[#D8F8E8] text-emerald-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                Kondisi Baik
              </span>
            </div>

            {/* Quick Stats Grid Elements */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FFFCE8] p-3.5 rounded-2xl border border-amber-200/50 space-y-1">
                <div className="flex items-center justify-between text-amber-700">
                  <span className="text-[11px] font-bold">Asupan ASI</span>
                  <Droplets className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-lg font-black text-slate-900">550 ml</div>
                <div className="text-[10px] text-slate-500">Target 600 ml/hari</div>
              </div>

              <div className="bg-[#F3E8FF] p-3.5 rounded-2xl border border-purple-200/50 space-y-1">
                <div className="flex items-center justify-between text-purple-700">
                  <span className="text-[11px] font-bold">Waktu Tidur</span>
                  <Moon className="w-4 h-4 text-purple-500" />
                </div>
                <div className="text-lg font-black text-slate-900">12.5 jam</div>
                <div className="text-[10px] text-slate-500">Tidur Nyenyak</div>
              </div>
            </div>

            {/* Progress Bar Widget Element */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Nutrisi Harian Terpenuhi
                </span>
                <span className="font-black text-[#609EF5]">92%</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden p-0.5">
                <div className="bg-gradient-to-r from-[#609EF5] to-[#BADAFF] h-full rounded-full w-[92%] transition-all duration-1000"></div>
              </div>
            </div>

            {/* Floating Badge Bottom Right */}
            <div className="absolute -bottom-4 -right-3 bg-[#FFF78A] text-slate-900 font-extrabold text-xs px-4 py-2 rounded-full shadow-md flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-slate-800" /> Yuk, mulai sekarang!
            </div>

          </div>
        </div>
      </section>

      {/* 3. MASALAH SECTION */}
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#609EF5] uppercase tracking-wider">Masalah Yang Sering Dihadapi</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Menjadi Orang Tua Baru Tidak Selalu Mudah</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">Banyak orang tua ingin memberikan yang terbaik, tetapi sulit memahami sinyal kecil bayi.</p>
          </div>

          {/* Item 01 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-5xl font-black text-[#609EF5]/40">01</span>
              <h3 className="text-2xl font-bold text-slate-900">Apakah Bayi Mendapat Nutrisi yang Cukup?</h3>
              <p className="text-slate-600 text-sm">Orang tua sering tidak tahu apakah jumlah susu sudah sesuai kebutuhan bayi.</p>
              <div className="bg-[#FFF78A]/50 border border-[#FFF78A] p-4 rounded-2xl text-xs font-semibold flex items-center gap-2 text-slate-800">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-400" /> BabySteps membantu menghitung kebutuhan nutrisi secara lebih mudah.
              </div>
            </div>
            <div className="bg-[#FFFCE8] p-8 rounded-3xl text-center border border-amber-100">
              <div className="text-6xl mb-2">🍼</div>
              <span className="inline-block bg-[#609EF5] text-white font-bold text-xs px-4 py-1.5 rounded-full">550 ml / hari</span>
            </div>
          </div>

          {/* Item 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#F0F4FA] p-8 rounded-3xl text-center border border-blue-100 order-2 md:order-1">
              <div className="text-6xl mb-2">🧊</div>
              <span className="inline-block bg-[#D6C7FF] text-slate-900 font-bold text-xs px-4 py-1.5 rounded-full">Sistem FIFO ASI</span>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <span className="text-5xl font-black text-[#D6C7FF]">02</span>
              <h3 className="text-2xl font-bold text-slate-900">ASI Berlebih Bisa Terbuang Tanpa Sistem</h3>
              <p className="text-slate-600 text-sm">Stok ASI freezer sering sulit dikelola sehingga risiko kedaluwarsa meningkat.</p>
              <div className="bg-[#FFF78A]/50 border border-[#FFF78A] p-4 rounded-2xl text-xs font-semibold flex items-center gap-2 text-slate-800">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-400" /> Digital ASI Inventory membantu mengatur stok menggunakan sistem FIFO.
              </div>
            </div>
          </div>

          {/* Item 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-5xl font-black text-[#609EF5]/40">03</span>
              <h3 className="text-2xl font-bold text-slate-900">Orang Tua Cemas Saat Bayi Menunjukkan Tanda Tidak Biasa</h3>
              <p className="text-slate-600 text-sm">Tangisan, BAB, tidur, dan perubahan perilaku sulit dipahami tanpa panduan.</p>
              <div className="bg-[#FFF78A]/50 border border-[#FFF78A] p-4 rounded-2xl text-xs font-semibold flex items-center gap-2 text-slate-800">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-400" /> AI Baby Intelligence membantu membaca pola kecil bayi.
              </div>
            </div>
            <div className="bg-[#FFF9F2] p-8 rounded-3xl text-center border border-orange-100">
              <div className="text-6xl mb-2">👶</div>
              <span className="inline-block bg-[#BADAFF] text-slate-900 font-bold text-xs px-4 py-1.5 rounded-full">AI Pola Bayi</span>
            </div>][[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
          </div>
        </div>
      </section>

      {/* 4. CARA KERJA SECTION */}
      <section className="py-16 bg-[#BADAFF]/40 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#609EF5] uppercase tracking-wider">Cara Kerja</span>
            <h2 className="text-3xl font-black text-slate-900">Mudah dalam 4 Langkah</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Catat aktivitas bayi', desc: 'Input feeding, tidur, BAB/BAK dalam hitungan detik.', bg: 'bg-[#FFF78A]' },
              { num: '02', title: 'AI memahami pola bayi', desc: 'Model AI kami mempelajari kebiasaan unik bayi kamu.', bg: 'bg-[#D6C7FF]' },
              { num: '03', title: 'Berikan insight sederhana', desc: 'Informasi mudah dipahami tanpa jargon medis.', bg: 'bg-[#FFF78A]' },
              { num: '04', title: 'Hubungkan bantuan profesional', desc: 'Dokter siap jika diperlukan melalui telemedicine.', bg: 'bg-[#D6C7FF]' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-3 text-left relative overflow-hidden">
                <div className={`w-10 h-10 ${step.bg} rounded-xl flex items-center justify-center font-bold text-slate-900 shadow-sm`}>
                  {step.num}
                </div>
                <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FITUR GRID SECTION */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-12 text-center">
          <div className="space-y-3">
            <span className="inline-block bg-[#FFF78A] text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs">
              Bikin Tenang, Tanpa Drama
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Semua yang Ibu & Ayah butuhkan, <span className="text-[#609EF5]">tanpa tebak-tebakan.</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Dari urusan stok ASI di freezer sampai tangisan bayi tengah malam, BabySteps hadir memberikan kepastian data yang bikin pikiran lega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#FFF78A]/40 border-2 border-[#FFF78A] p-6 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="bg-white text-slate-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">UTAMA</span>
                <h3 className="font-extrabold text-xl text-slate-900">Hitung Kalori & Pantau Berat Badan</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Pantau Nutrisi & Tumbuh Kembang Otomatis Konversi susu ke kalori & pantau grafik tumbuh kembang bayi sesuai standar WHO secara real-time.
                </p>
              </div>
              <button onClick={onLogin} className="bg-white hover:bg-slate-50 font-bold text-xs text-slate-900 py-2.5 px-4 rounded-full flex items-center justify-between shadow-sm cursor-pointer">
                Lihat Cara Kerjanya <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#D6C7FF]/40 border-2 border-[#D6C7FF] p-6 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="bg-white text-slate-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">STOK ASI</span>
                <h3 className="font-extrabold text-xl text-slate-900">Manajemen Stok ASI Freezer (FIFO)</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Atur Stok ASI Lebih Rapi dengan FIFO Scan QR code untuk urutkan pemakaian ASI otomatis dan dapatkan pengingat sebelum kedaluwarsa.
                </p>
              </div>
              <button onClick={onLogin} className="bg-white hover:bg-slate-50 font-bold text-xs text-slate-900 py-2.5 px-4 rounded-full flex items-center justify-between shadow-sm cursor-pointer">
                Atur Stok Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#BADAFF]/40 border-2 border-[#BADAFF] p-6 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="bg-white text-slate-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">FITUR AI</span>
                <h3 className="font-extrabold text-xl text-slate-900">Penerjemah Tangisan & Kesehatan Pup</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Terjemahkan Tangisan & Cek Kesehatan Pup Rekam suara tangisan atau foto pup untuk deteksi dini penyebab bayi rewel beserta solusi instannya.
                </p>
              </div>
              <button onClick={onLogin} className="bg-white hover:bg-slate-50 font-bold text-xs text-slate-900 py-2.5 px-4 rounded-full flex items-center justify-between shadow-sm cursor-pointer">
                Coba Fitur AI <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FDE63F]/40 border-2 border-[#FDE63F] p-6 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="bg-white text-slate-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">DARURAT</span>
                <h3 className="font-extrabold text-xl text-slate-900">Pertolongan Pertama & Resume Medis</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Akses Dokter & Resume Medis 1-Klik Terhubung langsung ke dokter anak dan unduh riwayat kesehatan 3 hari terakhir berformat PDF.
                </p>
              </div>
              <button onClick={onLogin} className="bg-white hover:bg-slate-50 font-bold text-xs text-slate-900 py-2.5 px-4 rounded-full flex items-center justify-between shadow-sm cursor-pointer">
                Pelajari Selengkapnya <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-[#609EF5]/30 border-2 border-[#609EF5] p-6 rounded-3xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="bg-white text-slate-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">TIM PARENTING</span>
                <h3 className="font-extrabold text-xl text-slate-900">Keluarga Kompak & Apresiasi Ibu</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Kolaborasi Asuh & Catat Minum Susu Pantau jadwal minum susu bersama Ayah & Nanny secara real-time dengan apresiasi harian untuk Ibu.
                </p>
              </div>
              <button onClick={onLogin} className="bg-white hover:bg-slate-50 font-bold text-xs text-slate-900 py-2.5 px-4 rounded-full flex items-center justify-between shadow-sm cursor-pointer">
                Ajak Pasangan Sync <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 6 */}
            <div className="bg-white border-2 border-slate-200 p-6 rounded-3xl space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="bg-slate-100 text-slate-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full">MEDIS & DONOR</span>
                <h3 className="font-extrabold text-xl text-slate-900">Cari Klinik Laktasi & Donor ASI Aman</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Layanan Laktasi & Donor ASI Terverifikasi Cari konselor laktasi terdekat dan akses donor ASI aman yang sesuai standar medis & syariat.
                </p>
              </div>
              <button onClick={onLogin} className="bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-900 py-2.5 px-4 rounded-full flex items-center justify-between cursor-pointer">
                Cari Klinik Terdekat <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section id="pricing" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 space-y-12 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#609EF5] uppercase tracking-wider">Harga</span>
            <h2 className="text-3xl font-black text-slate-900">Mulai Gratis, Upgrade Saat Membutuhkan</h2>
            <p className="text-slate-500 text-sm">Tidak perlu bayar di muka. Pilih sesuai kebutuhanmu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
            {/* Free Tier */}
            <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="bg-blue-50 text-[#609EF5] font-bold text-[10px] uppercase px-3 py-1 rounded-full">FREE</span>
                <h3 className="font-bold text-slate-900 text-lg">Untuk memulai perjalanan parenting</h3>
                <div className="text-3xl font-black text-slate-900">Gratis <span className="text-xs text-slate-400 font-normal">Selamanya</span></div>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-100">
                  {['Pemantauan pertumbuhan', 'Catatan BAB/BAK harian', 'Tracking pola tidur', 'Jurnal bayi harian', 'Pengingat dasar'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onLogin} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-full text-xs cursor-pointer">
                Mulai Gratis
              </button>
            </div>

            {/* BabySteps Plus Tier */}
            <div className="bg-[#609EF5] text-white p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl relative transform md:-translate-y-2">
              <div className="space-y-4">
                <span className="bg-white/20 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full">BABYSTEPS PLUS</span>
                <h3 className="font-bold text-white text-lg">AI untuk keputusan lebih percaya diri</h3>
                <div className="text-3xl font-black text-white">Rp29.999 <span className="text-xs text-blue-100 font-normal">/ bulan</span></div>
                <ul className="space-y-2.5 text-xs text-blue-50 pt-4 border-t border-white/20">
                  {['Semua fitur Free', 'AI Baby Insights', 'AI Poop Analyzer', 'Crying Pattern Analysis', 'Digital ASI Inventory FIFO', 'QR ASI Tracking', 'Advanced Analytics', 'Family Sync'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-300" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onLogin} className="w-full bg-[#FFF78A] hover:bg-yellow-300 text-slate-900 font-extrabold py-3.5 rounded-full text-xs shadow-md cursor-pointer">
                Coba Plus Sekarang
              </button>
            </div>

            {/* BabySteps Care+ Tier */}
            <div className="bg-[#D6C7FF]/50 border-2 border-[#D6C7FF] p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="bg-white text-purple-900 font-bold text-[10px] uppercase px-3 py-1 rounded-full">BABYSTEPS CARE+</span>
                <h3 className="font-bold text-slate-900 text-lg">Bantuan profesional saat dibutuhkan</h3>
                <div className="text-3xl font-black text-slate-900">Pay-per-use <span className="text-xs text-slate-500 font-normal">Sesuai kebutuhan</span></div>
                <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-purple-200">
                  {['Konsultasi dokter anak', 'Medical Resume PDF', 'Data sharing ke dokter', 'Ringkasan medis otomatis', 'Priority queue'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-700" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onLogin} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-full text-xs cursor-pointer">
                Jelajahi Care+
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOSPITAL & ASI BANK SECTION */}
      <section id="edukasi" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-block bg-[#BADAFF] text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs">
              Edukasi & Donor ASI
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Kemitraan Rumah Sakit & <span className="bg-[#FFF78A] px-2 py-0.5 rounded-lg">Bank ASI Legal</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              BabySteps bermitra hanya dengan institusi bersertifikat yang menerapkan standar skrining ketat — memastikan keamanan donor ASI sesuai regulasi Kemenkes RI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center py-6 border-y border-slate-100">
            <div>
              <div className="text-3xl font-black text-slate-900">50+</div>
              <div className="text-xs text-slate-500 font-medium">Klinik Partner</div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">3</div>
              <div className="text-xs text-slate-500 font-medium">Bank ASI Legal</div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Tersertifikasi</div>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari Klinik Laktasi / Bank ASI Terdekat..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:border-[#609EF5]"
            />
          </div>

          {/* Hospital List */}
          <div className="space-y-3">
            {[
              { name: 'RSIA Bunda Jakarta', type: 'Bank ASI', color: 'bg-blue-500' },
              { name: 'Klinik Laktasi Hermina', type: 'Laktasi', color: 'bg-sky-400' },
              { name: 'RS St. Carolus', type: 'Bank ASI', color: 'bg-purple-400' },
              { name: 'Klinik ASI Ibu & Anak', type: 'Laktasi', color: 'bg-yellow-400' },
              { name: 'RSIA Tambak', type: 'Bank ASI', color: 'bg-[#FDE63F]' },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white text-xs`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{item.type}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>

          <button onClick={onLogin} className="w-full bg-[#BADAFF] hover:bg-blue-200 text-slate-900 font-bold py-3.5 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-pointer">
            <MapPin className="w-4 h-4" /> Tampilkan Semua Klinik di Peta
          </button>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-6 space-y-12 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#609EF5] uppercase tracking-wider">DIPERCAYA ORANG TUA INDONESIA</span>
            <h2 className="text-3xl font-black text-slate-900">
              BabySteps Selalu Ada <br />
              <span className="text-[#609EF5] italic">Mereka sudah merasakannya.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                text: "BabySteps benar-benar mengubah cara saya menyusui. Sekarang saya tahu persis berapa kalori yang masuk dan tidak panik lagi di malam hari!",
                name: "Sarah M.",
                role: "Mama dari Keanu, 4 bulan",
                initial: "S",
                color: "bg-rose-200 text-rose-800"
              },
              {
                text: "Fitur FIFO ASI-nya luar biasa. Tidak ada lagi kantong ASI yang terbuang karena kedaluwarsa. Ayah pun bisa bantu pantau dari handphonenya.",
                name: "Rina P.",
                role: "Mama dari Zahra, 6 bulan",
                initial: "R",
                color: "bg-sky-200 text-sky-800"
              },
              {
                text: "AI analyzer tangisan itu akurat sekali! Anak saya sering rewel malam dan sekarang saya lebih tenang karena ada data yang bisa dipercaya.",
                name: "Dewi A.",
                role: "Mama dari Bimo, 2 bulan",
                initial: "D",
                color: "bg-amber-200 text-amber-800"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between">
                <p className="text-slate-600 text-xs leading-relaxed italic">"{item.text}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className={`w-9 h-9 rounded-full ${item.color} font-bold flex items-center justify-center text-xs`}>
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                    <p className="text-[10px] text-slate-400">{item.role}</p>
                    <div className="text-amber-400 text-[10px]">{"★".repeat(5)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER SECTION */}
      <footer id="tentang" className="bg-[#BADAFF]/50 border-t border-blue-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <img src={logo} alt="BabySteps Logo" className="h-9 w-auto object-contain" />
            <p className="text-slate-600 text-xs leading-relaxed">
              Platform pendukung keputusan cerdas untuk pemantauan tumbuh kembang bayi bagi orang tua Indonesia.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">MENU</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#masalah" className="hover:text-blue-600">Masalah</a></li>
              <li><a href="#fitur" className="hover:text-blue-600">Fitur</a></li>
              <li><a href="#edukasi" className="hover:text-blue-600">Edukasi & Donor</a></li>
              <li><a href="#tentang" className="hover:text-blue-600">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">INFORMASI</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Blog Parenting</a></li>
              <li><a href="#" className="hover:text-blue-600">Kalkulator Kalori</a></li>
              <li><a href="#" className="hover:text-blue-600">Panduan WHO</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Col 4 Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">TIPS MINGGUAN</h4>
            <p className="text-slate-600 text-xs">Dapatkan tips parenting & update fitur terbaru langsung di inbox Mama.</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="email@mama.com" 
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs focus:outline-none"
              />
              <button className="w-full bg-[#D6C7FF] hover:bg-purple-300 text-slate-900 font-bold py-2.5 rounded-full text-xs flex items-center justify-center gap-2 cursor-pointer">
                <Mail className="w-4 h-4" /> Langganan Yuk!
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>© 2026 BabySteps. Dibuat dengan 💖 untuk orang tua Indonesia.</div>
          <div className="flex gap-4 font-bold text-slate-600">
            <span>WHO</span>
            <span>IDAI</span>
            <span>Kemenkes RI</span>
            <span>BPOM</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
