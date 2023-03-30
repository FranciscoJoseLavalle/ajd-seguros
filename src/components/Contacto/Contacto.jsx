import './Contacto.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = ({ contactoHeight }) => {
    const [asunto, setAsunto] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        AOS.init();
    }, [])
    const sent = (e) => {
        e.preventDefault();
        const a = validarCampo(asunto, document.querySelector('#asunto'))
        const b = validarCampo(nombre, document.querySelector('#nombre'))
        const c = validarCampo(email, document.querySelector('#email'))
        const d = validarCampo(mensaje, document.querySelector('#mensaje'))

        if (a && b && c && d) emailjs.send("service_8q90a54", "template_9xc4yyt", { asunto, nombre, email, mensaje }, "DiAaHBMoI1dvusi44");
        console.log({ asunto, nombre, email, mensaje });
    }
    const validarCampo = (campo, input) => {
        if (/^\s/.test(campo) || campo === '') {
            input.classList.add('inputWrong');
            return false
        } else {
            input.classList.remove('inputWrong');
            return true
        }
    }
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
                            <form onSubmit={sent}>
                                <div className='contact-info'>
                                    <div data-aos="fade-up">
                                        <label htmlFor='asunto'>* Asunto</label>
                                        <input type="text" id='asunto' placeholder='Ingresa el asunto...' onChange={(e) => setAsunto(e.target.value)} />
                                    </div>
                                    <div data-aos="fade-up">
                                        <label htmlFor='nombre'>* Nombre</label>
                                        <input type="text" id='nombre' placeholder='Ingresa tu nombre...' onChange={(e) => setNombre(e.target.value)} />
                                    </div>
                                    <div data-aos="fade-up">
                                        <label htmlFor='email'>* Email</label>
                                        <input type="email" id='email' placeholder='Ingresa tu mail...' onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div data-aos="fade-up">
                                    <label htmlFor='mensaje'>* Mensaje</label>
                                    <textarea type="text" id='mensaje' placeholder='Ingresa el mensaje...' onChange={(e) => setMensaje(e.target.value)} />
                                </div>
                                <div data-aos="fade-up">
                                    <label htmlFor='archivo'>Suba un archivo</label>
                                    <input type="file" id='archivo' placeholder='Ingresa el mensaje...' />
                                </div>
                                <button>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contacto