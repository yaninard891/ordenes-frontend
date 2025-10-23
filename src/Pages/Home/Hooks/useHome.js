import { getProductsByState } from "../../../Services/getProductsByState";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [estado, setEstado] = useState(null); // estado seleccionado
  const [estadosDisponibles, setEstadosDisponibles] = useState([]); // lista de estados únicos en productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    getProductsByState(estado).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [estado]);

  
  useEffect(() => {
    if (products.length > 0) {
      const uniqueEstados = [...new Set(products.map((p) => p.estado))];
      setEstadosDisponibles(uniqueEstados);
    } else {
      setEstadosDisponibles([]);
    }
  }, [products]);

  return { estado, setEstado, estadosDisponibles, products, loading };
};
