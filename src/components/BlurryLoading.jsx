import React from 'react'
import '../styles/BlurryLoading.css'

const BlurryLoading = () => {

    let loading = 0

    const blurring = () => {
        let percentage = document.querySelector('.percentage')
        let background = document.querySelector('.backImage')

        loading++

        if (loading == 100) {
            clearInterval(interval)
        }

        percentage.innerHTML = `${loading}%`
        percentage.style.opacity = scale(loading, 0, 100, 1, 0)
        background.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
    }

    let interval = setInterval(blurring, 20)

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

    return (
        <div className='row'>
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                <section className='backImage'></section>
                <h1 className='percentage'></h1>
            </div>
        </div>
    )
}

export default BlurryLoading