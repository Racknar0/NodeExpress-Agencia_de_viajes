

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

    console.log(errores);

}

export {
    guardarTestimonial
}