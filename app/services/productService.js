import Product from "../models/Product";
import Barcode from "../models/Barcode";

const getProductsFromDb = async () => {
  const data = await Product.query();
  return data;
};

const getProductByBarcode = async (code) => {
  const barcode = await Barcode.findBy({ code_eq: code });
  if (!barcode) return null;
  const product = await Product.findBy({ id_eq: barcode.productId });
  return product;
};

export { getProductsFromDb, getProductByBarcode };
