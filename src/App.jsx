import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './containers/About'
import Contact from './containers/Contact'
import Cart from './containers/Cart'
import Blog from './containers/Blog'
import Services from './containers/Services'
import Shop from './containers/Shop'
import Checkout from './containers/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
