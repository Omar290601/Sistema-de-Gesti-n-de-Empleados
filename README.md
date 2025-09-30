# Sistema de Gestión de Empleados

Este proyecto es un sistema CRUD para la gestión de empleados, desarrollado con **Spring Boot**, **MySQL** y **React**. Permite administrar empleados de manera sencilla mediante una API REST.

---

## Funcionalidades

- Listar empleados con su información básica (nombre, departamento y sueldo).  
- Agregar nuevos empleados con validaciones:  
  - Nombre obligatorio y con longitud mínima.  
  - Sueldo no negativo.  
  - Departamento seleccionado desde un menú desplegable.  
- Editar información de empleados existentes.  
- Eliminar empleados de la base de datos.  
- Integración con MySQL usando **Spring Data JPA**.  
- Validaciones de formularios en frontend y backend.

---

## Tecnologías utilizadas

- **Backend:** Spring Boot, Spring Data JPA, MySQL  
- **Frontend:** React + Vite  
- **Herramientas:** Postman para pruebas de API, GitHub para control de versiones

---

## Estructura del Proyecto

- **backend/**: Contiene el código de Spring Boot y la configuración de la base de datos.  
  - `controller/`: Controladores REST para empleados.  
  - `modelo/`: Entidades JPA que representan las tablas.  
  - `servicio/`: Lógica de negocio para manejar empleados.  
  - `repositorio/`: Interfaces JPA para operaciones con MySQL.

- **frontend/**: Proyecto React + Vite para la interfaz de usuario.  
  - `empleados/`: Componentes para listar, agregar y editar empleados.  
  - `plantilla/`: Componentes comunes como navegación y layout.  

---

## Validaciones Implementadas

- **Nombre:** obligatorio y longitud mínima de 3 caracteres.  
- **Departamento:** seleccionado desde un menú desplegable para evitar entradas incorrectas.  
- **Sueldo:** debe ser un número positivo mayor o igual a cero.  

Estas validaciones están presentes tanto en el frontend como en el backend.

---

## Flujo de la Aplicación

1. El usuario accede al listado de empleados.  
2. Puede agregar un nuevo empleado con validaciones en tiempo real.  
3. Puede editar la información de un empleado existente, verificando los datos ingresados.  
4. Puede eliminar un empleado directamente desde el listado.  
5. Todos los cambios se reflejan en la base de datos MySQL en tiempo real.  

---


## Objetivo

El proyecto sirve como ejemplo práctico de integración entre backend y frontend, aplicando buenas prácticas de desarrollo, validaciones de formularios y arquitectura basada en servicios.

---

## Imagenes 
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/ac5bd0c7-70ed-4648-bcd9-4f2b6cae22ab" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/1eba963c-f1e4-4aa3-ae08-78e89a341ddb" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/57cc9a88-64e8-4920-95d0-2f70ff554f4e" />



