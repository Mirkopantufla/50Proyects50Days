import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import ExpandingCards from '../components/ExpandingCards'
import ProgressSteps from '../components/ProgressSteps'
import HiddenSearchWidget from '../components/HiddenSearchWidget'
import BlurryLoading from '../components/BlurryLoading'
import ScrollAnimation from '../components/ScrollAnimation'
import SplitLandingPage from '../components/SplitLandingPage'

const Components = () => {

    const [view, setView] = useState(false);

    const location = useLocation();

    const checkLocation = (e) => {

        let currentSubMenu = e.target.innerHTML.toLowerCase().split(' ')
        let currentHTMLLink = location.pathname.toLowerCase()

        setView(currentHTMLLink.includes(currentSubMenu[0]));

    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 d-grid gap-3">
                    <h1 className='text-center'>Componentes de Proyectos</h1>
                    {/* -------------------------------------------------------------------------------------------- */}
                    <Link
                        className='fs-3 text-center'
                        to={location.pathname == '/components/expanding-cards' ? '' : 'expanding-cards'}
                        onClick={(e) => checkLocation(e)}
                    >
                        Expanding Cards
                    </Link>
                    <Routes>
                        <Route path="expanding-cards" element={view ? '' : <ExpandingCards />} />
                    </Routes>
                    <hr />
                    {/* -------------------------------------------------------------------------------------------- */}
                    <Link
                        className='fs-3 text-center'
                        to={location.pathname == '/components/progress-steps' ? '' : 'progress-steps'}
                        onClick={(e) => checkLocation(e)}
                    >
                        Progress Steps
                    </Link>
                    <Routes>
                        <Route path="progress-steps" element={view ? '' : <ProgressSteps />} />
                    </Routes>
                    <hr />
                    {/* -------------------------------------------------------------------------------------------- */}
                    <Link
                        className='fs-3 text-center'
                        to={location.pathname == '/components/search-widget' ? '' : 'search-widget'}
                        onClick={(e) => checkLocation(e)}
                    >
                        Hidden Search Widget
                    </Link>
                    <Routes>
                        <Route path="search-widget" element={view ? '' : <HiddenSearchWidget />} />
                    </Routes>
                    <hr />
                    {/* -------------------------------------------------------------------------------------------- */}
                    <Link
                        className='fs-3 text-center'
                        to={location.pathname == '/components/blurry-loading' ? '' : 'blurry-loading'}
                        onClick={(e) => checkLocation(e)}
                    >
                        Blurry Loading Page
                    </Link>
                    <Routes>
                        <Route path="blurry-loading" element={view ? '' : <BlurryLoading />} />
                    </Routes>
                    <hr />
                    {/* -------------------------------------------------------------------------------------------- */}
                    <Link
                        className='fs-3 text-center'
                        to={location.pathname == '/components/scroll-animation' ? '' : 'scroll-animation'}
                        onClick={(e) => checkLocation(e)}
                    >
                        Scroll Animation
                    </Link>
                    <Routes>
                        <Route path="scroll-animation" element={view ? '' : <ScrollAnimation />} />
                    </Routes>
                    <hr />
                    {/* -------------------------------------------------------------------------------------------- */}
                    <Link
                        className='fs-3 text-center'
                        to={location.pathname == '/components/split-landing-page' ? '' : 'split-landing-page'}
                        onClick={(e) => checkLocation(e)}
                    >
                        Split Landing Page
                    </Link>
                    <Routes>
                        <Route path="split-landing-page" element={view ? '' : <SplitLandingPage />} />
                    </Routes>
                    <hr />
                    {/* -------------------------------------------------------------------------------------------- */}
                </div>
            </div>
        </div>
    )
}

export default Components