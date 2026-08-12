import React from "react";

export default function SectionTitle({
  title,
  desc
}){

return(
<div className="
text-center
space-y-3
">

<h2 className="
text-3xl
md:text-4xl
font-black
text-slate-900
">

{title}

</h2>


<p className="
text-sm
text-slate-500
max-w-xl
mx-auto
">

{desc}

</p>


</div>
)

}