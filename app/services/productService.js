import Product from "../models/Product";
import Barcode from "../models/Barcode";

const getProductsFromDb = async () => {
  const data = await Product.query();
  const bc = await Barcode.query();
  if (data) {
    for (let row of data) {
      const barcodes = await Barcode.query({ where: { productId_eq: row.id } });
      console.warn(row.id, barcodes);
      row.barcodes = barcodes;
    };
  }
  return data;
};

const getProductByBarcode = async (code) => {
  const barcode = await Barcode.findBy({ code_eq: code });
  if (!barcode) return null;
  const product = await Product.findBy({ id_eq: barcode.productId });
  return product;
};

export { getProductsFromDb, getProductByBarcode };
