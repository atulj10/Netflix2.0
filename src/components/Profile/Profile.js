import React from 'react'
import Nav from '../Navbar/Nav'
import image from "../../assets/Netflix_avatar.png"
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Plan from '../Plans/Plan'


function Profile() {
    
    const user=useSelector(selectUser)

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src={image} alt="Avatar_image" />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans' >
                         <h3>Plans</h3>
                         <Plan/>
                         <button onClick={()=>{
                            auth.signOut()
                         }} className='profileScreen_signOut' > Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
