import { getProductsByCategory } from "../../../services/getProductsByCategory";
import { useEffect, useState } from "react";

export const useHome = () => {
  const [cat, setCat] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(cat).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [cat]);

  useEffect(() => {
    if (products && products.length > 0) {
      const uniqueCategories = [
        ...new Set(products.map((prod) => prod.categoria)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  return { cat, setCat, categories, products, loading };
};
