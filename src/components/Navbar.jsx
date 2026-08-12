import React from "react";
import logo from "../assets/babysteps.png";

export default function Navbar({onNavigate,onLogin}){

return(
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
onClick={()=>onNavigate("landing")}
className="cursor-pointer"
>

<img
src={logo}
alt="BabySteps Logo"
className="
h-12
w-auto
object-contain
"
/>

</button>



{/* NAVIGATION */}

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
onClick={()=>onNavigate("landing")}
className="
hover:text-[#609EF5]
transition
"
>
Home
</button>



<a
href="#challenges"
className="
hover:text-[#609EF5]
transition
"
>
Our Challenges
</a>



<a
href="#features"
className="
hover:text-[#609EF5]
transition
"
>Features
</a>

<a
href="#pricing"
className="
hover:text-[#609EF5]
transition
"
>
Pricing
</a>

<button
onClick={()=>onNavigate("articles")}
className="
hover:text-[#609EF5]
transition
"
>
Articles
</button>



<button
onClick={()=>onNavigate("help")}
className="
hover:text-[#609EF5]
transition
"
>
Help
</button>



<button
onClick={()=>onNavigate("age-guides")}
className="
hover:text-[#609EF5]
transition
"
>
Age Guides
</button>


</nav>



{/* CTA BUTTON */}

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
hover:scale-105
"
>

Try Free

</button>


</div>

</header>
)

}