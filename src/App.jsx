import Counter from './componets/Counter';
import ToggleButton from './componets/ToggleButton';
import NameForm from './componets/NameForm';
import CounterWithEffect  from './componets/CounterWithEffect';
import './App.css'

function App() {
  return (
    <>
      <Counter></Counter>
      <hr />
      <ToggleButton></ToggleButton>
      <hr />
      <h1>Componente Evento onChange en la caja de texto</h1>
      <NameForm></NameForm>
      <hr />
      <h2>Contador con UsseEfect</h2>
      <CounterWithEffect></CounterWithEffect>
    </>
  )
}

export default App
