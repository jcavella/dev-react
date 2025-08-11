//importar  hubd useReducer
import { useReducer } from "react"; //Manejar estados

const stateReducer = (state, action) =>{
    switch (action.type) {
        case "Increment":   
          return{count: state.count + 1};        
        case "Decrement":   
          return{count: state.count - 1};  
        default:
            return state;

    }
}

const CounterUseReducer = () =>{
  const [state, dispatch] = useReducer(stateReducer,{count : 0});

  //Crear botones para modificar el estado
  return(
    <div className="grid max-w-full mt-10 w-80 h-60 m-15 bg-purple-200 shadow-2xl rounded-2xl place-content-center hover:shadow-pink-300 text-pink-900 ">
        <h1 className="text-2xl">Counter with useReducer</h1>
        <p className="text-2xl font-sans"> {state.count}</p>
        <div className="grid grid-cols-2 m-2">
            <button onClick={() => dispatch({type: "Increment"})}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">Increment</button>
            <button onClick={() => dispatch({type: "Decrement"})}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl">Decrement</button>
        </div>
    </div>
  )

}

export default CounterUseReducer;