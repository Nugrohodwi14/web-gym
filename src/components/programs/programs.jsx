import './programs.css'
import React from 'react'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {

    return (
        // <div>Testing Programs</div>

        <div className='Programs' id='programs'>
            {/* Header */}
            <div className='programs-header'>
                <span className='stroke-text'>
                    Explore our
                </span>

                <span>
                    Programs
                </span>

                <span className='stroke-text'>
                    To Shape You
                </span>
            </div>
            {/* Card */}
            {/* <div className='program-tengah'> */}
                {/* Testing Tengah */}
                {/* <span> Testing Tengah </span> */}

                <div className='program-categories'>
                    {programsData.map((program) => (
                        <div className='category'>
                            {program.image}
                            <span>
                                {program.heading}
                            </span>
                            <span>
                                {program.details}
                            </span>

                            <div className='join-now'>
                                <span>
                                    Join Now
                                </span>
                                <img src={RightArrow} alt='join now' />
                            </div>
                        </div>
                    ))}
                </div>
            {/* </div> */}
        </div>
    )
}


export default Programs
