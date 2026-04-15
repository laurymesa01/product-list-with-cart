const API_URL = import.meta.env.VITE_API_URL;

export const api = {
    getDesserts: async () => {
      const res = await fetch(`${API_URL}/desserts`);
      if (!res.ok) throw new Error("Error al obtener postres");
      return res.json();
    },
  };