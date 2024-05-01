
const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const userRoutes = require('./api/routes/userRoutes');
const eventRoutes = require('./api/routes/eventRoutes');
const app = express();

// Middleware
app.use(express.json());

// Configuración de formato JSON
app.set('json spaces', 2);

// Conexión a la base de datos MongoDB
mongoose.connect(dbConfig.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Definición de rutas
app.use('/api', eventRoutes);
app.use('/api', userRoutes);

// Exportación de la aplicación
module.exports = app;
