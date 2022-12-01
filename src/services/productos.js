export const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const result = await res.json();
  return result;
};

export const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await res.json();
  return result;
};

export default getAllProducts;
