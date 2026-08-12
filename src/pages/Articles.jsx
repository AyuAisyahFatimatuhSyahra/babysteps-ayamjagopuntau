import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import {Search, ArrowRight} from "lucide-react";

export default function Articles({onNavigate, onLogin}){

const articles=[
{
title:"How Much Milk Does My Baby Need?",
category:"Nutrition",
desc:"Understand daily milk intake and nutrition needs based on your baby's growth stage."
},
{
title:"Baby Sleep Patterns By Age",
category:"Sleep",
desc:"Learn about healthy sleep routines and common changes during development."
},
{
title:"Signs Your Baby Is Growing Well",
category:"Growth",
desc:"Discover important milestones and signals of healthy baby development."
},
{
title:"Understanding Baby Crying Patterns",
category:"Parenting",
desc:"Learn how to recognize different baby signals and respond confidently."
},
{
title:"Breast Milk Storage Guide",
category:"Breastfeeding",
desc:"A simple guide to storing and managing breast milk safely."
},
{
title:"Baby Development Checklist",
category:"Development",
desc:"Track important skills your baby develops month by month."
}
];


return(
<div className="min-h-screen bg-[#FDFBF7] text-slate-800">

<Navbar
onNavigate={onNavigate}
onLogin={onLogin}
/>

<section className="py-20 text-center">

<div className="max-w-5xl mx-auto px-6">

<h1 className="text-5xl font-black text-slate-900">
BabySteps Articles
</h1>

<p className="mt-4 text-slate-600 text-lg">
Expert parenting guides to help you understand your baby's needs.
</p>


<div className="
mt-10
max-w-2xl
mx-auto
flex
items-center
bg-white
border
rounded-full
px-5
py-3
">

<Search className="text-slate-400"/>

<input
placeholder="Search parenting articles..."
className="
ml-3
w-full
outline-none
text-sm
"
/>

</div>

</div>

</section>



<section className="py-10">

<div className="max-w-6xl mx-auto px-6">

<SectionTitle
title="Latest Parenting Guides"
desc="Helpful information for every stage of your baby's journey."
/>


<div className="
grid
md:grid-cols-3
gap-6
mt-10
">


{
articles.map((item,i)=>(

<div
key={i}
className="
bg-white
rounded-3xl
border
border-slate-100
p-6
shadow-sm
hover:shadow-md
transition
"
>


<span className="
bg-[#BADAFF]
px-3
py-1
rounded-full
text-xs
font-bold
">

{item.category}

</span>


<h3 className="
font-black
text-xl
mt-5
">

{item.title}

</h3>


<p className="
text-sm
text-slate-600
mt-3
">

{item.desc}

</p>


<button className="
mt-5
flex
items-center
gap-2
text-[#609EF5]
font-bold
text-sm
">

Read More

<ArrowRight size={16}/>

</button>


</div>

))

}


</div>

</div>

</section>


<Footer/>

</div>
)

}