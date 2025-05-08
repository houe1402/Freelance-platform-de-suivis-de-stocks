const Stock = require('../models/stockModel');

exports.getAllStocks = async (req, res) => {
    try {
        const stocks = await Stock.getAll();
        res.json(stocks);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.addStock = async (req, res) => {
    const { name, quantity } = req.body;
    try {
        const newStock = await Stock.add(name, quantity);
        res.status(201).json(newStock);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteStock = async (req, res) => {
    const { id } = req.params;
    try {
        await Stock.delete(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
};
