import './Home.scss'
import React from 'react'
import 'aos/dist/aos.css'

const Home = () => {

    const [role, setRole] = React.useState({
        label: '',
        is_writing: true,
        taglines: [
            'Web Developer',
            'Frontend Developer',
            'Backend Developer',
            'Fullstack Developer',
            'Programming Enthusiast',
            'Whiskers Lover 🐱',
            'Big City Lover 🏙️'
        ]
    })
    // const [id, setId] = React.useState(0)
    // const [write, setWrite] = React.useState(true)  

    React.useEffect(() => {
        // console.log(role.label)
        const test_role = role.taglines[0]
        const write = setTimeout(() => {
            if(role.is_writing) {
                setRole(prevState => ({
                    ...prevState,
                    label: `${role.label}${test_role[role.label.length]}`
                }))
                if(role.label.length == test_role.length - 1) {
                    setRole(prevState => ({
                        ...prevState,
                        is_writing: false,
                    }))
                }
            } else {
                setRole(prevState => ({
                    ...prevState,
                    label: role.label.slice(0, -1)
                }))
                if(role.label.length == 1) {
                    setRole(prevState => ({
                        ...prevState,
                        is_writing: true,
                        taglines: [...prevState.taglines, prevState.taglines[0]].slice(1)
                    }))
                    // roles.shift()
                    // console.log(roles)
                }
            }
        }, (role.label.length == 0 || role.label.length == test_role.length) ? 1200 : 50)
        
        return () => {
            if(write) {
                clearTimeout(write)
            }
        }
    }, [role]) 

    return (
        <>  
            {/* <Navbar/> */}
            <div className='section-container'>
                <section 
                    className='section'>
                    <video autoPlay loop muted>
                        <source src="https://media.istockphoto.com/id/1358047343/id/video/semanggi-interchange-dengan-lalu-lintas-malam.mp4?s=mp4-640x640-is&k=20&c=HioaRXnWilyUUd79okF6WHYj47pu47KQLncNvJ_QNFA=" type="video/mp4" />
                    </video>
                    <div className='section__heading'>
                        <div className='heading-container'>
                            <div className='heading-display'>
                                <div className='heading-labels'>
                                    <h1>
                                        Hi, i&apos;m Afiif Imanto<br/>
                                        I&apos;m a { role.label }
                                        <span className='heading-labels__caret'>|</span>
                                    </h1>
                                    <span>Based in Jakarta, Indonesia 🇮🇩</span>
                                    <div className='button-group'>
                                        <button>Get my CV</button>
                                        {/* <a 
                                            href='https://www.linkedin.com/in/afiif-imanto-a46a7314b'
                                            target='_blank'>
                                            LinkedIn
                                        </a> */}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className='section'>
                    <div className='section__container'>
                        <h1 
                            data-aos="fade-right"
                            className='section__container__about-title'>About Me</h1>
                        <div className='section__container__about-me'>
                            <img 
                                data-aos="fade"
                                className='section__container__profile'
                                src="https://media.licdn.com/dms/image/D5635AQE-DifjHuR_4A/profile-framedphoto-shrink_400_400/0/1696314937611?e=1709143200&v=beta&t=AnaQO3AK5FvkfRTLdjIZnUurkrcg7b4YiJbgAQdhdm0" />
                            <p data-aos="fade-left">A hustler and a web developer with 5 years of experience specializing in front end development with solid knowledge in front end stacks such as React.js, Vue.js, TypeScript, CSS, and Tailwind CSS, with hands on experience in developing user-centric systems for customers in various industries.</p>
                        </div>
                    </div>
                </section> */}
                {/* <section className='section'>
                    <div className='section__container'>
                        <h1 data-aos="fade-up">My Stacks</h1>
                        <p>Some of the stacks i used to create web apps and solutions</p>
                        <div className='section__container__stack-menus'>
                            <ul>
                                <li><a>Frontend</a></li>
                                <li><a>Backend</a></li>
                                <li><a>Tools</a></li>
                                <li><a>Languages</a></li>
                            </ul>
                        </div>
                        <div className='section__container__tech-container'>
                            {
                                stacks.map((item, key) => {
                                    return (
                                        <>
                                            <div
                                                data-aos="fade"
                                                className='daktau'>
                                                <a
                                                    href='#'
                                                    key={key} 
                                                    className='section__container__tech-container__cells'>
                                                    <img src={item.icon}></img>
                                                </a>
                                                <p>{ item.label }</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section> */}
                
            </div>
        </>
    )
}

export default Home