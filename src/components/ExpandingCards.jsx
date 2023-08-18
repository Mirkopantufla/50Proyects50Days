import React from 'react'
import { photos } from '../testData/expandingCards.js'
import '../styles/ExpandingCards.css'

const ExpandingCards = () => {


    const addActiveClass = (e) => {

        const selected = document.getElementById(e.target.id)
        removeActiveClases()

        selected.classList.add('active')
    }

    const removeActiveClases = () => {
        const panels = document.querySelectorAll('.panel')

        panels.forEach((pan) => (
            pan.classList.remove('active')
        ))
    }

    return (
        <div className='row' style={{ height: "90vh" }}>
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ maxWidth: "90vw" }}>
                {
                    photos.map((foto, index) => {
                        return (
                            <div
                                key={index}
                                id={`card${index}`}
                                className={`panel`}
                                style={{ backgroundImage: `url(${foto[1]})` }}
                                onClick={(e) => addActiveClass(e)}
                            >
                                <h3 className='bg-dark p-2 rounded'>{foto[0]}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExpandingCards