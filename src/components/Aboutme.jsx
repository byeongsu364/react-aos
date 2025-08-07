import React, { useEffect } from 'react'
import './style/Aboutme.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: false,
        })
    })

    return (
        <section className='Aboutme'>
            <div className="t-wrap">
                <h2>Aboutme</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, earum.
                </p>
            </div>
        </section>
    )
}

export default Aboutme