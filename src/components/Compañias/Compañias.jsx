import './Compañias.css';

const compañias = [
    { thumbnail: './img/compañias/allianz.png' },
    { thumbnail: './img/compañias/cristobal.png' },
    { thumbnail: './img/compañias/experta.png' },
    { thumbnail: './img/compañias/patronal.png' },
    { thumbnail: './img/compañias/provincia.png' },
    { thumbnail: './img/compañias/rivadavia.webp' },
    { thumbnail: './img/compañias/sancor.png' },
    { thumbnail: './img/compañias/rus.webp' },
    { thumbnail: './img/compañias/berkley.png' },
    { thumbnail: './img/compañias/hdi.png' },
    { thumbnail: './img/compañias/mercantil.png' },
    { thumbnail: './img/compañias/sanpatricio.png' },
    { thumbnail: './img/compañias/smg.png' },
    { thumbnail: './img/compañias/zurich.png' },
]

const Compañias = () => {
    return (
        <section id="compañias">
            <h2 data-aos="fade-right">Compañías</h2>
            <div>
                {compañias.map((compañia, i) => <img data-aos="flip-left" src={compañia.thumbnail} alt={"Compañía"} width={100} height={100} key={i} />)}
            </div>
        </section>
    )
}

export default Compañias