import { useState,useEffect } from "react";

const UserListApi= () =>{
  const [users,SetUsers] = useState([]);

  //Use efect con su dependencia vacia
  //Lllamado de la API con una promesa
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>SetUsers(data))
    .catch((error)=>console.error("Error feching data:",error))
  }, [])

  return(
    <div>        
        <h1 className ="text-indigo-600 dark:text-white text-4xl mb-7" >Lista de usuarios desde API:https://jsonplaceholder.typicode.com/users</h1>
        <div className="grid grid-cols-3 gap-6">
        <ul>            
            {users.map((user) => (
                <li class ="pl-25" key={user.id} className="border dark:border-white border-indigo-400 p-3 rounded-lg">{user.name}
                  <p className ="pl-4">Correo: {user.email}</p>                
                  <p className ="pl-4">Telefono: {user.phone}</p>                
                  <p className ="pl-4">Ciudad: {user.address.city}</p>                
                </li>
            ))
            }
        </ul>   
        </div>    
    </div>
  )

}

export default UserListApi;