import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-s.png'
import Logos from '../../assets/images/logo-ss.png'
import Logoo from '../Logo';
import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import '../About/index';
import '../Layout';


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const  [ letterClass,  setLetterClass ] = useState( 'text-animate' );

    const nameArray = ['r', 'i', 'e', 'l', ' ','C','a','n','e']
    const jobArray = ['W','e', 'b',' ' ,'D', 'e', 'v','e', 'l', 'o','p','e','r','.']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Return cleanup function
        return () => clearTimeout(timer);
    }, []);

     // Function to handle window onload event
     useEffect(() => {
        const handleWindowLoad = () => {
            const loader = document.querySelector('.loader');
            loader.classList.add('hidden');
        };

        window.addEventListener('load', handleWindowLoad);

        return () => window.removeEventListener('load', handleWindowLoad);
        }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); //makes loading false after anim complete
        }, 4000); //5 sec del. after loading anim.

    
        // Return cleanup function
        return () => clearTimeout(timer);
    }, []);

   

    


    
    


    return(
        <div className={`container about-page ${isLoading ? 'loading' : ''}`}>
            <div className='loader'></div>
            {!isLoading && (
                
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                {/* letters animation */}
                <span className={letterClass}>W</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>c</span>
                <span className={`${letterClass} _15`}>o</span>
                <span className={`${letterClass} _16`}>m</span>
                <span className={`${letterClass} _17`}>e!</span>
                    
                    <br /> I'm  <img src={Logo} alt="developer" /><AnimatedLetters lettersClass= { letterClass }
                        strArray= { nameArray }
                        indx= {15}
                    />
                    <br />
                    <AnimatedLetters lettersClass= { letterClass }
                        strArray= { jobArray }
                        indx= {15}
                    />
                </h1>
                <h2>Budding Developer Soon To Be FullStack!</h2>
                <Link to="/contact" className="flat-button">Contact Me!</Link>
            </div>
            <Logoo/>
        </div>
        )}
    </div>
    )

};

export default Home;