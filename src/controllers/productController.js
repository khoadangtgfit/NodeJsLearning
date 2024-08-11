const productService = require('../services/CRUDProductService');

const getAddPage = (req, res) => {
  res.render('product/create.ejs');
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products'
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await productService.addProduct(req.body);
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error adding product'
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id.replace(/^id=/, '');
    const product = await productService.getProductById(id);
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get product'
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id.replace(/^id=/, '');
    const updatedProduct = await productService.updateProductById(id, req.body);
    res.status(200).json({
      success: true,
      data: updatedProduct
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update product'
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id.replace(/^id=/, '');
    const deletedProduct = await productService.deleteProductById(id);
    res.status(200).json({
      success: true,
      data: deletedProduct
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete product'
    });
  }
};

module.exports = {
  getAddPage,
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById
};
