# Diseño del Sistema – CRUD de Productos (Versión 2.0 - Singleton)

Este documento describe el diseño lógico del sistema basado en el proyecto `crud-productos-base`, específicamente la versión `2.0` que implementa el patrón de diseño Singleton y organiza los componentes en capas funcionales.

## 📐 Estructura General

El sistema está dividido en dos capas principales:

### 1. **Frontend**
Encargado de la interacción con el usuario:
- `Interfaz de Usuario` (HTML + CSS): Define la estructura visual y estilos.
- `app.js`: Actúa como punto de entrada del sistema. Se encarga de recibir las acciones del usuario y redirigirlas hacia el controlador adecuado.

### 2. **Backend Lógico**
Gestiona la lógica de negocio y el almacenamiento:
- `productoManager.js`: Controlador de la lógica CRUD. Coordina la creación, lectura, actualización y eliminación de productos.
- `Singleton de productos`: Instancia única que administra la colección de productos en memoria.
- `storage.js`: Módulo de gestión del almacenamiento local (`localStorage`) del navegador. Se encarga de persistir los datos.

## 🧩 Patrón de diseño aplicado

**Singleton**: El objeto que representa la lista de productos se crea como una instancia única. Esto evita múltiples puntos de modificación y garantiza coherencia en la manipulación de los datos.

## 🖼️ Diagrama del diseño

El diagrama `diagrama_diseño_software.png` ubicado en esta misma carpeta (`docs/`) representa la arquitectura descrita, diferenciando claramente entre el frontend (interfaz y punto de entrada) y el backend lógico (controladores y almacenamiento).

## 📁 Archivos Relacionados

- `js/app.js`
- `js/productoManager.js`
- `js/storage.js`
- `index.html`
- `docs/diagrama_diseño_software.png`
- `docs/diagrama_archimate.archimate` (archivo editable desde Archi)

---


