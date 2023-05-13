import './Compañias.css';

const compañias = [
    { thumbnail: './img/compañias/allianz.webp' },
    { thumbnail: './img/compañias/cristobal.webp' },
    { thumbnail: './img/compañias/experta.webp' },
    { thumbnail: './img/compañias/patronal.webp' },
    { thumbnail: './img/compañias/provincia.webp' },
    { thumbnail: './img/compañias/rivadavia.webp' },
    { thumbnail: './img/compañias/sancor.webp' },
    { thumbnail: './img/compañias/rus.webp' },
    { thumbnail: './img/compañias/berkley.webp' },
    { thumbnail: './img/compañias/hdi.webp' },
    { thumbnail: './img/compañias/mercantil.webp' },
    { thumbnail: './img/compañias/sanpatricio.webp' },
    { thumbnail: './img/compañias/smg.webp' },
    { thumbnail: './img/compañias/zurich.webp' },
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