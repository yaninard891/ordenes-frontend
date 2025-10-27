import React from "react";

import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Layout } from "./components/pagesComponents/Layout";
import Home from "./Pages/Home/Home";
import AddOrden from "./Pages/AddOrden/AddOrden";
import OrderDetailPage from "./Pages/OrderDetail/OrderDetailPages";
import UpdateOrdenPages from "./Pages/UpdateOrden/updateOrdenPages"; 

function App() {
  return (
   
  <Routes>
      <Route element={<Layout title="Gestión de Órdenes" subtitle="Lista de órdenes" />}>
        <Route path="/" element={<Home />} />            
        <Route path="/addOrden" element={<AddOrden />} />  
        <Route path="/order/:id" element={<OrderDetailPage />} /> {/* Detalle de orden */}
        <Route path="/orders/edit" element={<UpdateOrdenPages />} /> {/* Editar órdenes */}
      </Route>
    </Routes>
    
  );
}

export default App;
