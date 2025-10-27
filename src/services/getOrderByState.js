const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getOrderByState = async (estado = null) => {
  const response = await fetch(`${BASE_URL}${estado ? `?estado=${estado}` : ""}`);
  const res = await response.json();
  return res;
};
