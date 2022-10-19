import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_07mcc5t',
            'template_y00e5v9',
            refForm.current,
            '3B-025WKvYG-OSKHV'
        )
        .then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again.')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={"Contact Me".split("")}
                    idx={15}
                    />
                </h1>
                <p>
                    I am always looking for writing opportunities and producers interested in my scripts.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact