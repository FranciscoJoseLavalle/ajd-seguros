import Links from '../../utilities/Links'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <p>Teléfono: +54 11 1234-5678</p>
                <p>ajdseguros@ejemplo.com</p>
            </div>
            <nav className='footer__nav'>
                <a href="#inicio" className='footer__nav-h1'>
                    <img src="./img/logo.jpg" alt="Logo" width={125} height={125} />
                    <h1>AJD<span>Seguros</span></h1>
                </a>
                <ul className='footer__nav-ul'>
                    {Links.map(link => (
                        <li key={link.label}><a href={link.route}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer