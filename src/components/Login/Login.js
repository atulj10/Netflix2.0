import React, { useState } from 'react'
import './Login.css'
import image from "../../assets/Netflix_logo.jpg"
import SignIn from '../SignIn/signIn'

function Login() {

    const [signin, setSignIn] = useState(false)

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src={image} alt='' />
                <button className='LoginScreen_button'
                    onClick={() => {
                        setSignIn(true)
                    }}
                >Sign In</button>
                <div className='loginScreen_gradient'>
                </div>
                <div className='loginScreen_body'>
                    {signin ?
                        (<SignIn />) :
                        <>
                            <h1>Unlimited films,TV programmes and more.</h1>
                            <h2>Watch anywhere , Cancel at any time</h2>
                            <h3>Ready to watch?Enter your email to create or restart your membership.</h3>
                            <div className='loginScreen_input'>
                                <form>
                                    <input type="email"
                                        placeholder='EMAIL'
                                    />
                                    <button className='loginScreen_getStarted'
                                        onClick={() => {
                                            setSignIn(true)
                                        }}
                                    >Get Started</button>
                                </form>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
