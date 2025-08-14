import { useContext, createContext, useState } from 'react';

import CounterWithCstomHook from './componets/CounterWithCstomHook/CounterWithCstomHook'

import Counter from './componets/Counter';
import ToggleButton from './componets/ToggleButton';
import NameForm from './componets/NameForm';
import CounterWithEffect  from './componets/CounterWithEffect';
import Card from './componets/Card/Card';
import TextTailwin from './componets/TextTailwin'
import ConponentStatic from './componets/ConponentStatic'
import UserListApi from './componets/UserlistAPI'
import UserlistAPILoading from './componets/UserlistAPILoading'
import SearchPost from './componets/SearchPost/SearchPost'
import CounterUseReducer from './componets/CounterUseReducer/CounterUseReducer'
import './App.css'

//Crear variable con el contexto
const ThemeContext = createContext();

function ThemeProvider({children}) {
  const[theme, setTheme] = useState("dark");

  const toggleTheme = ()=>{
    setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
  };

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const{theme, toggleTheme} = useContext(ThemeContext)

  return(
    <button
     onClick={toggleTheme}
     style={{
      backgroundColor: theme === "light" ? "#ffffff" : "#333333",
      color: theme === "light" ? "#000000" : "#ffffff"
     }}
    >Cambiar tema
    </button>
  )
}

function App() {
  return (
    <>
     <CounterWithCstomHook>

     </CounterWithCstomHook>
     <hr />
    <h1>Context API</h1>
    <ThemeProvider>
      <div className='App'>
        <ThemeButton />

      </div>
      <hr />
    <h1>Counter useReducer</h1>
    <CounterUseReducer></CounterUseReducer>
    <hr />
     <SearchPost></SearchPost>
     <br />
    <hr />

      <UserlistAPILoading></UserlistAPILoading>
    <hr />
     <UserListApi></UserListApi>
     <hr />
      <ConponentStatic></ConponentStatic>
      <hr />
      <h1>Contador</h1>

      <Counter></Counter>
      <hr />
      <ToggleButton></ToggleButton>
      <hr />
      <h1>Componente Evento onChange en la caja de texto</h1>
      <NameForm></NameForm>
      <hr />
      <h2>Contador con UsseEfect</h2>
      <CounterWithEffect></CounterWithEffect>
      <hr />
      <h2>Componente con archivo Css</h2>
      <Card></Card>
      <hr />
      <h2>Componente utilzando Tailwind Css</h2>
      <TextTailwin></TextTailwin>
    </ThemeProvider>
    
    </>
  )
}

export default App
