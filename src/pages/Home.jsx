import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-5'>
                        Desafio de 50 Proyectos en 50 Días
                    </h1>
                    <Link to="/components">
                        Componentes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home