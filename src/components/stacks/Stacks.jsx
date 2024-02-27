import './Stacks.scss'
import 'aos/dist/aos.css'
import React from 'react'

const Stacks = () => {
    
    const techs = {
        frontend: [
            { icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', label: 'React.js' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png', label: 'Vue.js' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png', label: 'Nuxt.js' },
            { icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', label: 'Next.js' },
            { icon: 'https://sass-lang.com/assets/img/styleguide/seal-color.png', label: 'SASS' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png', label: 'Tailwind CSS' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png', label: 'CSS 3' },
            // { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png', label: 'Javascript' },
            // { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png', label: 'Typescript' }
        ], 
        backend: [
            { icon: 'https://cdn.icon-icons.com/icons2/3398/PNG/512/django_logo_icon_214686.png', label: 'Django' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png', label: 'PostgreSQL' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png', label: 'Python' },
            { icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png', label: 'Express.js' },
            { icon: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png', label: 'Node.js' }
        ]
    }

    const [stacks, setStack] = React.useState([])
    const [samples, setSamples] = React.useState(techs.frontend)

    React.useEffect(() => {

        if(stacks.length == samples.length) return

        const workTimer = setTimeout(() => {
            setStack([...stacks, samples[stacks.length]])
        }, 50) 
        
        return () => {
            clearTimeout(workTimer)
        }
        
    }, [stacks, samples])

    const display_stack = which => {
        setStack([])
        setSamples(techs[which])
    }

    return (
        <>
            <div className='section-container'>
                <section className='section'>
                    <video autoPlay loop muted>
                        <source src="https://media.istockphoto.com/id/1369700948/id/video/pemandangan-kompleks-stadion-senayan-yang-baru-direnovasi.mp4?s=mp4-640x640-is&k=20&c=9qqG87NM-L9BbU9LbdTf7K6XlApBAXVXbm6s5DihfgM=" type="video/mp4" />
                    </video>
                    <div className='section__container'>
                        <h1 data-aos="fade-up">My Stacks</h1>
                        <p>Some of the tools and techs i used to create solutions</p>
                        <div className='section__container__stack-menus'>
                            <ul>
                                <li><a onClick={() => display_stack('frontend')}>Frontend</a></li>
                                <li><a onClick={() => display_stack('backend')}>Backend</a></li>
                                <li><a>Tools</a></li>
                                <li><a>Dev </a></li>
                            </ul>
                        </div>
                        <div className='section__container__tech-container'>
                            {
                                stacks.map((item, key) => {
                                    return (
                                        <div
                                            key={key}
                                            data-aos="fade-right"
                                            className='daktau'>
                                            <a
                                                href='#'
                                                key={key} 
                                                className='section__container__tech-container__cells'>
                                                <img src={item.icon}></img>
                                            </a>
                                            <p>{ item.label }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <span>
                            {
                                [0, 1].map((item, key) => {
                                    return (
                                        <i key={key}></i>
                                    )
                                })
                            }
                        </span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Stacks