import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import Compañias from '../Compañias/Compañias'
import Nosotros from '../Nosotros/Nosotros'
import Seguros from '../Seguros/Seguros'
import Contacto from '../Contacto/Contacto'
import Whatsapp from '../Whatsapp/Whatsapp'
import GoUpBtn from '../GoUpBtn/GoUpBtn'

const Main = ({ isVisible }) => {
    const [segurosHeight, setSegurosHeight] = useState(0)
    const [contactHeight, setContactHeight] = useState(0)

    useEffect(() => {
        setSegurosHeight(document.querySelector('.seguros').clientHeight)
        setContactHeight(document.querySelector('.form-container').clientHeight)
    }, [])
    window.onresize = () => {
        setSegurosHeight(document.querySelector('.seguros').clientHeight)
        setContactHeight(document.querySelector('.form-container').clientHeight)
    }

    return (
        <main>
            <Carousel />
            <Nosotros />
            <Seguros segurosHeight={segurosHeight} />
            <Compañias />
            <Contacto contactHeight={contactHeight} />
            <Whatsapp />
            {isVisible ? null : <GoUpBtn />}
        </main>
    )
}

export default Main