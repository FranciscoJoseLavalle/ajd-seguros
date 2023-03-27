import './Contacto.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contacto = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id='contacto'>
            <h2 data-aos="fade-right">Contacto</h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam ab facilis!</p>
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
        </section>
    )
}

export default Contacto