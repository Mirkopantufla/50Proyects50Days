import React, { useState } from 'react'
import '../styles/SplitLandingPage.css'

const SplitLandingPage = () => {

    // const [isHovered, setIsHovered] = useState();

    // <div
    //     className={`left-div text-center d-flex flex-column ${isHovered ? 'selected' : ''}`}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    // ></div>

    const zoomSide = (e) => {

        if (e.target.className.includes('left')) {
            document.querySelector('.right-div').classList.remove('selected')
            document.querySelector('.left-div').classList.add('selected')
        } else if (e.target.className.includes('right')) {
            document.querySelector('.left-div').classList.remove('selected')
            document.querySelector('.right-div').classList.add('selected')
        }
    }


    return (
        <div className='row'>
            <div className="col-12 d-flex overflow-x-hidden">
                <div className='left-div text-center d-flex flex-column' onMouseOver={(e) => zoomSide(e)}>
                    <h1 className='text-light'>Nintendo</h1>
                    <button className='btnSeeMore'>Buy Now</button>
                </div>
                <div className='right-div text-center d-flex flex-column' onMouseOver={(e) => zoomSide(e)}>
                    <h1 className='text-light'>Play 5</h1>
                    <button className='btnSeeMore'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default SplitLandingPage