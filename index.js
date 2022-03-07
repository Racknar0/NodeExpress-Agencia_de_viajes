//!sintaxis imports
import express from 'express'
import router from './routes/index.js'

/* const express = require('express'); //Importar express y asignar a variable */ //?sintaxis common js


const app = express(); //Funcion para ejecutar express


//! DEFINIR PUERTO PARA DEPLOYMENT EN HEROKU O PARA LOCALHOST
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router; USE soporta verbos get,post,delete etc
app.use('/', router)


app.listen(port, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
})