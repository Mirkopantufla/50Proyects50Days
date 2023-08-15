import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import ExpandingCards from '../components/ExpandingCards'
import Test from '../components/Test'

const Components = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 d-grid gap-3">
                    <h1 className='text-center'>Componentes de Proyectos</h1>
                    <Link className='link-group' to={'expanding-cards'}>
                        Expanding Cards
                    </Link>
                    <Routes>
                        <Route path="expanding-cards" element={<ExpandingCards />} />
                    </Routes>
                    <Link to={'algo'}>
                        algo
                    </Link>
                    <Routes>
                        <Route path="algo" element={<Test />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Components