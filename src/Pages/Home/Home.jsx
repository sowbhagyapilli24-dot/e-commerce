import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
return ( <div className="home"> <div className="home-content"> <p className="welcome">WELCOME TO SHOEASE</p> <h1>Everything You Need,<br />All in One Place</h1> <p className="description">
Discover quality products at great prices and enjoy a simple shopping experience. </p> <Link to="/product"> <button>Shop Now</button> </Link> </div> </div>
)
}

export default Home
