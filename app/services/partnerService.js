import Partner from "../models/Partner";

const getSuppliersFromDb = async () => {
  const data = await Partner.query({ where: { supplier_eq: true } });
  return data;
};

export { getSuppliersFromDb };
