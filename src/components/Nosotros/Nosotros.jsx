import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Nosotros.css'

const Nosotros = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id='nosotros'>
            <h2 data-aos="fade-right">Sobre <span style={{
                color: "#5275e7"
            }}>Nosotros</span></h2>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <p>Soy un <b>Productor Asesor de Seguros</b> donde mi misión es ofrecerle un <b>seguro</b> acorde a sus necesidades, para así <b>proteger</b> su <b>patrimonio</b> y/o <b>vida</b>.</p>
            </div>
        </section >
    )
}

export default Nosotros