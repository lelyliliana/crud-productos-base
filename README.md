# 3DPrint Manager – CRUD de Productos en 3D

Este proyecto es una evolución del CRUD desarrollado para el curso de **Ingeniería de Software II**. En esta versión se integran el patrón Singleton, la modularización del almacenamiento mediante `storage.js` y una interfaz moderna y responsiva.

---

## 🎯 Objetivos de aprendizaje

Este repositorio permite aplicar los siguientes conceptos clave del diseño de software:

- ✅ **Diseño de software estructurado**: separación de responsabilidades, patrón Singleton, modelo modular.
- ✅ **Gestión de configuración**: organización por capas lógicas (frontend y backend), uso de ramas en Git.
- ✅ **Interfaz de usuario intuitiva**: diseño responsive con CSS3, enfocado en usabilidad.
- ✅ **Persistencia de datos local**: almacenamiento en `localStorage` mediante un módulo externo (`storage.js`).
- ✅ **Arquitectura simple en capas**: identificación de componentes frontend, lógica de negocio y persistencia.

---

## 🧱 Estructura del proyecto
📁 js/
├── app.js # Controlador principal de eventos e interfaz
├── productoManager.js # Lógica CRUD con patrón Singleton
└── storage.js # Módulo de persistencia en localStorage

📁 assets/
├── logo.png
└── css/
└── style.css

📄 index.html # Interfaz principal del proyecto
📄 README.md

---

## 🚀 ¿Cómo usarlo?

1. Clona este repositorio o descarga el `.zip`.
2. Abre `index.html` directamente en tu navegador.
3. Llena el formulario con nombre, precio y cantidad del producto.
4. Haz clic en **Agregar** para incluirlo en la lista.
5. Usa el botón **Eliminar** para quitar productos.
6. Todos los datos se almacenan automáticamente en tu navegador (usando `localStorage`).

---

## 🧠 Diagrama del sistema (versión 2.1)

El sistema está dividido en dos capas principales:

[ Interfaz de Usuario ]
|
app.js → productoManager.js → Singleton
|
storage.js

Este diseño modular facilita la trazabilidad del flujo de datos y separa claramente las responsabilidades.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (diseño responsivo)
- JavaScript (patrón Singleton, modular)
- Almacenamiento local (`localStorage`)

---

✨ Mejora de la Interfaz de Usuario (rama interfaz)

En esta etapa se propuso un rediseño de la interfaz gráfica para mejorar la claridad, eficiencia y experiencia de usuario. Aunque aún no se han implementado las funcionalidades, se han realizado los siguientes aportes:

    ✅ Diseño digital y boceto a mano del nuevo flujo de interfaz.

    ✅ Inclusión de campo para subir imagen del producto.

    ✅ Visualización de miniaturas en la lista de productos.

    ✅ Control numérico para modificar la cantidad de productos.

    ✅ Botones de acción con íconos intuitivos para agregar, editar y eliminar productos.

    ✅ Archivo evaluacion-interfaz.md con checklist de criterios de usabilidad.

📂 Archivos relacionados:

    docs/rediseño_interfaz.png

    docs/rediseño_dibujo.png

    docs/evaluacion-interfaz.md

🔧 Implementación de funcionalidades pendiente en próximos commits.

---
## 🖌️ Créditos

**Autora:** Leli Liliana Díaz Izquierdo  
**Curso:** Ingeniería de Software II  
**Institución:** Uniremington  
**Versión:** 2.1 – CRUD modular con Singleton y manejo de almacenamiento externo

---

> “Este proyecto forma parte de un enfoque pedagógico orientado al aprendizaje activo del diseño y arquitectura de software en entornos reales.”

