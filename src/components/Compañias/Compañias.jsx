import './Compañias.css';

const compañias = [
    { thumbnail: './img/allianz.png' },
    { thumbnail: './img/cristobal.png' },
    { thumbnail: './img/experta.png' },
    { thumbnail: './img/patronal.png' },
    { thumbnail: './img/provincia.png' },
    { thumbnail: './img/rivadavia.webp' },
    { thumbnail: './img/sancor.png' },
]

const Compañias = () => {
    return (
        <section id="compañias">
            <h2 data-aos="fade-right">Compañías</h2>
            <div>
                {compañias.map((compañia, i) => <img data-aos="flip-left" src={compañia.thumbnail} width={100} height={100} key={i} />)}
            </div>
        </section>
    )
}

export default Compañias