import { useState } from "react"; //Acceder a los estados  
import confetti from "canvas-confetti";

const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 }
    });
};

const NameForm = () => {
  const [name, setName] = useState(""); //Valor inicial vacio
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setName(newValue);
    
    // Disparar confeti cuando el input no está vacío
    if (newValue.trim() !== '') {
      fireConfetti();
    }
  };


  return (
    <div>
      <h2>Formulario de nombre</h2>
      <input 
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={handleChange}
        onClick={fireConfetti}
        />
        <p>Hola - {name && name.trim().length > 0  ? name : "Visitante"}!!</p>
        
    </div>
  );
};
export default NameForm;
