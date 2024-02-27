import './About.scss'
import 'aos/dist/aos.css'

const About = () => {
    return (
        <>
            <div className='section-container'>
                <section className='section'>
                    <video autoPlay loop muted>
                        <source src="https://media.istockphoto.com/id/1224545211/id/video/sunset-time-jakarta-city-modern-pusat-kota-pencakar-langit-udara-panorama-4k-indonesia.mp4?s=mp4-640x640-is&k=20&c=51KeFXq1Jg2RZxHBhHWeE1wARnP77u9_uO7omxc4YSg=" type="video/mp4" />
                    </video>
                    <div className='section__container'>
                        <h1 
                            data-aos="fade-right"
                            className='section__container__about-title'>About Me</h1>
                        <div className='section__container__about-me'>
                            <img 
                                alt='profile picture'
                                data-aos="fade"
                                className='section__container__profile'
                                src="https://media.licdn.com/dms/image/D5635AQE-DifjHuR_4A/profile-framedphoto-shrink_400_400/0/1696314937611?e=1709143200&v=beta&t=AnaQO3AK5FvkfRTLdjIZnUurkrcg7b4YiJbgAQdhdm0" />
                            <div>
                                <p data-aos="fade-left">A hustler and a web developer with 5 years of experience specializing in front end development with solid knowledge in front end stacks such as React.js, Vue.js, TypeScript, CSS, and Tailwind CSS, with hands on experience in developing user-centric systems for customers in various industries.</p>
                                {/* <h2>Contact me for some commission</h2>
                                <p data-aos="fade-left">A hustler and a web developer with 5 years of experience specializing in front end development with solid knowledge in front end stacks such as React.js</p> */}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About