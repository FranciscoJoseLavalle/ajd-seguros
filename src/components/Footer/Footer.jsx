import Links from '../../utilities/Links'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <div className='footer__info'>
                    <div className='footer__info-container'>
                        <img src='./img/amir.webp' className='footer__info-img' alt='Foto Amir'/>
                        <div className='footer__info-text'>
                            <p>Amir Julián Dib</p>
                            <small>Productor Asesor de Seguros</small>
                            <small>Matrícula N°: 98.450</small>
                            {/* <small>+54 11 3898-5512</small>
                        <small>seguros.ajd@gmail.com</small> */}
                        </div>
                    </div>
                    <img src="./img/ssn.webp" alt="SSN Logo" width={"100%"} />
                </div>
                <nav className='footer__nav'>
                    <ul className='footer__nav-ul'>
                        {Links.map(link => (
                            <li key={link.label}><a href={link.route}>{link.label}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
            <small>Desarrollado por <a href="https://franciscolavalle.netlify.app/" target="_blank">Francisco Lavalle</a></small>
        </footer>
    )
}

export default Footer


// <nav className='footer__nav'>
// <a href="#inicio" className='footer__nav-h1'>
//     <img src="./img/logo.jpg" alt="Logo" width={50} height={50} />
//     {/* <h1>AJD<span>Seguros</span></h1> */}
// </a>
// </nav>