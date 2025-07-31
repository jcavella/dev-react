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
import './App.css'

function App() {
  return (
    <>
     <SearchPost></SearchPost>
     <br />
    <hr />

      <UserlistAPILoading></UserlistAPILoading>
    <hr />
     <UserListApi></UserListApi>
     <hr />
      <ConponentStatic></ConponentStatic>
      <hr />

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
    </>
  )
}

export default App
