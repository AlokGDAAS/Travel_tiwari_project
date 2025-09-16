import './App.css'
import { assets } from './assets/assets'
import './assets/css/fonts.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <div className=''>
      <Navbar/>
      <Home/>
      <Footer/>      
    </div>
    
    </>
  )
}

export default App
