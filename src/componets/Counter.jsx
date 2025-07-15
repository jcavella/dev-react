import { useState } from "react";
const Counter = ()=>{
   //Estado locales
   const [count, setCount] = useState(0);
   return(
    <section>
        <p>El contador esta en: {count}</p>
        <button onClick={()=>setCount(prev=> prev + 1)}>Incrementar</button>
        <button onClick={()=>setCount(prev=> prev - 1)} disabled ={count <=0 }>Decrementar</button>
    </section>
   )  
}

export default Counter;