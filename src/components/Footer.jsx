import React from "react";
import logo from "../assets/babysteps.png";
import { Mail } from "lucide-react";

export default function Footer(){

return(
<footer className="
bg-[#BADAFF]/50
border-t
border-blue-100
pt-16
pb-8
">

<div className="
max-w-7xl
mx-auto
px-6
grid
grid-cols-1
md:grid-cols-4
gap-10
pb-12
">


{/* LOGO */}
<div className="
space-y-4
">

<img
src={logo}
alt="BabySteps Logo"
className="
h-10
w-auto
object-contain
"
/>

<p className="
text-slate-600
text-xs
leading-relaxed
">

BabySteps adalah platform pintar untuk membantu
orang tua memantau tumbuh kembang bayi,
nutrisi, tidur, dan kesehatan harian.

</p>

</div>



{/* MENU */}

<div className="
space-y-3
">

<h4 className="
font-bold
text-xs
uppercase
tracking-wider
text-slate-900
">

MENU

</h4>


<ul className="
space-y-2
text-xs
text-slate-600
">

<li>
<a href="/" className="hover:text-blue-600">
Home
</a>
</li>

<li>
<a href="#challenges" className="hover:text-blue-600">
Our Challenges
</a>
</li>

<li>
<a href="#features" className="hover:text-blue-600">
App Features & Pricing
</a>
</li>

<li>
<a href="/articles" className="hover:text-blue-600">
Articles
</a>
</li>

<li>
<a href="/help" className="hover:text-blue-600">
Help Center
</a>
</li>

</ul>

</div>




{/* INFORMATION */}

<div className="
space-y-3
">

<h4 className="
font-bold
text-xs
uppercase
tracking-wider
text-slate-900
">

INFORMATION

</h4>


<ul className="
space-y-2
text-xs
text-slate-600
">


<li>
<a href="/age-guides" className="hover:text-blue-600">
Age Guides
</a>
</li>


<li>
<a href="#" className="hover:text-blue-600">
Baby Growth Guide
</a>
</li>


<li>
<a href="#" className="hover:text-blue-600">
Nutrition Calculator
</a>
</li>


<li>
<a href="#" className="hover:text-blue-600">
Privacy Policy
</a>
</li>


<li>
<a href="#" className="hover:text-blue-600">
Terms & Conditions
</a>
</li>


</ul>


</div>




{/* NEWSLETTER */}

<div className="
space-y-3
">


<h4 className="
font-bold
text-xs
uppercase
tracking-wider
text-slate-900
">

PARENTING TIPS

</h4>


<p className="
text-slate-600
text-xs
leading-relaxed
">

Dapatkan tips parenting,
perkembangan bayi, dan update fitur
BabySteps langsung ke email.

</p>



<div className="
space-y-2
">


<input
type="email"
placeholder="email@mama.com"
className="
w-full
px-4
py-2.5
bg-white
border
border-slate-200
rounded-full
text-xs
focus:outline-none
"
/>



<button
className="
w-full
bg-[#D6C7FF]
hover:bg-purple-300
text-slate-900
font-bold
py-2.5
rounded-full
text-xs
flex
items-center
justify-center
gap-2
transition
"
>

<Mail className="w-4 h-4"/>

Subscribe

</button>


</div>


</div>


</div>




{/* BOTTOM */}

<div className="
max-w-7xl
mx-auto
px-6
pt-6
border-t
border-slate-200/60
flex
flex-col
sm:flex-row
justify-between
items-center
gap-4
text-[11px]
text-slate-500
">


<p>
© 2026 BabySteps. Made with 💙 for Indonesian parents.
</p>



<div className="
flex
gap-4
font-bold
text-slate-600
">

<span>WHO</span>
<span>IDAI</span>
<span>Kemenkes RI</span>
<span>BPOM</span>

</div>


</div>


</footer>
)

}