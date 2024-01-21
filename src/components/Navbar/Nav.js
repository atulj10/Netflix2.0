import './Nav.css'
import React, { useEffect, useState } from 'react'
import Netflix_logo from "../../assets/Netflix_logo.jpg"
import Netflix_avatar from "../../assets/Netflix_avatar.png"

function Nav() {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <a href={'/'}><img className='nav_logo' src={Netflix_logo} alt='netflix-image' /></a>
                <a href={`/profile`}><img className='nav_avatar' src={Netflix_avatar} alt="avatar" to="/profile" /></a>
            </div>
        </div>
    )
}

export default Nav;