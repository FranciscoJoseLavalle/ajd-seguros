import './Seguros.css';
import './SegurosAnimation.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const seguros = [
    { label: "Automotores", thumbnail: "./img/seguros/car.png" },
    { label: "Motocicletas", thumbnail: "./img/seguros/motorbike.png" },
    { label: "Bicicleta/Monopatín", thumbnail: "./img/seguros/bicycle.png" },
    { label: "Combinado Familiar", thumbnail: "./img/seguros/family.png" },
    { label: "Caución", thumbnail: "./img/seguros/handshake.png" },
    { label: "ART", thumbnail: "./img/seguros/helmet.png" },
    { label: "Retiro", thumbnail: "./img/seguros/money-bag.png" },
    { label: "Comercio Industria", thumbnail: "./img/seguros/factory.png" },
]

const Seguros = ({ segurosHeight }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id='seguros' style={{
            height: segurosHeight
        }}>
            <img src="./img/segurosback.jpg" alt="Fondo" className='img' height={segurosHeight} />
            <div className='seguros'>
                <div>
                    <h2 data-aos="fade-right">¿Qué <span style={{
                        color: "#5275e7",
                    }}>ofrecemos?</span></h2>
                    <div className='seguros'>
                        {seguros.map((seguro, i) => (
                            <div key={i} data-aos="flip-left" className='test'>
                                <div className="container">
                                    <div className="seguro">
                                        <img src={seguro.thumbnail} alt={seguro.label} />
                                        <small>{seguro.label}</small>
                                    </div>
                                    <div className="text">
                                        <div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero aliquam vel magnam autem iste sunt officia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seguros