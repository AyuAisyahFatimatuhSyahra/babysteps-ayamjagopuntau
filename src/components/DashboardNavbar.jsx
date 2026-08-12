import React from "react";
import logo from "../assets/babysteps.png";
import { LogOut } from "lucide-react";

export default function DashboardNavbar({
  onNavigate,
  onLogout
}) {

const menu = [
  {
    title:"Tracking",
    page:"tracking",
  },
  {
    title:"AI Baby",
    page:"ai",
  },
  {
    title:"Dokter",
    page:"health",
  },
  {
    title:"Family",
    page:"family",
  },
  {
    title:"Smart Tracking",
    page:"tracking"
  }
];

return (
<header
className="
bg-white
border-b
border-slate-100
sticky
top-0
z-50
font-['Poppins',sans-serif]
"
>

<div
className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
"
>

{/* LOGO */}
<button
onClick={()=>onNavigate("dashboard")}
className="cursor-pointer"
>
<img
src={logo}
alt="BabySteps"
className="
h-10
w-auto
object-contain
"
/>
</button>

{/* MENU */}
<nav
className="
flex
items-center
gap-8
"
>
{
menu.map((item,index)=>(
<button
key={index}
onClick={()=>onNavigate(item.page)}
className="
text-sm
font-bold
text-slate-600
hover:text-[#609EF5]
transition
cursor-pointer
"
>
{item.title}
</button>
))
}
</nav>


{/* USER & PROFILE */}
<div
className="
flex
items-center
gap-6
"
>

{/* BAGIAN PROFIL MAMA AYU */}
<div className="flex items-center gap-3">
  <img 
    src="https://i.pravatar.cc/150?img=5" 
    alt="Foto Profil Mama Ayu" 
    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
  />
  <span
  className="
  text-sm
  font-bold
  text-slate-700
  "
  >
  Mama Ayu
  </span>
</div>


{/* TOMBOL LOGOUT MERAH DENGAN IKON PANAH */}
<button
onClick={onLogout}
className="
flex
items-center
gap-2
bg-rose-500
hover:bg-rose-600
text-white
px-5
py-2.5
rounded-full
font-bold
text-sm
transition
cursor-pointer
"
>
Logout
<LogOut className="w-4 h-4" />
</button>

</div>

</div>

</header>
)
}