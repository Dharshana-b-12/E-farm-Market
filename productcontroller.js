const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  const { title, description, price, image } = req.body;
  const farmerId = req.user.id;
  try {
    const product = await Product.create({ title, description, price, image, farmerId });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().populate('farmerId', 'name');
  res.json(products);
};
