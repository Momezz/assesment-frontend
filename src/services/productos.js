export const getAllProducts = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch('https://fakestoreapi.com/products', options);
  const result = await res.json();
  return result;
};

export const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await res.json();
  return result;
};

export const generateTime = (min, max) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini + 1) + mini);
};
