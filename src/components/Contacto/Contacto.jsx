import './Contacto.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';


const Contacto = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        AOS.init();
        setHeight(document.querySelector('.form-container').clientHeight)
    }, [])
    window.onresize = () => {
        setHeight(document.querySelector('.form-container').clientHeight)
    }

    return (
        <section id='contacto' style={{
            height
        }}>
            <img src="./img/contacto/background.jpg" alt="Fondo" style={{
                height
            }} />
            <div>
                <div className='form-container'>
                    <h2 data-aos="fade-right" style={{
                        textShadow: "#000 -1px 1px 4px"
                    }}>Contacto</h2>
                    <p data-aos="fade-up" style={{
                        textShadow: "#000 -1px 1px 4px"
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam ab facilis!</p>
                    <div>
                        <div className='redes' data-aos="fade-up">
                            <a href="https://www.instagram.com/seguros.ajd/" target="_blank"><img src="./img/contacto/instagram.png" alt="Instagram" /> <span>Instagram</span></a>
                            <span><img src="./img/contacto/mail.png" alt="Email" /> asdas@ejemplo.com</span>
                            <span><img src="./img/contacto/phone.png" alt="Teléfono" /> +54 11 1234-5678</span>
                        </div>
                        <form>
                            <div data-aos="fade-up">
                                <label>Asunto</label>
                                <input type="text" placeholder='Ingresa el asunto...' required />
                            </div>
                            <div data-aos="fade-up">
                                <label>Nombre</label>
                                <input type="text" placeholder='Ingresa tu nombre...' required />
                            </div>
                            <div data-aos="fade-up">
                                <label>Email</label>
                                <input type="email" placeholder='Ingresa tu mail...' required />
                            </div>
                            <div data-aos="fade-up">
                                <label>Mensaje</label>
                                <textarea type="text" placeholder='Ingresa tu nombre' required />
                            </div>
                            <button data-aos="fade-up">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contacto