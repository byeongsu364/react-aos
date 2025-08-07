import React,{useEffect} from 'react'
import './style/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Hero = () => {

    useEffect(()=>{
        AOS.init({
            duration : 1000,
            offset :120,
            once : false,
        })
    })

    return (
        <section className='hero'>
            <div className="t-wrap">
                <h2 data-aos = 'fade-up'>Hero</h2>
                <p data-aos = 'fade-up' data-aos-delay = "100">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, earum.
                </p>
            </div>
        </section>
    )
}

export default Hero