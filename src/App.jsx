import './App.css'
import Cart from './components/Cart'
import Desserts from './components/Desserts'

function App() {

  return (
    <section className='min-h-screen px-6 py-8 bg-rose-50 flex flex-col lg:p-28 lg:flex-row lg:gap-2'>
      <Desserts/>
      <Cart/>
    </section>
  )
}

export default App
