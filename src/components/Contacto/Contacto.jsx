import './Contacto.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contacto = ({ contactoHeight }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id='contacto' style={{
            height: contactoHeight
        }}>
            <img src="./img/contacto/background.jpg" alt="Fondo" height={contactoHeight} />
            <div>
                <div className='form-container'>
                    <div>
                        <div className='form-container-text'>
                            <h2 data-aos="fade-right" style={{
                                textShadow: "#000 -1px 1px 4px"
                            }}>Contacto</h2>
                            <p data-aos="fade-up" style={{
                                textShadow: "#000 -1px 1px 4px"
                            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam ab facilis!</p>
                            <div className='redes' data-aos="fade-up" style={{
                                textShadow: "#000 -1px 1px 4px"
                            }}>
                                <a href="https://www.instagram.com/seguros.ajd/" target="_blank"><img src="./img/contacto/instagram.png" alt="Instagram" /> <span>Instagram</span></a>
                                <span><img src="./img/contacto/mail.png" alt="Email" /> asdas@ejemplo.com</span>
                                <span><img src="./img/contacto/phone.png" alt="Teléfono" /> +54 11 1234-5678</span>
                            </div>
                        </div>
                        <div className='form'>
                            <form>
                                <div className='contact-info'>
                                    <div data-aos="fade-up">
                                        <label htmlFor='asunto'>Asunto</label>
                                        <input type="text" id='asunto' placeholder='Ingresa el asunto...' required />
                                    </div>
                                    <div data-aos="fade-up">
                                        <label htmlFor='nombre'>Nombre</label>
                                        <input type="text" id='nombre' placeholder='Ingresa tu nombre...' required />
                                    </div>
                                    <div data-aos="fade-up">
                                        <label htmlFor='email'>Email</label>
                                        <input type="email" id='email' placeholder='Ingresa tu mail...' required />
                                    </div>
                                </div>
                                <div data-aos="fade-up">
                                    <label htmlFor='mensaje'>Mensaje</label>
                                    <textarea type="text" id='mensaje' placeholder='Ingresa el mensaje...' required />
                                </div>
                                <div data-aos="fade-up">
                                    <label htmlFor='archivo'>Suba un archivo</label>
                                    <input type="file" id='archivo' placeholder='Ingresa el mensaje...' required />
                                </div>
                                <button data-aos="fade-up">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contacto