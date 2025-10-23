const BASE_URL = import.meta.env.VITE_BASE_URL;


export const AddOrdenEndpoint = async (body) => {
  try {
    const res = await fetch (BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(body),
    });

   const response = await res.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};
