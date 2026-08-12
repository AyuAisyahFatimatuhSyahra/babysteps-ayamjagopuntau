import React from "react";
import {Check} from "lucide-react";


export default function PricingCard({
  title,
  price,
  desc,
  items
}){


return(
<div className="
bg-white
border
border-slate-200
rounded-3xl
p-8
shadow-sm
flex
flex-col
justify-between
space-y-6
hover:shadow-lg
transition
">


<div className="space-y-4">


<h3 className="
text-xl
font-black
text-slate-900
">

{title}

</h3>


<div className="
text-3xl
font-black
text-[#609EF5]
">

{price}

<span className="
text-sm
font-normal
text-slate-400
">

{
price.includes("Rp")
? "/ bulan"
: ""
}

</span>

</div>


<p className="
text-sm
text-slate-500
">

{desc}

</p>


<div className="
border-t
pt-4
space-y-3
">


{
items.map((item,index)=>(

<div
key={index}
className="
flex
items-center
gap-2
text-sm
text-slate-600
"
>

<Check
className="
w-4
h-4
text-emerald-500
"
/>

{item}

</div>

))
}


</div>


</div>



<button
className="
w-full
bg-[#609EF5]
hover:bg-blue-600
text-white
font-bold
py-3
rounded-full
text-sm
transition
"
>

Choose Plan

</button>


</div>
)

}