import React from "react";

export default function FeatureCard({
  tag,
  title,
  desc,
  color
}){

return(
<div
className={`
${color}
border
p-6
rounded-3xl
space-y-4
`}
>


<span className="
bg-white
px-3
py-1
rounded-full
text-xs
font-bold
">

{tag}

</span>


<h3 className="
text-xl
font-black
text-slate-900
">

{title}

</h3>


<p className="
text-sm
text-slate-600
leading-relaxed
">

{desc}

</p>


<button
className="
mt-4
bg-white
px-4
py-2
rounded-full
text-xs
font-bold
flex
items-center
gap-2
"
>

Learn More

</button>


</div>
)

}