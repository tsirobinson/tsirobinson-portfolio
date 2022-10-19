import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"About Me".split("")}
                        idx={15}
                    />
                </h1>
                <p>I am an ambitious screenwriter currently wrapping up my final year in college.</p>
                <p>While verbally soft-spoken, I've found that writing allows me to tell stories in way my voice never could.</p>
            </div>
            
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About