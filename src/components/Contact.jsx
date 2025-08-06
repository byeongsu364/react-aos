import React from 'react'
import './style/Contact.css'

const Contact = () => {

    const contactList = [
        { type: "Email", value: "yourname@example.com" },
        { type: "Phone", value: "010-1234-5678" },
        { type: "GitHub", value: "github.com/yourname" }
    ];

    return (
        <section className='contact'>
            <div className="t-wrap">
                <h2>Contact</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, earum.
                </p>
                <ul className="contact-list">
                    {contactList.map((Contact, i)=>(
                        <li key={i}>
                            <sapn>{Contact.type}</sapn>
                            <sapn>{Contact.value}</sapn>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Contact