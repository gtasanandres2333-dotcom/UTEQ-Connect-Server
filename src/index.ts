import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/MongoDB.js';
import locationRoutes from './apis/location/location.routes.js';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar a MongoDB
connectDB();

// Routes
app.use('/api/locations', locationRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'UTEQ Connect API 🚀' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`API Locations: http://localhost:${PORT}/api/locations`);
});

export default app;