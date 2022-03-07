import { Viaje } from '../models/Viaje.js'


const paginaInicio = (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => { 

    //!CONSULTAR DATABASE
    const viajes = await Viaje.findAll();

    console.log(viajes);


    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes: viajes
    })
}

const paginaTestimoniales = (req, res) => { 
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}