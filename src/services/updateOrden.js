const BASE_URL = import.meta.env.VITE_BASE_URL;


export const updateOrden = async (body, id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(body),
    });

   const response = await res.json();
   
    return { status: res.status, data: response};
  } catch (e) {
    console.error(e);
  }
};
