import Links from '../../utilities/Links'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            Teléfono: +54 11 1234-5678

            <nav className='header__nav'>
                <ul className='header__nav-ul'>
                    {Links.map(link => (
                        <li key={link.label}><a href={link.route}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer