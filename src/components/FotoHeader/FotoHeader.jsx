import './FotoHeader.css';

function FotoHeader() {
    return (
        <div className='fotoArrowCont'>
            <div className="fotoCont">
                <div className="fotoCont-container">
                    <img src="./img/fotoMia.webp" alt="Foto mía" className="fotoMia" />
                    <div className="botonCont">
                        <a href="./cv/Francisco_Lavalle_CV.pdf" target="_blank"><button>Abrir
                            CV</button></a>
                    </div>
                </div>
            </div>
            <div className="arrowCont">
                <img src="./img/icons/arrow.webp" alt="Flecha" className="arrow" />
            </div>
        </div>
    )
}

export default FotoHeader