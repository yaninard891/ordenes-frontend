const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getProductsByCategory = async (cat = null) => {
  const response = await fetch(`${BASE_URL}${cat ? `?categoria=${cat}` : ""}`);
  const res = await response.json();

  return res;
};
