import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout'
import Logoo from '../Logo'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faCss3, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs'
import './index.scss'
import '../Layout/index.scss'
import Loader from 'react-loaders'



const About = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [letterClass, setLetterClass] = useState('text-animate');
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);



    // useEffect(() => {
    //     const handleWindowLoad = () => {
    //         const loader = document.querySelector('.loader');
    //         loader.classList.add('hidden');
    //     };

    //     window.addEventListener('load', handleWindowLoad);

    //     return () => window.removeEventListener('load', handleWindowLoad);
    // }, []);

      


    return (
         <div className= "container contact-page">
            
            {!isLoading && (
                <div className='content'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                lettersClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', ':']}
                                indx={15}
                            />
                </h1>
                <p>I'm a budding web developer looking for projects, jobs, and work in order to gain essential experience and networking skills in the field. </p>
                <p>I've persevered through many difficult situations with my stellar work ethic, sometimes things get really hard for me but I feel that it's important keep pushing through.</p>
                <p>I love learning, I'm willing to work hard, generally a good people person, and I look forward to hearing from you!</p>
            </div>

            

            <div className='skills'>
                <div className='skill skill-javascript'>
                    <h1>Javascript:</h1>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    <p className='progress-bar'>&nbsp;</p>
                </div>

                <div className='skill skill-html'>
                    <h1>HTML-5:</h1>
                    <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    <p className='progress-bar'>&nbsp;</p>
                </div>

                <div className='skill skill-css'>
                    <h1>CSS:</h1>
                    <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    <p className='progress-bar'>&nbsp;</p>
                </div>

                <div className='skill skill-nodejs'>
                    <h1>NodeJS:</h1>
                    <FontAwesomeIcon icon={faNodeJs} color='#3c873a' />
                    <p className='progress-bar'>&nbsp;</p>
                </div>

                <div className='skill skill-sql'>
                    <h1>SQL:</h1>
                    <FontAwesomeIcon icon={faDatabase} color='#28a4d9' />
                    <p className='progress-bar'>&nbsp;</p>
                </div>
            </div>
        </div>
        )}
        {isLoading && <Loader type="ball-beat" className="loader" />}
    </div>
    );
};

export default About;