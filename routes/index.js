import express from 'express'

const router = express.Router();


router.get('/', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.send('Inicio')
});
router.get('/nosotros', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.send('Nosotros')
});
router.get('/contacto', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.send('Contacto')
});


export default router;