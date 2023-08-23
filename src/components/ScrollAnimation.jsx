import React, { useEffect, useState } from 'react'
import '../styles/ScrollAnimation.css'

const ScrollAnimation = () => {

    const contenidoMuestra = ['Así', 'es', 'como', 'aparecen', 'distintas', 'palabras', 'para', 'demostrar', 'como', 'funciona', 'este', 'efecto', 'con', 'CSS']

    const [boxTopState, setBoxTopState] = useState(0)

    useEffect(() => {

        checkBoxes()

    }, [boxTopState])

    const handleScroll = (e) => {
        setBoxTopState(e.target.scrollTop);
    };


    const checkBoxes = (e) => {

        //Guardo en una variable todos los divs que tengan la clase .customContainer para recorrerlos mas tarde
        let boxes = document.querySelectorAll('.customBoxContainer')

        //LLamo al div con el id contenedor para acceder a el mas tarde
        const contenedor = document.getElementById('contenedor')

        //Window.getComputedStyle: Devuelve el estilo computado del elemento.
        //CSSStyleDeclaration.getPropertyValue(): Retorna un string que contiene el valor de la propiedad css especificada.
        //parseInt para conseguir la altura total del div en formato int
        let triggerBottom = parseInt(window.getComputedStyle(contenedor).getPropertyValue("height")) / 2.9


        boxes.forEach(box => {

            const boxTop = box.getBoundingClientRect().top

            if (boxTop < triggerBottom) {
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
        })
    }

    return (


        <div className='row' style={{ maxHeight: '60vh', overflowY: 'scroll', overflowX: 'none' }} onScroll={(e) => handleScroll(e)}>
            <div id='contenedor' className="col-12 d-flex flex-column align-items-center overflow-x-hidden">
                {
                    contenidoMuestra.map((cont, index) => {
                        return (
                            <div key={index} className='customBoxContainer'>
                                {cont}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ScrollAnimation