# GESTION DE ORDENES 
Esta aplicación es desarrollada con React, que se puede administar y gestionar las ordenes.
Prermite listar, filtrar por estado, agregar, editar y eliminar ordenes. Está construida utilizando Material UI.


## Tecnologías utilizadas

- React: La biblioteca principal para construir la interfaz de usuario.

- Material UI: Biblioteca de componentes UI para facilitar el diseño de la aplicación.

- React Router: Para la gestión de rutas y navegación dentro de la aplicación.

## Estructura del proyecto

``
``src/``
``├── components/ `` \
``│   ├── pagesComponents/ `` \
``│   │   ├──DesktopTable/`` \
``│   │   │      └──OrdenesDesktopTable.jsx`` \
``│   │   ├──MobileTable/`` \
``│   │   │      └──OrdenMobileTable.jsx`` \
``│   │   ├── TableOrden.jsx`` \
``│   │   ├── Layout.jsx`` \
``│   │   ├──NavButton.jsx`` \
``│   │   └── OrderDetailContent.jsx`` \
``│   ├── ui/`` \
``│        ├──color-mode.jsx`` \
``│        ├──provider.jsx`` \
``│        └──tooltip.jsx`` \
``│`` \
``├── context/`` \
``│    ├── reducers/`` \
``│    │      ├── OrdersReducer.js`` \
``│    │      └── detailReducer.js`` \
``│    ├── OrdenContext.jsx`` \
``│    └── OrdenDetailContext.jsx`` \
``│`` \
``├── hooks/`` \
``│   └── UseResponsive.js`` \
``│`` \
``├── pages/`` \
``│   ├── AddOrden/`` \
``│   │      ├──Components/`` \
``│   │      │     ├── ContenidoField.jsx`` \
``│   │      │     ├── DestinoField.jsx`` \
``│   │      │     ├── EstadoField.jsx`` \
``│   │      │     └── FechaField.jsx`` \
``│   │      ├── Hooks/`` \
``│   │      │     └──useAddOrdenForm.js`` \
``│   │      └── AddOrden.jsx`` \
``│   ├── Home/`` \
``│   │       ├── Components/`` \
``│   │       │    ├── FilterDrawer.jsx`` \
``│   │       │    └──OrdenDetailDrawer.jsx`` \
``│   │       ├── Hooks/`` \
``│   │       │     └──useHome.js`` \
``│   │       └── Home.jsx`` \
``│   ├── UpdateOrden/`` \
``│             └── updateOrdenlPages.jsx`` \ 
``├── Services/`` \
``│    ├── getOrderByCategory.js`` \
``│    ├── DeleteOrden.js`` \
``│    ├── AddOrdenEndpoint.js`` \
``│    └── updateOrden.js`` \
``│`` \
``└── App.jsx\`` \
`` \


## Rutas del Proyecto

| **Ruta**                      | **Descripción**                                                                 |
|-------------------------------|---------------------------------------------------------------------------------|
| `/`                            | **Página Principal**: Muestra una lista de todas las órdenes existentes.        |
| `/addOrden`                    | **Agregar Orden**: Permite agregar una nueva orden mediante un formulario.      |
| `/order/:id`                   | **Detalles de la Orden**: Muestra los detalles completos de una orden específica. El `:id` es el identificador de la orden. |
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

3. **Inicia el servidor de desarrollo:**
    ```bash
    npm start
    ```

