import { useState } from "react";
const ToggleButton = () =>{
    const [isActive,setIsActive] = useState(false); //Estado por defecto

    //Renderizar el componente
    return(
        <button onClick={()=>setIsActive(!isActive)}>
            {isActive ? "Activo ✅" : "Inactivo ⛔"} 
        </button>
    )    

}
export default ToggleButton;