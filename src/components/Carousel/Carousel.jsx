import './Carousel.css';

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./img/auto.webp" className="d-block w-50" alt="..." />
                    <div>
                        <h3>¡Manejá tranquilo!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lauda.</p>
                        <button>Contactanos</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/confianza.webp" className="d-block w-50" alt="..." />
                    <div>
                        <h3>Confianza</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lauda.</p>
                        <button>Contactanos</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/trabajo.webp" className="d-block w-50" alt="..." />
                    <div>
                        <h3>ART Riesgos del Trabajo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lauda.</p>
                        <button>Contactanos</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

export default Carousel