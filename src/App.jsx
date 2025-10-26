import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/pagesComponents/Layout";
import Home from "./Pages/Home/Home";
import AddOrden from "./Pages/AddOrden/AddOrden";
import OrderDetailPage from "./Pages/OrderDetail/OrderDetailPages";
import UpdateOrdenPage from "./Pages/UpdateOrden/updateOrdenPages"; 

function App() {
  return (
    <Routes>
      <Route element={<Layout title="Gestión de Órdenes" subtitle="Lista de órdenes" />}>
        <Route path="/" element={<Home />} />               {/* Lista de órdenes con filtro */}
        <Route path="/addOrden" element={<AddOrden />} />   {/* Formulario agregar orden */}
        <Route path="/order/:id" element={<OrderDetailPage />} /> {/* Detalle de orden */}
        <Route path="/ordenes/edit" element={<UpdateOrdenPage />} /> {/* Editar órdenes */}
      </Route>
    </Routes>
  );
}

export default App;
