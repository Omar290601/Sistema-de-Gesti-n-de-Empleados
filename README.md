Gestión de Empleados

Esta aplicación es un sistema CRUD desarrollado con Spring Boot, MySQL y un frontend en React. Su objetivo es gestionar empleados de manera sencilla y eficiente mediante una API REST.

Funcionalidades principales

Listar empleados con sus datos básicos.

Agregar nuevos empleados con validaciones (nombre, sueldo, departamento).

Editar la información de un empleado existente.

Eliminar empleados de la base de datos.

Conexión a MySQL mediante Spring Data JPA.

Validaciones en formularios: sueldo no negativo, nombre no vacío, y selección de departamento desde un menú desplegable.

Tecnologías utilizadas

Backend: Spring Boot (REST API), Spring Data JPA, MySQL.

Frontend: React + Vite.

Herramientas: Postman para pruebas de API, GitHub para control de versiones.

API Endpoints
Empleados
GET /api/empleados → Listar todos

GET /api/empleados/{id} → Buscar por ID

POST /api/empleados → Crear

PUT /api/empleados/{id} → Actualizar

DELETE /api/empleados/{id} → Eliminar

Objetivo

El proyecto busca servir como ejemplo práctico de integración entre backend y frontend, aplicando buenas prácticas de desarrollo, validaciones en formularios y arquitectura basada en servicios.
