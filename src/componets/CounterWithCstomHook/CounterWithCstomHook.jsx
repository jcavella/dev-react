import useCounter from "../../Hooks/useCounter";
const CounterWithCstomHook = ()=>{
  const {count,increment, decrement, reset} =useCounter(10);

  

  return(
    <>
     <div className="grid max-w-full mt-10 w-100 h-60 m-15 bg-sky-300 shadow-2xl rounded-2xl place-content-center hover:shadow-sky-600 text-sky-800">
        <h1 className="text-2xl">Counter with Custom Hooks</h1>
        <p>Contador: {count} </p>
        <div className="grid grid-cols-3 m-2 gap-4 ">
            <button onClick={increment} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
            >Increment</button>

            <button onClick={decrement} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl"
            >Decrement</button>

            <button onClick={reset} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl"
            >Reset</button>

            

        </div>
     </div>
    </>
 )
}



export default CounterWithCstomHook;