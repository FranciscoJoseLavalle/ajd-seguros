import Links from '../../utilities/Links';
import './Header.css';

const Header = () => {
    return (
        <header id="inicio">
            <nav className='header__nav'>
                <a href="#inicio" className='header__nav-h1'>
                    <img src="./img/logo.jpg" alt="Logo" width={125} height={125} />
                    <h1>AJD<span>Seguros</span></h1>
                </a>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <ul className='header__nav-ul'>
                    {Links.map(link => (
                        <li key={link.label}><a href={link.route}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>

            <div className="collapse" id="navbarToggleExternalContent">
                <ul className='header__nav-ul-mobile'>
                    {Links.map(link => (
                        <>
                            <li key={link.label}><a href={link.route}>{link.label}</a></li>
                            <hr />
                        </>
                    ))}
                </ul>
            </div>

        </header>
    )
}

export default Header