
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para recibir datos JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("API FreshRoute funcionando correctamente");
});

// Conectar con MongoDB y luego iniciar el servidor
async function iniciarServidor() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB conectado correctamente");

        app.listen(PORT, () => {
            console.log(`Servidor funcionando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error.message);
        process.exit(1);
    }
}

iniciarServidor();
