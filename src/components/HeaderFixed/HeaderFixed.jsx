import Links from '../../utilities/Links';
import './HeaderFixed.css';

const HeaderFixed = ({ isVisible }) => {
    return (
        <header className='header' style={{
            position: isVisible ? "initial" : "fixed",
            top: 0,
            left: 0,
            width: "100%"
        }}>
            <nav className='header__nav'>
                <a href="#inicio" className='header__nav-h1'>
                    <img src="./img/logolight.png" alt="Logo" width={125} height={125} />
                    {/* <h1>AJD<span>Seguros</span></h1> */}
                </a>
                <nav className="navbar navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContentFixed" aria-controls="navbarToggleExternalContentFixed" aria-expanded="false" aria-label="Toggle navigation">
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

            <div className="collapse" id="navbarToggleExternalContentFixed">
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

export default HeaderFixed