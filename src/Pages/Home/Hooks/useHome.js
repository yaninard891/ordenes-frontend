import { useEffect, useState } from "react";
import { getOrderByState } from "../../../services/getOrderByState";

export const useHome = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
  const estadosDisponibles = ["Pendiente", "En transito", "Entregado"];

  // Cargar órdenes
  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const data = await getOrderByState();
        setOrdenes(data);
      } catch (err) {
        setError("Error al cargar órdenes");
      } finally {
        setLoading(false);
      }
    };
    fetchOrdenes();
  }, []);

  // Filtrado por estado
  const ordenesFiltradas = estadoSeleccionado
    ? ordenes.filter((o) => o.estado === estadoSeleccionado)
    : ordenes;

  return {
    ordenesFiltradas,
    loading,
    error,
    estadosDisponibles,
    estadoSeleccionado,
    setEstadoSeleccionado,
  };
};
