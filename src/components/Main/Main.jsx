import React from 'react'
import Carousel from '../Carousel/Carousel'
import Compañias from '../Compañias/Compañias'
import Nosotros from '../Nosotros/Nosotros'
import Seguros from '../Seguros/Seguros'
import Whatsapp from '../Whatsapp/Whatsapp'

const Main = () => {
    return (
        <main>
            <Carousel />
            <Nosotros />
            <Seguros />
            <Compañias />
            <Whatsapp />
        </main>
    )
}

export default Main