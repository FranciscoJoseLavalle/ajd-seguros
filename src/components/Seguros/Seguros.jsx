import './Seguros.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

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
    const [height, setHeight] = useState(0)

    useEffect(() => {
        AOS.init();
        setHeight(document.querySelector('.seguros').clientHeight)
    }, [])
    window.onresize = () => {
        setHeight(document.querySelector('.seguros').clientHeight)
    }

    return (
        <section id='seguros' style={{
            height
        }}>
            <img src="./img/segurosback.jpg" alt="Fondo" className='img' height={height} />
            <div className='seguros'>
                <div>
                    <h2 data-aos="fade-right">¿Qué <span style={{
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