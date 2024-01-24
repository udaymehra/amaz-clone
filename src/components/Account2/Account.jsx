import React from 'react'
import "./Account.css"
const Account = () => {
  return (
    <div className='container'>
        
    <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder='Name' />
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder='Email' />
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder='Password' />
        </div>
    </div>
    <div className="forget-password">
        Lost Password? <span>Click here</span>
    </div>
    <div className="submit-container">
        <div className={initial==="Login"?"submit change-color":"submit"} onClick={()=>{setInitial("Sign Up") }}>SignUp</div>
        <div className={initial==="SignUp"?"submit change-color":"submit" } onClick={()=>{setInitial("Log In") }}>Login</div>
    </div>


</div>

  )
}

export default Account