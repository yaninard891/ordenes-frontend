import { useEffect, useState } from "react";
import { getOrderByState } from "../../../services/getOrderByState";

export const useHome = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");

  const estadosDisponibles = ["Pendiente", "En transito", "Entregado"];

  useEffect(() => {
    const fetchOrdenes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getOrderByState(estadoSeleccionado || null);
        setOrdenes(data);
      } catch (err) {
        setError("Error al cargar órdenes");
      } finally {
        setLoading(false);
      }
    };

    fetchOrdenes();
  }, [estadoSeleccionado]);

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