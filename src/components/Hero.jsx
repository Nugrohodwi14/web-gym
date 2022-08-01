import React from 'react'
import { Header } from './Header/Header'
import './Hero.css'
import heroImage from "../assets/hero_image.png"
import heroImageBack from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"

const Hero = () => {
    return (
        <div className="hero">
            {/* Start of Left Side */}
            <div className="left-h" >
                <Header />

                {/* Ads */}
                <div className='the-best-ad' >
                    <div>  </div>
                    <span> The Best Gym in the town</span>
                </div>

                {/* Hero Heading */}
                <div className='hero-text'>
                    {/* Testing Hero */}
                    <div>
                        {/* Title */}
                        <span className='stroke-text' > Shape</span>
                        <span> Your</span>
                    </div>
                    <div>
                        <span> Ideal Body </span>
                    </div>
                    <div>
                        {/* Description */}
                        <span className="hero-text-description">
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </span>
                    </div>
                </div>

                {/* Figure */}
                <div className='figures'>
                    <div className='figures-div'>
                        <span className='figures-span1'> +140 </span>
                        <br />
                        <span className='figures-span2'> expert coach </span>
                    </div>
                    <div className='figures-div'>
                        <span className='figures-span1'> 978 </span>
                        <br />
                        <span className='figures-span2'> members joined </span>
                    </div>
                    <div className='figures-div'>
                        <span className='figures-span1'> 50 </span>
                        <br />
                        <span className='figures-span2'> fitnes programs </span>
                    </div>
                </div>

                {/* Hero Button */}
                <div className='hero-btn'>
                    <button className='btn'> Get Started </button>
                    <button className='btn'> Learn More</button>
                </div>
            </div>
            {/* End of Left Side */}

            {/* Start of Right Side */}
            {/* <div className="right-h" > Testing Right Side </div> */}
            <div className="right-h" >
                <button className='btn'> Join Now </button>

                <div className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span> Heart Rate </span>
                    <span> 116 bmp </span>
                </div>

                {/* Hero Images */}
                <img src={heroImage} alt='hero image' className='hero-image' />
                <img src={heroImageBack} alt='hero image back' className='hero-image-back' />

                <div className='calories'>
                    <img src={Calories} alt="calories" className='calories-img' />
                    <div>
                    <span>Calories Burned </span>    
                    <span> 220 kcal </span>
                    </div>
                    
                </div>

            </div>
            {/* End of Right Side */}
        </div>
    )
}

export default Hero