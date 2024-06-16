import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-s.png';
import Logos from '../../assets/images/logo-ss.png'
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src= { Logos } alt="logo"/>
            <img className="sub-logo" src = { LogoSubtitle } alt = "shadow"/>
        </Link>
        <nav>
            <NavLink
            exact= "true"
            activeclassname= "active"
            to= "/"
               >
                <FontAwesomeIcon
                 icon= { faHome }
                color = "#4d4de"

                  />
            </NavLink>

            <NavLink
            exact= "true"
            activeclassname= "active"
            className="about-link"
            to= "/about">
                <FontAwesomeIcon
                 icon= { faUser }
                color = "#4d4de"

                  />
            </NavLink>

            <NavLink
            exact= "true"
            activeclassname= "active"
            className= "contact-link"
            to= "/contact"
            >
                <FontAwesomeIcon
                 icon= { faEnvelope }
                 color = "#4d4de"

                 />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/ariel-cane-b2904830b/'
                >
                    <FontAwesomeIcon 
                    icon={ faLinkedin } 
                    color='#4d4de'

                    />
                </a>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://github.com/ShadowFrost3167'
                >
                    <FontAwesomeIcon 
                    icon={ faGithub } 
                    color='#4d4de'

                    />
                </a>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://discord.gg/sNv4a5PZ'
                >
                    <FontAwesomeIcon 
                    icon={ faDiscord } 
                    color='#4d4de'

                    />
                </a>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://shadowfrost3167.itch.io/'
                >
                    <FontAwesomeIcon 
                    icon={ faGamepad } 
                    color='#4d4de'

                    />
                </a>

            </li>
        </ul>
    </div>
)

export default SideBar;