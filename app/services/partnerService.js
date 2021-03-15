import Partner from "../models/Partner";

const getSuppliersFromDb = async (product) => {
  await setTimeout(() => {}, 2000);
  const data = await Partner.query({
    where: {
      supplier_eq: true,
      productId_eq: product
    }
  });
  return data;
};

export { getSuppliersFromDb };
