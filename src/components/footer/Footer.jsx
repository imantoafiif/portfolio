import react from '../../assets/react.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <h1>Contact Me</h1>
            <div>
                <p>Built with ❤️ and simplicity in mind using</p>
                <img alt='react' src={react}></img>
                <p>@ 2024</p>
            </div>
        </footer>
    )
}

export default Footer