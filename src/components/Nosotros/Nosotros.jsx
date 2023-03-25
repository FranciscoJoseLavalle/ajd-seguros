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
            <h2 data-aos="fade-left">Sobre <span style={{
                color: "#5275e7"
            }}>Nosotros</span></h2>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Laudantium ducimus</b> ullam deleniti <b>aspernatur</b>, obcaecati est fuga molestiae ex beatae cupiditate nesciunt <b>consequatur dolorum</b> porro incidunt iure nemo! Commodi odit tempora vitae recusandae consectetur, atque aliquid beatae, <b>exercitationem neque</b> nostrum, tempo.</p>
            </div>
        </section >
    )
}

export default Nosotros