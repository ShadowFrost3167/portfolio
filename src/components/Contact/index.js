import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                'service_diu7xri',
                'template_1rp2xzg',
                refForm.current,
                '_z9-EJq3rlkpGyMU7'
            )
            .then(
                ()=>{
                    alert('Message Successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message delivery failed! please try again')
                }
            )


    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1><AnimatedLetters
                        letterClass = {letterClass}
                        strArray={['C','o','n','t','a','c','t',' ', 'M','e',':']}
                        indx={15}
                    /></h1>
                    <p>
                        I'm interested in any entry level opportunities - big or small! If you have any questions or would like to contact me please don't hesitate and use the form below!
                    </p>
                    <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                        <li className='half'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            required 
                            />
                        </li>
                        <li className='half'>
                        <input
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            required 
                            />
                        </li>
                        <li>
                            <input
                            placeholder= "Subject"
                            type="text"
                            name="subject"
                            required
                            />
                        </li>
                        <li>
                            <textarea
                            placeholder='Message'
                            name='message'
                            required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value="SEND"/>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="ball-beat" className="loady"></Loader>
    </>
    )
};

export default Contact