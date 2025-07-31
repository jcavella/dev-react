import { useState, useEffect } from "react";

const UserlistAPILoading = () => {
  const [users, SetUsers] = useState([]);
  const [isLoading, SetIsloading] = useState(true);
  const [error, SetError] = useState(null);
  const API = "https://jsonplaceholder.typicode.com/users";

  //Use efect con su dependencia vacia
  //Lllamado de la API con una promesa
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API)
        if (!response.ok) {
          throw new Error("Error al obtener los datos")
        }
        const data  = await response.json();
        SetUsers(data);
      } catch (error) {
        SetError(error)
      }finally{
        SetIsloading(false);
        /*setTimeout(() => {
          setIsLoading(false);
        }, 5000);*/
      }     
    };
    fetchUser();
  }, []);


 //Mostrar iniciar la peticion
  if (isLoading) {
    return <p className="text-6xl text-green-600">Cargando...</p>;
  }

  //Mostrar de presentar un error
  if (error) {
    return (
      <p className=" text-5xl text-red-500">
        Error: <p className="text-red-950">{error}</p>{" "}
      </p>
    );
  }

  //Mostrar el contenido de la API
  return (
    <div>
      <h1 className="text-indigo-600 dark:text-white text-4xl mb-7">
        Lista de usuarios desde API:https://jsonplaceholder.typicode.com/users
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <ul>
          {users.map((user) => (
            <li              
              key={user.id}
              className="border dark:border-white border-indigo-400 p-3 rounded-lg"
            >
              {user.name}
              <p className="pl-4">Correo: {user.email}</p>
              <p className="pl-4">Telefono: {user.phone}</p>
              <p className="pl-4">Ciudad: {user.address.city}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserlistAPILoading;
