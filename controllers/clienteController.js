const Cliente = require("../models/Cliente");

// Registrar un cliente
const crearCliente = async (req, res) => {
    try {
        const { nombre, telefono, email, direccion } = req.body;

        const cliente = new Cliente({
            nombre,
            telefono,
            email,
            direccion
        });

        const clienteGuardado = await cliente.save();

        res.status(201).json({
            mensaje: "Cliente registrado correctamente",
            cliente: clienteGuardado
        });
    } catch (error) {
        res.status(400).json({
            mensaje: "Error al registrar el cliente",
            error: error.message
        });
    }
};

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();

        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los clientes",
            error: error.message
        });
    }
};

// Obtener un cliente por su ID
const obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensaje: "Cliente no encontrado"
            });
        }

        res.status(200).json(cliente);
    } catch (error) {
        res.status(400).json({
            mensaje: "ID de cliente inválido",
            error: error.message
        });
    }
};

module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId
};