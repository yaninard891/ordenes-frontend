import { AddProductsEndpoint } from "../../../services/AddProductsEndpoint";
import { useRef, useState } from "react";

export function useAddProductForm() {
  const categoriasBase = ["Electrodomesticos", "Muebles de oficina", "Muebles de living", "Otros"];

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    estado: "",
    descripcion: "",  // corregí que estaba faltando descripción
  });

  const [categoriaControl, setCategoriaControl] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [categorias, setCategorias] = useState(categoriasBase);
  const [errors, setErrors] = useState({});
  const submittedRef = useRef(false);

  // Estado para snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (submittedRef.current && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onChangeCategoria = (e) => {
    const value = e.target.value;
    setCategoriaControl(value);
    if (submittedRef.current) {
      setErrors((prev) => ({
        ...prev,
        categoria: undefined,
        nuevaCategoria: undefined,
      }));
    }
    if (value === "añadir") {
      setForm((p) => ({ ...p, categoria: "" }));
      setNuevaCategoria("");
    } else {
      setForm((p) => ({ ...p, categoria: value }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.nombre?.trim()) next.nombre = "El nombre es obligatorio.";
    else if (form.nombre.trim().length < 2)
      next.nombre = "El nombre es muy corto.";

    const precioNum = Number(form.precio);
    if (form.precio === "") next.precio = "El precio es obligatorio.";
    else if (Number.isNaN(precioNum))
      next.precio = "El precio debe ser un número.";
    else if (precioNum <= 0) next.precio = "El precio debe ser mayor a 0.";

    if (categoriaControl === "añadir") {
      if (!nuevaCategoria.trim())
        next.nuevaCategoria = "Ingresá la nueva categoría.";
    } else {
      if (!form.categoria) next.categoria = "Seleccioná una categoría.";
    }

    return next;
  };

  const focusFirstInvalid = (errs) => {
    const order = ["nombre", "precio", "categoria", "nuevaCategoria", "estado"];
    for (const key of order) {
      if (errs[key]) {
        const el = document.querySelector(`[name="${key}"]`);
        if (el) el.focus();
        break;
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    submittedRef.current = true;

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstMsg =
        nextErrors.nombre ||
        nextErrors.precio ||
        nextErrors.categoria ||
        nextErrors.nuevaCategoria ||
        "Revisá los campos marcados.";

      // Mostrar snackbar con error
      setSnackbar({
        open: true,
        message: firstMsg,
        severity: "error",
      });

      setTimeout(() => focusFirstInvalid(nextErrors), 0);
      return;
    }

    const categoriaFinal =
      categoriaControl === "añadir" ? nuevaCategoria.trim() : form.categoria;

    if (
      categoriaControl === "añadir" &&
      nuevaCategoria &&
      !categorias.includes(nuevaCategoria)
    ) {
      setCategorias((prev) => [...prev, nuevaCategoria]);
    }

    const nuevoProducto = {
      nombre: form.nombre.trim(),
      precio: Number(form.precio),
      categoria: categoriaFinal,
      descripcion: form.descripcion.trim(),
    };

    const response = await AddProductsEndpoint(nuevoProducto);

    if (response?._id) {
      setSnackbar({
        open: true,
        message: `${nuevoProducto.nombre} fue cargado correctamente.`,
        severity: "success",
      });
    } else {
      setSnackbar({
        open: true,
        message: `${nuevoProducto.nombre} no fue cargado correctamente.`,
        severity: "error",
      });
    }

    setForm({ nombre: "", precio: "", categoria: "", descripcion: "" });
    setCategoriaControl("");
    setNuevaCategoria("");
    setErrors({});
    submittedRef.current = false;
  };

  return {
    form,
    setForm,
    categorias,
    categoriaControl,
    setCategoriaControl,
    nuevaCategoria,
    setNuevaCategoria,
    errors,
    onChange,
    onChangeCategoria,
    onSubmit,
    snackbar,
    setSnackbar,
  };
}