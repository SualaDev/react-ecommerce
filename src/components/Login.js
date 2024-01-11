import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/home')
    }, 3000)
  }
  return (
    <div>
        <h3>Login</h3>
        <input 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        type="text" 
        placeholder='Email'/>
        <input type="text" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Password' />
        <button onClick={handleLogin}>Login</button>
        <h6>Don't have an account?</h6>
        <Link to="/signup">SignUp</Link>
    </div>
  )
}

export default Login