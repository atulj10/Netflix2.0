import React from 'react'
import './signIn.css'
import { useRef } from 'react'
import { auth } from '../../firebase'

function SignIn() {

 const emailRef=useRef(null)
 const passwordRef=useRef(null)

  const register=(e)=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser)=>{
      console.log(authUser)
    })
    .catch((err)=>{
      alert(err.message)
    })
  }

  const signIn=(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((user)=>{
      console.log(user)
    })
    .catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email" />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit'onClick={signIn}>Submit</button>
        <h4><span className='signUpScreen_gray'>New to Netflix? </span>
          <span className='signUpScreen_link' onClick={register}>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignIn
