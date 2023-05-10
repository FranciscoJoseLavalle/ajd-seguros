import './Seguros.css';
import './SegurosAnimation.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const seguros = [
    { label: "Automotores", thumbnail: "./img/seguros/car.png",description: "Protege tu vehículo ante posibles daños o robos, así como también cubre los gastos médicos y legales que puedan derivarse de un accidente de tránsito."},
    { label: "Motocicletas", thumbnail: "./img/seguros/motorbike.png",description: "Brinda la protección necesaria para ti y tu moto, cubriendo los posibles daños que puedan sufrir ambos en caso de accidente, robo o daños materiales."  },
    { label: "Bicicleta Monopatín", thumbnail: "./img/seguros/bicycle.png", description: "Ofrece cobertura en caso de daños o robo de tu bicicleta o monopatín, así como también protección en caso de accidentes que puedan involucrar a terceros." },
    { label: "Combinado Familiar", thumbnail: "./img/seguros/family.png", description: "Abarca múltiples áreas de tu vida y la de tu familia, como hogar, vehículos, salud y vida, ofreciendo protección en caso de imprevistos en cualquiera de estas áreas." },
    { label: "Caución", thumbnail: "./img/seguros/handshake.png",description:"Garantiza el cumplimiento de obligaciones económicas de una de las partes involucradas en un contrato, ofreciendo protección en caso de incumplimiento." },
    { label: "Accidentes Personales", thumbnail: "./img/seguros/accidente.png",description: "Brinda protección ante accidentes que puedan ocurrir fuera del ámbito laboral, cubriendo gastos médicos y ofreciendo una compensación económica en caso de invalidez o fallecimiento." },
    { label: "ART", thumbnail: "./img/seguros/helmet.png",description: "Obligatorio para empleadores, este seguro protege a los trabajadores en caso de accidentes laborales o enfermedades profesionales." },
    { label: "Vida", thumbnail: "./img/seguros/vida.png",description:"Este seguro ofrece una compensación económica en caso de fallecimiento del asegurado, brindando así tranquilidad y seguridad a la familia." },
    { label: "Retiro", thumbnail: "./img/seguros/money-bag.png",description: "Asegura una jubilación tranquila y sin preocupaciones económicas, ofreciendo una renta vitalicia en el momento de la jubilación." },
    { label: "Comercio Industrias", thumbnail: "./img/seguros/factory.png",description: "Brinda  protección en caso de daños materiales, robo, incendios, responsabilidad civil y otros imprevistos que puedan afectar el negocio o la empresa."},
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
                                            <p>{seguro.description}</p>
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