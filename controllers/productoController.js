const Producto = require("../models/Producto");

// Registrar un producto
const crearProducto = async (req, res) => {
    try {
        const { nombre, precio, stock } = req.body;

        const producto = new Producto({
            nombre,
            precio,
            stock
        });

        const productoGuardado = await producto.save();

        res.status(201).json({
            mensaje: "Producto registrado correctamente",
            producto: productoGuardado
        });
    } catch (error) {
        res.status(400).json({
            mensaje: "Error al registrar el producto",
            error: error.message
        });
    }
};

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();

        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los productos",
            error: error.message
        });
    }
};

// Obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({
            mensaje: "ID de producto inválido",
            error: error.message
        });
    }
};

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId
};