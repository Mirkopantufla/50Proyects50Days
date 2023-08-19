import React, { useState } from 'react'
import '../styles/ProgressSteps.css'

const ProgressSteps = () => {

    const [progress, setProgress] = useState(0);

    const changeProgress = (e) => {
        const currentButton = e.target.id;
        const btnPrevious = document.getElementById('btnPrevious');
        const btnNext = document.getElementById('btnNext');

        if (progress < 3 && currentButton == 'btnNext') {
            setProgress(progress + 1)
            btnPrevious.classList.remove('disabled')
        } else if (progress > 0 && currentButton == 'btnPrevious') {
            setProgress(progress - 1)
            btnNext.classList.remove('disabled')
        }

    }

    return (
        <div className='row my-5' >
            <div className="col-12 d-flex justify-content-center" style={{ maxWidth: "90vw" }}>
                <section className='position-relative' style={{ width: '30vw' }}>
                    <div
                        className="progress d-flex"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow={`${progress}`}
                        aria-valuemin="0"
                        aria-valuemax="3"
                        style={{ backgroundColor: 'white' }}
                    >
                        <div
                            className='customRounded border-primary'>
                            1
                        </div>
                        <div
                            className={`customRounded ${progress >= 1 ? 'blurBorderPrimary' : ""}`}
                            style={{ left: '33%' }}>
                            2
                        </div>
                        <div
                            className={`customRounded ${progress >= 2 ? 'blurBorderPrimary' : ""}`}
                            style={{ left: '66%' }}>
                            3
                        </div>
                        <div
                            className={`customRounded ${progress >= 3 ? 'blurBorderPrimary' : ""}`}
                            style={{ left: '99%' }}>
                            4
                        </div>
                        <div className="progress-bar h-25" style={{ width: `${33 * progress}%` }} />
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <button
                            id='btnPrevious'
                            className={`btn btn-primary me-4 ${progress == 0 ? 'disabled' : ""}`}
                            onClick={(e) => changeProgress(e)}>
                            Previous
                        </button>
                        <button
                            id='btnNext'
                            className={`btn btn-primary ${progress == 3 ? 'disabled' : ""}`}
                            onClick={(e) => changeProgress(e)}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProgressSteps