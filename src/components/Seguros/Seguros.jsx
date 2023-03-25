import './Seguros.css';
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

const Seguros = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id='seguros'>
            <div>
                <div>
                    <h2 data-aos="fade-up">¿Qué <span style={{
                        color: "#5275e7"
                    }}>ofrecemos?</span></h2>
                    <div className='seguros'>
                        {seguros.map((seguro, i) => (
                            <div key={i} className="seguro" data-aos="flip-left">
                                <img src={seguro.thumbnail} alt={seguro.label} />
                                <small>{seguro.label}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seguros