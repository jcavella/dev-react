import { useState, useEffect } from "react"; //Acceder a los estados 

const CounterWithEffect = () => {
  //Estado locales
  const [count, setCount] = useState(0);
  const handleIncClic = () =>{  
    setCount(prev => prev + 1)

};

//Icluye el codigo a ejecutar como efecto secundario
//Indica la dependencia 
useEffect(()=>{
  console.log('El contador cambio a:' + count);
},[count])


  return(
    <section>
        <h2>THIS IS A COUNT WITH EFFECT</h2>
        <p>El contador esta en: {count}</p>
        <button onClick={handleIncClic}>Incrementar</button>        
    </section>
   )  

}
export default CounterWithEffect;