import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <>
      <div className='bg-neutral-600 min-h-screen'>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a CAPYBARA"}/>
      </div>
    </>
  )
}

export default App
