import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <p>1</p>
      <ItemListContainer greeting={"Bienvenidos a mi e-commerce"}/>

    </>
  )
}

export default App
