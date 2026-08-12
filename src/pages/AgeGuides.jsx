import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function AgeGuides({onNavigate, onLogin}) {


const guides = [

{
age:"Newborn",
title:"0 Month Baby Guide",
desc:"Learn feeding, sleeping, and newborn care basics."
},

{
age:"1-3 Months",
title:"Early Development Guide",
desc:"Understand sleep patterns, growth, and daily routines."
},

{
age:"4-6 Months",
title:"Growth & Milestones",
desc:"Support your baby's physical and cognitive development."
},

{
age:"7-12 Months",
title:"Exploring The World",
desc:"Guide your baby through movement, food, and learning."
}

];



return (

<div className="
min-h-screen
bg-[#FDFBF7]
text-slate-800
">


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


<div className="
max-w-5xl
mx-auto
px-6
">


<h1 className="
text-5xl
font-black
text-slate-900
">

Baby Growth & Development Guides

</h1>


<p className="
mt-5
text-lg
text-slate-600
">

Trusted guidance for every stage from newborn to toddler.

</p>


</div>


</section>





{/* FILTER */}
<section className="py-10">


<div className="
max-w-5xl
mx-auto
px-6
flex
flex-wrap
justify-center
gap-4
">


{
[
"All Ages",
"Newborn",
"1-3 Months",
"4-6 Months",
"7-12 Months"
].map((item,index)=>(


<button

key={index}

className="
px-5
py-2
rounded-full
border
border-slate-200
bg-white
font-semibold
text-sm
hover:bg-[#BADAFF]
hover:border-[#609EF5]
transition
"

>

{item}

</button>


))

}


</div>


</section>







{/* GUIDE CARDS */}
<section className="py-10">


<div className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-4
gap-6
">


{

guides.map((item,index)=>(


<div

key={index}

className="
bg-white
border
border-slate-100
rounded-3xl
p-8
shadow-sm
hover:shadow-md
hover:border-[#609EF5]
transition
"


>


<div className="
w-14
h-14
rounded-2xl
bg-[#BADAFF]
flex
items-center
justify-center
text-3xl
mb-5
">

👶

</div>



<span className="
text-xs
font-bold
text-[#609EF5]
uppercase
tracking-wide
">

{item.age}

</span>



<h3 className="
mt-3
text-xl
font-black
text-slate-900
">

{item.title}

</h3>



<p className="
mt-3
text-sm
text-slate-600
leading-relaxed
">

{item.desc}

</p>



<button

className="
mt-5
text-[#609EF5]
font-bold
text-sm
"

>

Read Guide →

</button>



</div>


))

}


</div>


</section>







{/* CTA */}
<section className="
py-16
text-center
bg-white
">


<h2 className="
text-3xl
font-black
text-slate-900
">

Understand Your Baby Better

</h2>


<p className="
mt-3
text-slate-600
">

Get personalized insights with BabySteps.

</p>



<button

onClick={onLogin}

className="
mt-8
bg-[#609EF5]
text-white
font-bold
px-8
py-3
rounded-full
hover:bg-blue-600
transition
"

>

Try BabySteps Free

</button>


</section>





<Footer/>


</div>

)

}