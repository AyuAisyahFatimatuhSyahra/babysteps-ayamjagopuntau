import React, {useState} from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import heroImage from "../assets/hero.png";

import {
  TrendingUp,
  Droplets,
  Moon,
  Milk,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Plus,
  Check,
  Heart,
  Baby,
  Package,
  Clock3,
  Bell,
  Save,
  CircleCheck,
  Activity,
  CalendarDays
} from "lucide-react";

export default function SmartTracking({onNavigate,onLogout}){

// ==========================================
// STATE MANAGEMENT (Diperbarui dengan fungsi real)
// ==========================================

// 1. Growth State
const [weightInput,setWeightInput]=useState("6.2");
const [savedWeight,setSavedWeight]=useState("6.2");
const [openGrowth,setOpenGrowth]=useState(true);

// 2. Hydration State
const [openHydration,setOpenHydration]=useState(true);
const [hydrationLogs,setHydrationLogs]=useState([
  {type:"BAK",time:"08:00"},
  {type:"BAB Normal",time:"11:30"}
]);

// 3. Sleep State
const [openSleep,setOpenSleep]=useState(true);
const [sleepStart,setSleepStart]=useState("");
const [sleepEnd,setSleepEnd]=useState("");
const [sleepLogs,setSleepLogs]=useState([
  {start: "20:00", end: "07:00"}
]);

// 4. Extra Tracking State (Feeding)
const [openExtra,setOpenExtra]=useState("feeding");
const [feedingAmount,setFeedingAmount]=useState("");
const [feedingType,setFeedingType]=useState("asi");
const [feedingLogs,setFeedingLogs]=useState([
  {amount: "120", type: "asi"},
  {amount: "150", type: "formula"}
]);

// 5. Schedule State
const [schedule,setSchedule]=useState([
  {time:"09:00",title:"Sesi Minum Susu",done:true},
  {time:"14:00",title:"Pump ASI",done:false},
  {time:"16:30",title:"Tidur Sore Arka",done:false}
]);
const [showScheduleForm,setShowScheduleForm]=useState(false);
const [newScheduleTime,setNewScheduleTime]=useState("");
const [newScheduleTitle,setNewScheduleTitle]=useState("");


// ==========================================
// ACTION HANDLERS
// ==========================================

// Growth
const saveWeight=()=>{
  if(!weightInput) return;
  setSavedWeight(weightInput);
  setOpenGrowth(false); // Tutup form setelah simpan
};

// Hydration
const addHydration=(type)=>{
  const time=new Date().toLocaleTimeString("id-ID",{
    hour:"2-digit",
    minute:"2-digit"
  });
  setHydrationLogs(prev=>[...prev, {type,time}]);
};

// Sleep
const saveSleep=()=>{
  if(!sleepStart || !sleepEnd){
    alert("Isi waktu tidur dan bangun terlebih dahulu.");
    return;
  }
  setSleepLogs(prev => [...prev, {start: sleepStart, end: sleepEnd}]);
  setSleepStart("");
  setSleepEnd("");
};

// Feeding
const addFeedingSession=()=>{
  if(!feedingAmount) return;
  setFeedingLogs(prev => [...prev, {amount: feedingAmount, type: feedingType}]);
  setFeedingAmount(""); // Reset input form
};
const totalFeeding = feedingLogs.reduce((sum, log) => sum + parseInt(log.amount || 0), 0);

// Schedule
const toggleSchedule=(index)=>{
  setSchedule(prev=>
    prev.map((item,i)=>
      i===index ? {...item,done:!item.done} : item
    )
  );
};
const saveSchedule=()=>{
  if(!newScheduleTime || !newScheduleTitle) return;
  setSchedule(prev => {
    const updated = [...prev, {time: newScheduleTime, title: newScheduleTitle, done: false}];
    return updated.sort((a,b) => a.time.localeCompare(b.time)); // Urutkan berdasarkan jam
  });
  setNewScheduleTime("");
  setNewScheduleTitle("");
  setShowScheduleForm(false);
};

return(
<div className="min-h-screen bg-[#F7F9FC] font-sans text-slate-800 pb-16">

<DashboardNavbar
  onNavigate={onNavigate}
  onLogout={onLogout}
/>

<main className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8 space-y-5 sm:space-y-6">


{/* =========================================================
    BREADCRUMB
========================================================= */}
<div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 overflow-x-auto whitespace-nowrap">
  <button
    onClick={()=>onNavigate("dashboard")}
    className="hover:text-[#609EF5] transition"
  >
    Home
  </button>
  <span>/</span>
  <span className="font-bold text-[#609EF5]">
    Smart Tracking
  </span>
</div>


{/* =========================================================
    HERO / BABY WELLNESS
========================================================= */}
<section className="bg-white rounded-[28px] sm:rounded-[34px] border border-slate-100 shadow-sm overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

{/* HERO LEFT */}
<div className="relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#FCF8F5] via-[#F6F6FB] to-[#EDF4FF] min-h-[330px] sm:min-h-[390px] flex flex-col justify-between overflow-hidden">
<div className="relative z-10">
<p className="text-[10px] sm:text-xs font-black tracking-[0.16em] uppercase text-[#609EF5]">Growth Companion</p>
<h1 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] leading-[1.08] font-black text-slate-900">
Good Morning,<br/>Mama Rara <span className="text-rose-400"> ♥</span>
</h1>
<p className="mt-3 text-xs sm:text-sm text-slate-500">Lihat perkembangan kecil Arka hari ini.</p>
<div className="mt-5 inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold">
<CircleCheck className="w-3.5 h-3.5"/> Arka berkembang dengan baik
</div>
</div>
<div className="relative z-10 flex justify-center items-end mt-4">
<img src={heroImage} alt="Mama dan bayi" className="w-[190px] sm:w-[220px] lg:w-[250px] max-h-[220px] object-contain"/>
</div>
<div className="absolute w-32 h-32 bg-[#FFF78A]/30 rounded-full -blur-sm -bottom-10 -left-10"/>
</div>

{/* HERO RIGHT */}
<div className="p-6 sm:p-8 lg:p-10 bg-[#F8FAFF] flex flex-col justify-center">
<p className="text-center font-black text-sm sm:text-base text-slate-900">Baby Wellness Today</p>

{/* WELLNESS RING */}
<div className="flex justify-center mt-6">
<div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[conic-gradient(#FDE63F_0deg,#FDE63F_331deg,#EDF0F5_331deg)] flex items-center justify-center">
<div className="w-[82px] h-[82px] sm:w-[92px] sm:h-[92px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
<span className="text-2xl sm:text-3xl font-black text-slate-900">92%</span>
<span className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Wellness</span>
</div>
</div>
</div>
<div className="text-center mt-6">
<h3 className="font-black text-sm sm:text-base text-slate-900">Kondisi Arka hari ini sangat baik</h3>
<p className="text-[10px] sm:text-xs text-slate-400 mt-1.5 max-w-sm mx-auto leading-relaxed">Berdasarkan pertumbuhan, hidrasi, tidur, dan aktivitas harian.</p>
</div>

<div className="space-y-2.5 mt-6">
<WellnessRow icon={<TrendingUp className="w-4 h-4"/>} label="Growth" value={`${savedWeight} kg`} status="Sesuai jalur" bg="bg-[#FFF78A]" />
<WellnessRow icon={<Droplets className="w-4 h-4"/>} label="Hidrasi" value={`${hydrationLogs.filter(l=>l.type==="BAK").length}x BAK`} status={`${hydrationLogs.filter(l=>l.type.includes("BAB")).length}x BAB`} bg="bg-[#BADAFF]" />
<WellnessRow icon={<Moon className="w-4 h-4"/>} label="Tidur" value={`${sleepLogs.length} Sesi`} status="Pola baik" bg="bg-[#D6C7FF]" />
</div>
</div>

</div>
</section>


{/* =========================================================
    GROWTH INTELLIGENCE
========================================================= */}
<section className="bg-[#FFF47F] rounded-[26px] sm:rounded-[30px] overflow-hidden border border-yellow-200">
<div className="p-5 sm:p-7">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-2xl bg-white/70 flex items-center justify-center"><TrendingUp className="w-5 h-5"/></div>
<div>
<h2 className="font-black text-sm sm:text-base text-slate-900">Pertumbuhan Arka</h2>
<p className="text-[10px] sm:text-xs text-slate-600">Berat badan saat ini</p>
</div>
</div>
<button onClick={()=>setOpenGrowth(!openGrowth)} className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center">
{openGrowth ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
</button>
</div>

<div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="flex items-end gap-2">
<span className="text-4xl sm:text-5xl font-black text-slate-900">{savedWeight}</span>
<span className="text-sm font-black mb-1">kg</span>
</div>
<div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 rounded-full px-3 py-1.5 text-[10px] font-bold">
<CircleCheck className="w-3.5 h-3.5"/> Sesuai jalur pertumbuhan WHO
</div>
</div>
<button onClick={()=>setOpenGrowth(true)} className="bg-white/80 hover:bg-white px-4 py-2.5 rounded-full text-xs font-black flex items-center justify-center gap-1.5 transition">
<Plus className="w-4 h-4"/> Update Berat
</button>
</div>

{openGrowth && (
<div className="mt-7 space-y-5">
{/* JOURNEY */}
<div>
<p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 mb-4">Perjalanan Tumbuh Kembang</p>
<div className="grid grid-cols-4 gap-2">
{[["Lahir","3.3 kg"], ["1 Bulan","4.4 kg"], ["2 Bulan","5.5 kg"], ["3 Bulan", `${savedWeight} kg`]].map((item,index)=>(
<div key={index} className="relative text-center">
<div className="mx-auto w-8 h-8 rounded-full bg-[#609EF5] text-white flex items-center justify-center"><Check className="w-4 h-4"/></div>
<p className="mt-2 text-[9px] sm:text-[10px] font-bold">{item[0]}</p>
<p className="text-[9px] text-slate-500">{item[1]}</p>
</div>
))}
</div>
</div>

{/* UPDATE WEIGHT FORM */}
<div className="bg-white/65 rounded-[22px] p-4 sm:p-5">
<h3 className="font-black text-xs sm:text-sm">Update Berat</h3>
<div className="mt-3 flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<input type="number" step="0.1" value={weightInput} onChange={(e)=>setWeightInput(e.target.value)} className="w-full bg-white border border-yellow-100 rounded-xl px-4 py-3 pr-12 text-sm font-bold outline-none focus:ring-2 focus:ring-yellow-300"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">kg</span>
</div>
<button onClick={saveWeight} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-xs hover:bg-slate-800">Simpan</button>
</div>
<p className="text-[10px] text-slate-500 mt-3">Target berikutnya: <b>6.5 kg</b></p>
<div className="grid grid-cols-2 gap-3 mt-4">
<MiniStat label="Hari ini" value={`${savedWeight} kg`}/>
<MiniStat label="Bulan lalu" value="5.8 kg"/>
</div>
</div>
</div>
)}
</div>
</section>


{/* =========================================================
    HYDRATION & DIGESTION
========================================================= */}
<section className="bg-[#AED4FF] rounded-[26px] sm:rounded-[30px] overflow-hidden">
<div className="p-5 sm:p-7">
<SectionHeader icon={<Droplets className="w-5 h-5"/>} title="Hidrasi & Pencernaan" subtitle="Pantau BAB & BAK Arka" open={openHydration} onToggle={()=>setOpenHydration(!openHydration)}/>

<div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl font-black">{hydrationLogs.filter(l=>l.type==="BAK").length}x</span>
<span className="text-sm font-bold text-slate-600">BAK hari ini</span>
</div>
<div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 rounded-full px-3 py-1.5 text-[10px] font-bold">
<CircleCheck className="w-3.5 h-3.5"/> Hidrasi baik • {hydrationLogs.filter(l=>l.type.includes("BAB")).length}x BAB
</div>
</div>
<button onClick={()=>setOpenHydration(true)} className="bg-white/75 px-4 py-2.5 rounded-full text-xs font-black flex items-center justify-center gap-1.5">
<Plus className="w-4 h-4"/> Tambah Catatan
</button>
</div>

{openHydration && (
<div className="mt-6 pt-5 border-t border-white/40">
<p className="text-[9px] font-black tracking-[0.14em] uppercase text-slate-500">Catat Sekarang</p>
<div className="grid grid-cols-3 gap-2 mt-3">
<button onClick={()=>addHydration("BAK")} className="bg-white/75 rounded-xl py-3 text-xs font-black hover:bg-white">BAK</button>
<button onClick={()=>addHydration("BAB Normal")} className="bg-white/75 rounded-xl py-3 text-xs font-black hover:bg-white">BAB Normal</button>
<button onClick={()=>addHydration("BAB Cair")} className="bg-white/75 rounded-xl py-3 text-xs font-black hover:bg-white">BAB Cair</button>
</div>
<p className="mt-5 text-[9px] font-black tracking-[0.14em] uppercase text-slate-500">Log Hari Ini</p>
<div className="space-y-2 mt-3">
{hydrationLogs.map((item,index)=>(
<div key={index} className="bg-white/65 rounded-xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-[#609EF5] text-white flex items-center justify-center"><Droplets className="w-3.5 h-3.5"/></div>
<span className="text-xs font-bold">{item.type}</span>
</div>
<span className="text-[10px] text-slate-500">{item.time}</span>
</div>
))}
</div>
</div>
)}
</div>
</section>


{/* =========================================================
    SLEEP QUALITY
========================================================= */}
<section className="bg-[#D6C7FF] rounded-[26px] sm:rounded-[30px] overflow-hidden">
<div className="p-5 sm:p-7">
<SectionHeader icon={<Moon className="w-5 h-5"/>} title="Kualitas Tidur" subtitle="Bagaimana tidur Arka?" open={openSleep} onToggle={()=>setOpenSleep(!openSleep)}/>

<div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl font-black">{sleepLogs.length}</span>
<span className="text-sm font-bold text-slate-600">Sesi tidur hari ini</span>
</div>
<div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 rounded-full px-3 py-1.5 text-[10px] font-bold">
<CircleCheck className="w-3.5 h-3.5"/> Pola tidur baik
</div>
</div>
<button onClick={()=>setOpenSleep(true)} className="bg-white/75 px-4 py-2.5 rounded-full text-xs font-black flex items-center justify-center gap-1.5">
<Plus className="w-4 h-4"/> Catat Tidur
</button>
</div>

{openSleep && (
<div className="mt-6 pt-5 border-t border-white/40">
<p className="text-[9px] uppercase tracking-[0.14em] font-black text-slate-500 mb-3">Daftar Sesi Tidur</p>

<div className="space-y-2 mb-5">
{sleepLogs.map((log, index) => (
  <div key={index} className="bg-white/65 rounded-xl px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-lg bg-purple-500 text-white flex items-center justify-center"><Moon className="w-3.5 h-3.5"/></div>
      <span className="text-xs font-bold">Sesi {index + 1}</span>
    </div>
    <span className="text-xs font-black text-slate-700">{log.start} - {log.end}</span>
  </div>
))}
</div>

<div className="bg-white/55 rounded-[20px] p-4 mt-5">
<h3 className="text-xs font-black">Tambah Catatan Tidur</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
<div>
<label className="text-[10px] text-slate-500">Tidur</label>
<input type="time" value={sleepStart} onChange={(e)=>setSleepStart(e.target.value)} className="mt-1 w-full bg-white rounded-xl border border-purple-100 px-3 py-3 text-sm outline-none"/>
</div>
<div>
<label className="text-[10px] text-slate-500">Bangun</label>
<input type="time" value={sleepEnd} onChange={(e)=>setSleepEnd(e.target.value)} className="mt-1 w-full bg-white rounded-xl border border-purple-100 px-3 py-3 text-sm outline-none"/>
</div>
</div>

<div className="mt-3">
<button onClick={saveSleep} className="w-full bg-slate-900 text-white rounded-xl py-3 text-xs font-black hover:bg-slate-800">
Simpan Sesi Tidur
</button>
</div>
</div>

</div>
)}
</div>
</section>


{/* =========================================================
    TRACKING TAMBAHAN
========================================================= */}
<section className="bg-white rounded-[26px] sm:rounded-[30px] border border-slate-100 shadow-sm overflow-hidden">
<div className="px-5 sm:px-6 py-4 flex items-center justify-between">
<h2 className="font-black text-sm sm:text-base">Tracking Tambahan</h2>
<span className="bg-slate-100 text-slate-400 text-[9px] font-black px-2.5 py-1 rounded-full">DETAIL</span>
</div>

<AccordionRow id="feeding" openSection={openExtra} setOpenSection={setOpenExtra} icon={<Milk className="w-4 h-4"/>} iconBg="bg-[#BADAFF]" title="Feeding Intelligence" subtitle={`${totalFeeding} ml • ±${Math.round(totalFeeding * 0.7)} kcal`}>
<div className="space-y-4">

{/* Log Tampilan Minum Susu */}
<div className="space-y-2">
  {feedingLogs.map((log, idx) => (
    <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100 text-xs font-bold">
      <div className="flex items-center gap-2">
        <Milk className="w-3.5 h-3.5 text-[#609EF5]" />
        <span className="capitalize">{log.type === 'asi' ? 'ASI Perah' : 'Susu Formula'}</span>
      </div>
      <span>{log.amount} ml</span>
    </div>
  ))}
</div>

{/* Form Tambah Minum */}
<div className="pt-3 border-t border-slate-200 mt-2">
  <p className="text-[10px] font-bold text-slate-500 mb-2">Tambah Sesi Baru</p>
  <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
    <input type="number" placeholder="Jumlah (ml)" value={feedingAmount} onChange={(e)=>setFeedingAmount(e.target.value)} className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:border-[#609EF5]"/>
    <div className="grid grid-cols-2 gap-2">
      <button onClick={()=>setFeedingType("asi")} className={`rounded-xl py-3 text-xs font-black transition ${feedingType==="asi" ? "bg-[#609EF5] text-white" : "bg-white border border-slate-200 text-slate-500"}`}>ASI Perah</button>
      <button onClick={()=>setFeedingType("formula")} className={`rounded-xl py-3 text-xs font-black transition ${feedingType==="formula" ? "bg-[#609EF5] text-white" : "bg-white border border-slate-200 text-slate-500"}`}>Susu Formula</button>
    </div>
  </div>
</div>

<div className="bg-blue-50/50 rounded-xl px-4 py-3 text-xs font-black text-blue-900 border border-blue-100">
Total Harian: {totalFeeding} ml • ±{Math.round(totalFeeding * 0.7)} kcal
</div>

<button onClick={addFeedingSession} className="w-full bg-[#609EF5] hover:bg-blue-600 text-white py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2">
<Plus className="w-4 h-4"/> Tambah Sesi
</button>

</div>
</AccordionRow>

<AccordionRow id="behavior" openSection={openExtra} setOpenSection={setOpenExtra} icon={<Heart className="w-4 h-4"/>} iconBg="bg-rose-100" title="Feeding Behavior" subtitle="Menyusu dengan baik">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<ChoiceCard label="Durasi" value="15 menit"/>
<ChoiceCard label="Saat menyusu" value="Tenang"/>
<ChoiceCard label="Setelah menyusu" value="Nyaman"/>
</div>
</AccordionRow>

<AccordionRow id="crying" openSection={openExtra} setOpenSection={setOpenExtra} icon={<Baby className="w-4 h-4"/>} iconBg="bg-[#FFF78A]" title="Crying Pattern" subtitle="4x hari ini • Pola normal">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<ChoiceCard label="Frekuensi" value="4x"/>
<ChoiceCard label="Rata-rata" value="8 menit"/>
<ChoiceCard label="Dominan" value="Menjelang tidur"/>
</div>
</AccordionRow>

<AccordionRow id="milk" openSection={openExtra} setOpenSection={setOpenExtra} icon={<Package className="w-4 h-4"/>} iconBg="bg-emerald-100" title="Milk Inventory" subtitle="Stok ASI cukup untuk 5 hari">
<div className="space-y-3">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<MiniStat label="Stok" value="12 Bag"/>
<MiniStat label="Total" value="1.4 L"/>
<MiniStat label="Cukup" value="5 Hari"/>
<MiniStat label="FIFO" value="Aman"/>
</div>
<button className="w-full bg-emerald-100 text-emerald-700 py-3 rounded-xl text-xs font-black">Kelola Stok ASI</button>
</div>
</AccordionRow>
</section>


{/* =========================================================
    JADWAL HARI INI
========================================================= */}
<section className="bg-white rounded-[26px] sm:rounded-[30px] border border-slate-100 shadow-sm p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-[#FFF78A] flex items-center justify-center"><Clock3 className="w-4 h-4"/></div>
<h2 className="font-black text-sm sm:text-base">Jadwal Hari Ini</h2>
</div>
<button onClick={() => setShowScheduleForm(!showScheduleForm)} className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-full text-[10px] font-black flex items-center gap-1 transition">
<Plus className="w-3.5 h-3.5"/> Tambah
</button>
</div>

{/* Form Tambah Jadwal */}
{showScheduleForm && (
  <div className="bg-slate-50 p-4 rounded-xl mt-4 mb-2 border border-slate-200">
    <div className="flex gap-2">
      <input type="time" value={newScheduleTime} onChange={e=>setNewScheduleTime(e.target.value)} className="w-24 p-2 rounded-lg border border-slate-200 text-xs font-bold outline-none"/>
      <input type="text" placeholder="Nama aktivitas..." value={newScheduleTitle} onChange={e=>setNewScheduleTitle(e.target.value)} className="flex-1 p-2 rounded-lg border border-slate-200 text-xs font-bold outline-none"/>
    </div>
    <div className="flex gap-2 mt-3 justify-end">
      <button onClick={()=>setShowScheduleForm(false)} className="px-3 py-1.5 text-xs text-slate-500 font-bold hover:bg-slate-100 rounded-lg">Batal</button>
      <button onClick={saveSchedule} className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800">Simpan Jadwal</button>
    </div>
  </div>
)}

<div className="space-y-2.5 mt-5">
{schedule.map((item,index)=>(
<button key={index} onClick={()=>toggleSchedule(index)} className={`w-full rounded-xl px-3 sm:px-4 py-3 flex items-center gap-3 text-left transition ${item.done ? "bg-emerald-100" : "bg-slate-100"}`}>
<div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${item.done ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-slate-300"}`}>
{item.done && <Check className="w-4 h-4"/>}
</div>
<span className="text-[10px] text-slate-500 w-11 shrink-0">{item.time}</span>
<span className={`text-xs sm:text-sm font-bold flex-1 ${item.done ? "line-through text-slate-600" : "text-slate-800"}`}>{item.title}</span>
<Bell className="w-4 h-4 text-[#609EF5] shrink-0"/>
</button>
))}
</div>
</section>


{/* =========================================================
    AI INSIGHT
========================================================= */}
<section className="bg-[#D6C7FF] rounded-[26px] sm:rounded-[30px] p-5 sm:p-7">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/60 rounded-xl flex items-center justify-center"><Sparkles className="w-5 h-5"/></div>
<div>
<h2 className="font-black text-sm sm:text-base">Insight BabySteps Hari Ini</h2>
<p className="text-[10px] text-slate-600">Dipersonalisasi untuk Arka</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[130px_1fr] gap-4 mt-5 items-center">
<div className="hidden lg:flex justify-center">
<div className="w-24 h-20 rounded-2xl bg-white/40 flex items-center justify-center"><Sparkles className="w-9 h-9 text-purple-700"/></div>
</div>
<div className="space-y-2">
<InsightItem>Berat Arka <b>meningkat sesuai target</b> bulan ini.</InsightItem>
<InsightItem>Pola BAB dan BAK menunjukkan <b>hidrasi baik.</b></InsightItem>
<InsightItem>Arka tidur <b>cukup sesuai</b> kebiasaan usianya.</InsightItem>
</div>
</div>
</section>

</main>
</div>
);
}

/* =========================================================
   SUPPORT COMPONENTS
========================================================= */

function WellnessRow({icon, label, value, status, bg}){
return(
<div className={`${bg} rounded-xl px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3`}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/55 flex items-center justify-center">{icon}</div>
<div>
<p className="text-[9px] text-slate-500">{label}</p>
<p className="text-xs sm:text-sm font-black">{value}</p>
</div>
</div>
<span className="text-[9px] text-slate-600 text-right">{status}</span>
</div>
);
}

function SectionHeader({icon, title, subtitle, open, onToggle}){
return(
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-2xl bg-white/55 flex items-center justify-center">{icon}</div>
<div>
<h2 className="font-black text-sm sm:text-base">{title}</h2>
<p className="text-[10px] sm:text-xs text-slate-600">{subtitle}</p>
</div>
</div>
<button onClick={onToggle} className="w-9 h-9 bg-white/55 rounded-full flex items-center justify-center shrink-0">
{open ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
</button>
</div>
);
}

function MiniStat({label,value}){
return(
<div className="bg-white rounded-xl p-3 text-center">
<p className="text-[9px] text-slate-400">{label}</p>
<p className="text-xs font-black mt-1">{value}</p>
</div>
);
}

function AccordionRow({id, openSection, setOpenSection, icon, iconBg, title, subtitle, children}){
const open = openSection === id;
return(
<div className="border-t border-slate-100">
<button onClick={()=>setOpenSection(open ? null : id)} className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left">
<div className="flex items-center gap-3">
<div className={`${iconBg} w-9 h-9 rounded-xl flex items-center justify-center`}>{icon}</div>
<div>
<h3 className="font-black text-xs sm:text-sm">{title}</h3>
<p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">{subtitle}</p>
</div>
</div>
{open ? <ChevronUp className="w-4 h-4 text-slate-400"/> : <ChevronDown className="w-4 h-4 text-slate-400"/>}
</button>
{open && (
<div className="px-5 sm:px-6 pb-5">
<div className="bg-slate-50 rounded-[20px] p-4">{children}</div>
</div>
)}
</div>
);
}

function ChoiceCard({label,value}){
return(
<div className="bg-white border border-slate-100 rounded-xl p-3">
<p className="text-[9px] uppercase tracking-wide text-slate-400 font-bold">{label}</p>
<p className="mt-1 text-xs font-black">{value}</p>
</div>
);
}

function InsightItem({children}){
return(
<div className="bg-white/90 rounded-full px-4 py-3 text-[11px] sm:text-xs text-slate-700">{children}</div>
);
}