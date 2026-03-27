import './App.css'
import Cart from './components/Cart'
import Desserts from './components/Desserts'

function App() {

  return (
    <section className='min-h-screen px-6 py-8 bg-rose-50 flex flex-col items-start xl:flex-row md:gap-8 lg:p-20'>
      <Desserts/>
      <Cart/>
    </section>
  )
}

export default App
