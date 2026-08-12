import React from "react";
import {X} from "lucide-react";


export default function TrackingModal({
open,
title,
children,
onClose
}){


if(!open) return null;


return(

<div className="
fixed
inset-0
bg-black/30
z-50
flex
items-end
sm:items-center
justify-center
">


<div className="
bg-white
w-full
sm:w-[420px]
rounded-t-3xl
sm:rounded-3xl
p-5
shadow-xl
">


<div className="
flex
justify-between
items-center
mb-5
">

<h2 className="
font-black
text-lg
">
{title}
</h2>


<button
onClick={onClose}
className="
w-8
h-8
rounded-full
bg-slate-100
flex
items-center
justify-center
"
>

<X size={18}/>

</button>


</div>


{children}


</div>


</div>


)

}