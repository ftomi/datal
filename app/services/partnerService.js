import Partner from "../models/Partner";

const getSuppliersFromDb = async (product) => {
  const data = await Partner.query({
    where: {
      supplier_eq: true,
      productId_eq: product
    }
  });
  return data;
};

export { getSuppliersFromDb };
