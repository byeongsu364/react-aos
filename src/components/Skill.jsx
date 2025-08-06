import React from 'react'
import './style/Skill.css'

const Skill = () => {

    const skills = ['html', 'css', 'javascript', 'node express', 'aws', 'sql', 'react']

    return (
        <section className='skill'>
            <div className="t-wrap">
                <h2>Skill</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, earum.
                </p>
                <ul className="skills">
                    {skills.map((skill, i)=>(
                        <li key = {i}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skill