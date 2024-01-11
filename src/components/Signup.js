import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <h3>SignUp</h3>
        <input type="text" placeholder='Fullname'/>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button>SignUp</button>
        <button>Reset</button>
        <h6>Already have an account?</h6>
        <Link to="/">Login</Link>
    </div>
  )
}

export default SignUp