# Migración y Optimización: Personal Website Template

Este proyecto es una versión modernizada y migrada del tema original **Personal** de Start Bootstrap. Se ha transformado de una arquitectura basada en Pug/Gulp a una moderna basada en **Vite 7**, con inyección dinámica de datos y soporte total para español.

## Resumen de la Migración

### Arquitectura Moderna
- **Vite 7**: Desarrollo ultrarrápido y builds optimizados para producción.
- **Vanilla JS + Bootstrap 5.3.3**: Estructura limpia sin dependencias pesadas innecesarias.
- **Sass 1.83.4**: Estilos modernos con variables fáciles de configurar.
- **Data-Driven & Dinámico**: Toda la información del sitio, incluyendo secciones de habilidades y un catálogo de servicios (con sus propios iconos y descripciones), se gestiona de forma ilimitada desde `src/js/data.js`.

### Optimización de Carga (Sin Flicker)
Se implementó un sistema de pre-renderizado dinámico mediante un plugin de Vite (`html-transform`). Esto asegura que el contenido (incluyendo listas de proyectos y experiencia) se inyecte directamente en el HTML durante el build, eliminando cualquier parpadeo visual al cargar la página.

### 🇪🇸 Traducción y Personalización
- **Español 100%**: Todos los textos, menús y formularios han sido traducidos.
- **Colores Personalizables**: Cambia el esquema de colores editando `$blue` y `$pink` en `src/scss/_variables.scss`.

---

## Cómo usar el proyecto

1.  **Instalación**:
    ```bash
    npm install
    ```

2.  **Desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Producción**:
    ```bash
    npm run build
    ```
    Los archivos listos para desplegar se generarán en la carpeta `/dist`.

4.  **Editar Contenido**:
    Simplemente modifica los valores en `src/js/data.js` para actualizar tu nombre, proyectos, experiencia y redes sociales.

---

## Créditos y Referencia Original

Este proyecto es una derivación (migración) del tema **Personal** creado por **Start Bootstrap**.

- **Proyecto Original**: [Start Bootstrap - Personal](https://startbootstrap.com/theme/personal)
- **Repositorio Original**: [GitHub Start Bootstrap Personal](https://github.com/StartBootstrap/startbootstrap-personal)
- **Autor Original**: David Miller ([@davidtmiller](https://github.com/davidtmiller))

## Demo Online
https://templateboot.segurab.com/

![App Screenshot](https://res.cloudinary.com/imgresd/image/upload/v1771691709/template_xjbthr.png)

### Licencia
Al igual que el proyecto original, este trabajo se distribuye bajo la licencia **MIT**. Puedes usarlo para cualquier propósito, incluso comercial.

---

### Copyright Original
Copyright 2013-2023 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE) license.
