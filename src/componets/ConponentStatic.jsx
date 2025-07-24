const StaticComponent = () =>{
 const items =["Manzana", "Banana", "Cereza"];
 return(  
    <div>
        <h1>Lista de datos estaticos</h1>
        <ul>
        {/* Utilizamos map para iterar sobre cada elemento del array */}
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div> 
 );
}

export default StaticComponent;