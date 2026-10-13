const express = require("express");
const router = express.Router();

const {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId
} = require("../controllers/clienteController");

// POST: registrar un cliente
router.post("/", crearCliente);

// GET: listar todos los clientes
router.get("/", obtenerClientes);

// GET: buscar un cliente por ID
router.get("/:id", obtenerClientePorId);

module.exports = router;