import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './Footer'

function App() {
return ( <div> <Navbar />
<Footer/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
</div>

)
}

export default App
