import { useState } from 'react'
import './App.css'
import './Header.css'
import './Nav.css'
import './Banner.css'
import './Supplier.css'
import './Slide.css'
import './Service.css'
import './About.css'
import './Brand.css'
import './Blog.css'
import './Map.css'
import './Contact.css'
import './Footer.css'
import Header from '../src/Header'
import Nav from '../src/Nav'
import Banner from '../src/Banner'
import Supplier from '../src/Supplier'
import Slide from '../src/Slide'
import Service from '../src/Service'
import About from '../src/About'
import Brand from '../src/Brand'
import Blog from '../src/Blog'
import Map from '../src/Map'
import Contact from '../src/Contact'
import Footer from '../src/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/>
    <Banner/>
    <Supplier/>
    <Slide/>
    <Service/>
    <About/>
    <Brand/>
    <Blog/>
    <Map/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
