const Product = require('../models/Product');

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw new Error('Error fetching products');
  }
};

const addProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    await newProduct.save();
    return newProduct;
  } catch (err) {
    throw new Error('Failed to save product');
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) throw new Error('Product not found');
    return product;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get product');
  }
};

const updateProductById = async (id, dataUpdate) => {
  try {
    const productUpdated = await Product.findByIdAndUpdate(id, dataUpdate, {
      new: true, // Return the updated document
      runValidators: true // Run schema validators
    });
    if (!productUpdated) throw new Error('Product not found');
    return productUpdated;
  } catch (error) {
    throw new Error('Failed to update product');
  }
};

const deleteProductById = async (id) => {
  try {
    const productDeleted = await Product.findByIdAndDelete(id);
    if (!productDeleted) throw new Error('Product not found');
    return productDeleted;
  } catch (error) {
    throw new Error('Failed to delete product');
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById
};
