import Links from '../../utilities/Links';
import './Header.css';

const Header = () => {
    return (
        <header id="header">
            <nav className='header__nav'>
                <a href="#header" className='header__nav-h1'>
                    <img src="./img/logo.jpg" alt="Logo" width={125} height={125} />
                    <h1>AJD<span>Seguros</span></h1>
                </a>
                <ul className='header__nav-ul'>
                    {Links.map(link => (
                        <li key={link.label}><a href={link.route}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header