import React, { useState } from 'react';
import logo from '../assets/babysteps.png';
import babyco from '../assets/babyco.png'; // import gambar baby
import { 
  ArrowLeft, Mail, Lock, User, Eye, EyeOff, 
  Sparkles, Heart, CheckCircle2, ShieldCheck,
  Hand, Rocket, ArrowRight 
} from 'lucide-react';

export default function AuthPage({ initialMode = 'login', onLoginSuccess, onBackToHome }) {
  // Toggle antara 'login' (Masuk) atau 'signup' (Daftar)
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi Berhasil Auth -> Masuk ke Dashboard Mama Ayu
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] font-sans text-slate-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      {/* Outer Card Container */}
      <div className="max-w-4xl w-full bg-white rounded-[32px] sm:rounded-[40px] border-2 border-blue-100 shadow-2xl shadow-blue-100/50 overflow-hidden grid grid-cols-1 md:grid-cols-2 relative">
        
        {/* Tombol Kembali ke Beranda - lebih atas & kiri */}
        <button 
          onClick={onBackToHome}
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#609EF5] transition-colors cursor-pointer bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-100 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Beranda
        </button>

        {/* ================= LEFT SIDE: FORM LOGIN / SIGNUP ================= */}
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between pt-16">
          <div className="space-y-6">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="BabySteps" className="h-8 w-auto object-contain" />
            </div>

            {/* Header Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {isSignUp 
                  ? <>Buat Akun Baru <Sparkles className="inline w-5 h-5 text-amber-400" /></>
                  : <>Selamat Datang! <Hand className="inline w-5 h-5 text-blue-500" /></>}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                {isSignUp 
                  ? 'Mulai pantau tumbuh kembang si kecil dengan lebih tenang.' 
                  : 'Masukkan detail akun Mama untuk mengakses dashboard.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Field Nama Lengkap (Khusus Sign Up) */}
              {isSignUp && (
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 ml-1">Nama Lengkap Mama/Papa</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input 
                      type="text" 
                      required
                      placeholder="Mama Ayu" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 focus:border-[#609EF5] focus:bg-white rounded-2xl text-xs font-semibold focus:outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Field Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 ml-1">Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input 
                    type="email" 
                    required
                    placeholder="mama.ayu@gmail.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 focus:border-[#609EF5] focus:bg-white rounded-2xl text-xs font-semibold focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Field Password */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 ml-1">Kata Sandi</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#609EF5] absolute left-4 top-3.5" />
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    required
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-11 pr-11 py-3 bg-slate-50 border-2 border-slate-100 focus:border-[#609EF5] focus:bg-white rounded-2xl text-xs font-semibold focus:outline-none transition-all"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me / Forgot Password */}
              {!isSignUp && (
                <div className="flex justify-between items-center text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-600">
                    <input 
                      type="checkbox" 
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                      className="rounded border-slate-300 text-[#609EF5] focus:ring-0" 
                    />
                    Ingat saya
                  </label>
                  <a href="#" className="font-bold text-[#609EF5] hover:underline">Lupa password?</a>
                </div>
              )}

              {/* Main Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#609EF5] hover:bg-blue-600 text-white font-extrabold py-3.5 rounded-2xl text-xs shadow-md shadow-blue-200 transition-all cursor-pointer transform active:scale-95 mt-2 flex items-center justify-center gap-2"
              >
                {isSignUp ? (
                  <>Daftar Akun Gratis <Rocket className="w-4 h-4" /></>
                ) : (
                  <>Masuk Ke Dashboard <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <span className="relative bg-white px-3 text-[10px] font-bold text-slate-400 uppercase">Atau</span>
            </div>

            {/* Google Login */}
            <button 
              type="button"
              onClick={onLoginSuccess}
              className="w-full bg-white hover:bg-slate-50 border-2 border-slate-100 font-bold text-slate-700 py-3 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Masuk dengan Google
            </button>
          </div>

          {/* Bottom Switcher */}
          <div className="text-center pt-6 text-xs text-slate-500">
            {isSignUp ? 'Sudah punya akun?' : 'Belum memiliki akun?'}{' '}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-extrabold text-[#609EF5] hover:underline cursor-pointer"
            >
              {isSignUp ? 'Masuk Sekarang' : 'Daftar Gratis'}
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE: PASTEL VISUAL CARD ================= */}
        <div className="hidden md:flex bg-gradient-to-br from-[#BADAFF] via-[#D6C7FF] to-[#FFF78A] p-10 flex-col justify-between relative overflow-hidden">
          
          {/* Ambient Blurred Shapes */}
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/30 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#FFF78A]/50 rounded-full filter blur-2xl"></div>

          {/* Top Pill Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-slate-800 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-300" />
              Teman Setia Orang Tua
            </span>
          </div>

          {/* Middle Pastel Widget Illustration */}
          <div className="relative z-10 space-y-4 my-8">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 rounded-2xl bg-[#FFF78A] flex items-center justify-center shadow-sm overflow-hidden">
                  <img src={babyco} alt="Baby" className="w-40 h-40 object-contain" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Pantau Tanpa Cemas</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Nutrisi & Stok ASI Terorganisir</p>
                </div>
              </div>
              <div className="bg-[#F0F4FA] p-3 rounded-xl flex justify-between items-center text-xs">
                <span className="text-slate-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sesuai Standar WHO
                </span>
                <span className="font-black text-[#609EF5]">100% Akurat</span>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-400 text-white flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <p className="text-xs font-bold text-slate-800">
                "2.400+ Mama merasa lebih tenang setiap hari."
              </p>
            </div>
          </div>

          {/* Bottom Footer Quote */}
          <div className="relative z-10 text-xs text-slate-700 font-medium border-t border-slate-900/10 pt-4 flex items-center justify-between">
            <span>© 2026 BabySteps Inc.</span>
            <span className="flex items-center gap-1 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-700" /> Aman & Terenkripsi
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}