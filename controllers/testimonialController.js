

const guardarTestimonial = (req, res) => {

    //! validar
    const { nombre, correo, mensaje } = req.body

    const errores = [];

    if(nombre.trim()  === '') {
        errores.push({mensaje: 'El name esta vacio'});
    }

    if(correo.trim()  === '') {
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim()  === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0) {
        
        //mostrar vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
    }

}

export {
    guardarTestimonial
}