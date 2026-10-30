import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
return ( <div className="navbar"> <div className="logo">
ShopEase </div>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/product">Products</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/signup">Signup</Link>
    </li>
  </ul>
</div>

)
}

export default Navbar
