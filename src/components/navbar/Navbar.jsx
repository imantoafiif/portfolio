import React from 'react'
import classNames from 'classnames'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [navBgDark, setNavBgDark] = React.useState(false)

    const navClass = classNames({
        'navbar': true,
        'dark': navBgDark
    })

    const handleScroll = () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const pos = (currentScroll / scrollableHeight) * 100;
        if(pos > 0) {
            setNavBgDark(true)
        } else {
            setNavBgDark(false)
        }
    }

    React.useEffect(() => {
        AOS.init({
            duration: 500,
        })
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])  

    return (
        <nav className={navClass}>
            <div className='navbar__content'>
                <img
                    alt='main_logo' 
                    src='https://harnishdesign.net/demo/react/callum/demo/images/logo-light.png'/>
                <div className='navbar__content__menus'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/stacks">Stacks</Link></li>
                        <li><Link to="/experiences">Experiences</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
                <div className='navbar__content__soc-meds'>
                    <a 
                        target='_blank' 
                        href='https://www.linkedin.com/in/afiif-imanto-a46a7314b'>
                        <img alt="linkedin" src={linkedin}></img>
                    </a>
                    <a><img alt='github' src={github}></img></a>
                </div>  
            </div>
        </nav>
    )
}

export default Navbar