import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
let [name, setName] = useState('')
let [email, setEmail] = useState('')
let [password, setPassword] = useState('')
let [confirmPassword, setConfirmPassword] = useState('')

function handleSubmit(e) {
e.preventDefault()

if (password !== confirmPassword) {
  alert('Passwords do not match')
  return
}

console.log(name)
console.log(email)
console.log(password)


}

return ( <div className="signup"> <div className="signup-box"> <h2>Create Account</h2> <p className="signup-text">Create an account to start shopping</p>


    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">Create Account</button>
    </form>

    <p className="account-text">
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </div>
</div>


)
}

export default Signup
