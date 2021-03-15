import Product from "../models/Product";
import Barcode from "../models/Barcode";

const getProductsFromDb = async () => {
  await setTimeout(() => {}, 2000);
  const data = await Product.query();
  const bc = await Barcode.query();
  if (data) {
    for (let row of data) {
      const barcodes = await Barcode.query({ where: { productId_eq: row.id } });
      row.barcodes = barcodes;
    };
  }
  return data;
};

const getProductByBarcode = async (code) => {
  await setTimeout(() => {}, 2000);
  const barcode = await Barcode.findBy({ code_eq: code });
  if (!barcode) return null;
  const product = await Product.findBy({ id_eq: barcode.productId });
  return product;
};

export { getProductsFromDb, getProductByBarcode };
