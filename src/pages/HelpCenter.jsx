import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, ArrowRight } from "lucide-react";


export default function HelpCenter({ onNavigate, onLogin }) {


const categories = [
  {
    title:"BabySteps Membership",
    desc:"Learn about subscription plans, upgrades, and membership benefits."
  },
  {
    title:"App Features",
    desc:"Find guides about baby tracking, AI insights, and parenting tools."
  },
  {
    title:"Account & Baby Profile",
    desc:"Manage your account, baby profile, and personal information."
  },
  {
    title:"General Questions",
    desc:"Find answers about BabySteps usage and common problems."
  }
];


return (

<div className="min-h-screen bg-[#FDFBF7] text-slate-800">


{/* NAVBAR */}
<Navbar
  onNavigate={onNavigate}
  onLogin={onLogin}
/>



{/* HERO */}
<section className="
py-24
text-center
bg-[#F0F8FF]
">


<div className="max-w-5xl mx-auto px-6">


<h1 className="
text-5xl
font-black
text-slate-900
">

How can we help?

</h1>


<p className="
mt-4
text-lg
text-slate-600
">

Find answers about BabySteps features, account, and parenting tools.

</p>



<div className="
mt-10
max-w-2xl
mx-auto
bg-white
border
border-slate-200
rounded-full
flex
items-center
px-5
py-3
">


<Search className="text-slate-400"/>


<input

placeholder="Search help articles..."

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




{/* CATEGORY */}
<section className="py-20">


<div className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-4
gap-6
">


{
categories.map((item,index)=>(


<div

key={index}

className="
bg-white
border
border-slate-100
rounded-3xl
p-8
hover:shadow-md
hover:border-[#609EF5]
transition
"


>


<h3 className="
font-black
text-xl
text-slate-900
">

{item.title}

</h3>



<p className="
mt-3
text-sm
text-slate-500
leading-relaxed
">

{item.desc}

</p>



<button

className="
mt-5
flex
items-center
gap-2
text-[#609EF5]
font-bold
text-sm
"

>

Explore

<ArrowRight size={16}/>

</button>


</div>


))

}


</div>


</section>





{/* FAQ */}
<section className="
py-16
text-center
bg-white
">


<div className="max-w-3xl mx-auto px-6">


<h2 className="
text-3xl
font-black
text-slate-900
">

General Questions - BabySteps App

</h2>


<p className="
mt-4
text-slate-600
">

Can't find your answer? Contact our support team.

</p>



<button

onClick={onLogin}

className="
mt-8
bg-[#609EF5]
text-white
font-bold
px-7
py-3
rounded-full
hover:bg-blue-600
transition
"

>

Contact Support

</button>


</div>


</section>





<Footer/>


</div>

)

}