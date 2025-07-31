import { useEffect, useState } from "react";


const SearchPost = () =>{
  const [query,setQuery] = useState("");
  const [posts,setPosts] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=> {
    const fetchData = async ()=>{
        try {
            const response = await fetch(`${API}?title_like=${query}`);
            if (!response.ok) {
                throw new Error('Error al obtener respuesta');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    fetchData();

  },[query] )

  const getInput =(event)=>{
    setQuery(event.target.value);
    console.log(query);
  };


  return(
    <div>
      <h2>Lista de post</h2>
      <input type="text"
        placeholder="Buscar por titulo"
        value={query}   
        onChange={getInput}   
      />

      <ul>
        {
            posts.map((post)=>(
                <li id={post.id}>{post.title}</li>
            ))
        }
      </ul>
    </div>
  );


}
export default SearchPost;