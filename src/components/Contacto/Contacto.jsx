import './Contacto.css';
import Loader from '../Loader/Loader'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { app } from '../../fb';

const Contacto = ({ contactoHeight }) => {
    const [asunto, setAsunto] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [archivo, setArchivo] = useState('');
    const [isArchivo, setIsArchivo] = useState(false);
    const [sending, setSending] = useState(false);
    const [finallySent, setFinallySent] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])
    const sent = (e) => {
        e.preventDefault();
        const a = validarCampo(asunto, document.querySelector('#asunto'))
        const b = validarCampo(nombre, document.querySelector('#nombre'))
        const c = validarCampo(email, document.querySelector('#email'))
        const d = validarCampo(telefono, document.querySelector('#telefono'))
        const f = validarCampo(mensaje, document.querySelector('#mensaje'))
        const g = isArchivo ? validarCampo(archivo, document.querySelector('#archivo')) : true

        if (a && b && c && d && f && g) {
            setSending(true);
            emailjs.send("service_8q90a54", "template_9xc4yyt", { asunto, nombre, email, telefono, mensaje, enlace: archivo ? `Enlace al archivo adjunto: ${archivo}` : "No se envió archivo adjunto." }, "DiAaHBMoI1dvusi44")
                .then(res => {
                    if (res.text === 'OK') {
                        setSending(false);
                        setFinallySent(true);
                    }
                })
        }
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
    const sendFile = async (e) => {
        setIsArchivo(true);
        const archivo = e.target.files[0];
        const storageRef = app.storage().ref();
        const archivoPath = storageRef.child(archivo.name + "-" + Date.now());
        await archivoPath.put(archivo);
        const enlace = await archivoPath.getDownloadURL();
        setArchivo(enlace);
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
                            }}>Complete el formulario para que me pueda contactar con usted y así brindarle un asesoramiento acorde a sus necesidades.</p>
                            <div className='redes' data-aos="fade-up" style={{
                                textShadow: "#000 -1px 1px 4px"
                            }}>
                                <a href="https://www.instagram.com/seguros.ajd/" target="_blank"><img src="./img/contacto/instagram.png" alt="Instagram" /> <span>@seguros.ajd</span></a>
                                <span><img src="./img/contacto/mail.png" alt="Email" /> seguros.ajd@gmail.com</span>
                                <span><img src="./img/contacto/phone.png" alt="Teléfono" /> +54 11 3898-5512</span>
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
                                    <label htmlFor='telefono'>* Teléfono</label>
                                    <input type="number" id='telefono' placeholder='Ingresa tu teléfono...' onChange={(e) => setTelefono(e.target.value)} />
                                </div>
                                <div data-aos="fade-up">
                                    <label htmlFor='mensaje'>* Mensaje</label>
                                    <textarea type="text" id='mensaje' placeholder='Ingresa el mensaje...' onChange={(e) => setMensaje(e.target.value)} />
                                </div>
                                <div data-aos="fade-up">
                                    <label htmlFor='archivo'>Suba un archivo</label>
                                    <input type="file" id='archivo' onChange={sendFile} />
                                    {isArchivo &&
                                        <p style={{
                                            fontSize: '1rem'
                                        }}>{archivo ? "Subido correctamente" : "Subiendo..."}</p>
                                    }
                                </div>
                                <button>Enviar</button>
                                {sending && <Loader />}
                                {finallySent && <p>Correo enviado correctamente.</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contacto