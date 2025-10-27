import { AddOrdenEndpoint } from "../../../services/AddOrdenEndpoint";
import { useRef, useState } from "react";

export function useAddOrdenForm() {
  const estados= ["Pendiente", "En transito", "Entregada", "Otros"];

  const [form, setForm] = useState({
    destino: "",
    contenido: "",
    fecha_creacion: "",
    estado: "", 
  });

  const [errors, setErrors] = useState({});
  const submittedRef = useRef(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submittedRef.current && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.destino.trim()) next.destino = "El destino es obligatorio.";
    if (!form.contenido.trim()) next.contenido = "El contenido es obligatorio.";
    if (!form.fecha_creacion) next.fecha_creacion = "La fecha es obligatoria.";
    if (!form.estado) next.estado = "El estado es obligatorio.";
    return next;
  };

  const focusFirstInvalid = (errs) => {
    const order = ["destino", "contenido", "fecha_creacion", "estado"];
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
      setSnackbar({
        open: true,
        message: Object.values(nextErrors)[0],
        severity: "error",
      });
      setTimeout(() => focusFirstInvalid(nextErrors), 0);
      return;
    }

    const newOrder = {
      destino: form.destino.trim(),
      contenido: form.contenido.trim(),
      fecha_creacion: form.fecha_creacion,
      estado: form.estado,
    };

    const response = await AddOrdenEndpoint(newOrder);

    if (response?._id) {
      setSnackbar({
        open: true,
        message: "Orden creada correctamente",
        severity: "success",
      });
      setForm({ destino: "", contenido: "", fecha_creacion: "", estado: "" });
      submittedRef.current = false;
      setErrors({});
    } else {
      setSnackbar({
        open: true,
        message: "Error al crear la orden",
        severity: "error",
      });
    }
  };

  return {
    form,
    setForm,
    errors,
    onChange,
    onSubmit,
    snackbar,
    setSnackbar,
    estados,
    submittedRef,
  };
}
