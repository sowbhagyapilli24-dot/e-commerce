import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
let [email, setEmail] = useState('')
let [password, setPassword] = useState('')

function handleSubmit(e) {
e.preventDefault()
console.log(email)
console.log(password)
}

return ( <div className="login"> <div className="login-box"> <h2>Welcome Back</h2> <p className="login-text">Login to continue shopping</p>


    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>

    <p className="account-text">
      Don't have an account? <Link to="/signup">Signup</Link>
    </p>
  </div>
</div>

)
}

export default Login
