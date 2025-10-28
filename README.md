# GESTION DE ORDENES 
Esta aplicación es desarrollada con React, construida utilizando Material UI, creada para administar y gestionar ordenes.
Esta aplicación permite gestionar órdenes de productos, permitiendo a los usuarios:
- Ver todas las órdenes en un listado filtrable.
- Ver los detalles de cada orden.
- Agregar nuevas órdenes mediante un formulario.
- Editar y eliminar órdenes existentes.


## Despliegue

La aplicación está desplegada y accesible en el siguiente enlace:

[Visitar la aplicación]https://ordenes-frontend-rho.vercel.app/

---



## Tecnologías utilizadas

- React: La biblioteca principal para construir la interfaz de usuario.

- Material UI: Biblioteca de componentes UI para facilitar el diseño de la aplicación.

- React Router: Para la gestión de rutas y navegación dentro de la aplicación.

## Estructura del proyecto

```
bash
src/
├── components/
│   ├── pagesComponents/ 
│   │   ├──DesktopTable/
│   │   │      └──OrdenesDesktopTable.jsx
│   │   ├──MobileTable/
│   │   │      └──OrdenMobileTable.jsx
│   │   ├── TableOrden.jsx
│   │   ├── Layout.jsx
│   │   ├──NavButton.jsx
│   │   └── OrderDetailContent.jsx
│   ├── ui/
│        ├──color-mode.jsx
│        ├──provider.jsx
│        └──tooltip.jsx
│
├── context/
│    ├── reducers/
│    │      ├── OrdersReducer.js
│    │      └── detailReducer.js
│    ├── OrdenContext.jsx
│    └── OrdenDetailContext.jsx
│
├── hooks/
│   └── UseResponsive.js
│
├── pages/
│   ├── AddOrden/
│   │      ├──Components/
│   │      │     ├── ContenidoField.jsx
│   │      │     ├── DestinoField.jsx
│   │      │     ├── EstadoField.jsx
│   │      │     └── FechaField.jsx
│   │      ├── Hooks/
│   │      │     └──useAddOrdenForm.js
│   │      └── AddOrden.jsx
│   ├── Home/
│   │       ├── Components/
│   │       │    ├── FilterDrawer.jsx
│   │       │    └──OrdenDetailDrawer.jsx
│   │       ├── Hooks/
│   │       │     └──useHome.js
│   │       └── Home.jsx
│   ├── UpdateOrden/
│             └── updateOrdenlPages.jsx 
├── Services/
│    ├── getOrderByCategory.js
│    ├── DeleteOrden.js
│    ├── AddOrdenEndpoint.js
│    └── updateOrden.js
│
└── App.jsx\
```


## Rutas del Proyecto

| **Ruta**                      | **Descripción**                                                                 |
|-------------------------------|---------------------------------------------------------------------------------|
| `/`                            | **Página Principal**: Muestra una lista de todas las órdenes existentes y filtro.        |
| `/addOrden`                    | **Agregar Orden**: Permite agregar una nueva orden mediante un formulario.      |
| `/orders/edit/:id`             | **Editar Orden**: Permite editar una orden existente usando su `id`.           |
| `/orders/delete/:id`           | **Eliminar Orden**: Permite eliminar una orden específica usando su `id`.      |

---

## Cómo ejecutar el proyecto

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/usuario/proyecto.git
    ```

2. **Instala las dependencias:**
    ```bash
    npm install
    ```

3. **Correr el proyecto:**
    ```bash
    npm run dev
    ```

