const express = require('express');
const router = express.Router();
// Importa el controlador
const { apiHealth, apiEvents, apiEventsId  } = require('../controllers/eventController');

// Utilitza el controlador per a la ruta que llista tots els usuaris
router.get('/health', apiHealth);

router.post('/events', apiEvents);

router.get('/events/:id', apiEventsId);

module.exports = router;