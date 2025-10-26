const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getOrderByState = async (estado = null) => {
  try {
    const url = estado ? `${BASE_URL}?estado=${estado}` : BASE_URL;
    console.log("🔹 Fetching desde:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("🔹 Respuesta del servidor:", data);

    return data;
  } catch (error) {
    console.error("❌ Error al obtener órdenes:", error);
    return [];
  }
};
