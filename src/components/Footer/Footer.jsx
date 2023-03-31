import Links from '../../utilities/Links'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <div className='footer__info'>
                    <img src="./img/ssn.png" alt="SSN Logo" width={125} height={125} />
                    <div>
                        <p>Amir Julián Dib</p>
                        <small>Productor Asesor de Seguros</small>
                        <small>Matrícula N°: 98.450</small>
                        <small>+54 11 3898-5512</small>
                        <small>seguros.ajd@gmail.com</small>
                    </div>
                </div>
                <nav className='footer__nav'>
                    <a href="#inicio" className='footer__nav-h1'>
                        <img src="./img/logo.jpg" alt="Logo" width={125} height={125} />
                        {/* <h1>AJD<span>Seguros</span></h1> */}
                    </a>
                    <ul className='footer__nav-ul'>
                        {Links.map(link => (
                            <li key={link.label}><a href={link.route}>{link.label}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
            <p>Desarrollado por <a href="https://franciscolavalle.netlify.app/" target="_blank">Francisco Lavalle</a></p>
        </footer>
    )
}

export default Footer