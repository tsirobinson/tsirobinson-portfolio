import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={"Tyler Robinson".split("")}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={"Screenwriter".split("")}
                idx={33}/>
                </h1>
                <h2>Thriller / Science Fiction / Drama</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home