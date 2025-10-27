const BASE_URL = import.meta.env.VITE_BASE_URL;

export const DeleteOrden = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // consistente con fetch moderno
      },
    });

    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
    
    return { error: true, message: error.message };
  }
};
