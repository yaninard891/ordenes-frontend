import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import AddOrden from "./Pages/AddOrden/AddOrden.jsx";
import { Layout } from "./components/pagesComponents/Layout.jsx";
import { AddOrdenEndpoint } from "./services/AddOrdenEndpoint.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout title="Gestión de Ordenes" subtitle="Lista de ordenes">
            <Home />
          </Layout>
        }
      />
      <Route
        path="/addOrden"
        element={
          <Layout title="Agregar Ordenes" subtitle="">
            <AddOrden />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
