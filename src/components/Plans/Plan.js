import React from 'react'
import "./Plan.css"

function Plan() {
    return (
        <div className='planScreen'>
            <div className='planScreen_plan'>
                <div className='planScreen_info'>
                    <h3>Premium</h3>
                    <h5>4K+HDR</h5>
                </div>
                <button style={{backgroundColor:'gray'}}>Active Plan</button>
            </div>
            <div className='planScreen_plan'>
                <div className='planScreen_info'>
                    <h3>Basic</h3>
                    <h5>1080p</h5>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='planScreen_plan'>
                <div className='planScreen_info'>
                    <h3>Standard</h3>
                    <h5>720p</h5>
                </div>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Plan
