//!sintaxis imports
import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

/* const express = require('express'); //Importar express y asignar a variable */ //?sintaxis common js


const app = express(); //Funcion para ejecutar express


//! CONECTAR DATABASE
db.authenticate()
    .then(() => {
        console.log('Base de datos conectada')
    })
    .catch( error => {
        console.log(error)
    })


//! DEFINIR PUERTO PARA DEPLOYMENT EN HEROKU O PARA LOCALHOST

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener año actual
app.use( (req, res, next) => {
    const year = new Date()

    res.locals.ActualYear = year.getFullYear()
    res.locals.nombresitio = 'Agencia de Viajes';
    return next();
});

// Agregar body parser para ller los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router; USE soporta verbos get,post,delete etc
app.use('/', router)


/** Puerto y Host para la App */ 


 app.listen(port, host, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
}) 