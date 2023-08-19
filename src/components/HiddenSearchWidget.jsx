import React from 'react'
import '../styles/HiddenSearchWidget.css'
import { ImSearch } from 'react-icons/im'

const HiddenSearchWidget = () => {

    const searchButtonFocus = () => {
        const inptSearch = document.getElementById('inptSearch')
        const searchContainer = document.getElementById('searchContainer')

        searchContainer.classList.toggle('active')
        inptSearch.focus();
    }


    return (
        <div className='row d-flex justify-content-center'>
            <div className="col-12 customSearch">
                <div id='searchContainer' className='searchContainer' style={{ height: '20vh' }}>
                    <input id='inptSearch' className='customInput' type="text" name="" />
                    <button className='customButton' onClick={() => searchButtonFocus()}>
                        <ImSearch className='' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HiddenSearchWidget