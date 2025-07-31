# 🌀 Notas de Scrum – Proyecto 3DPrint Manager

## Roles
- **Scrum Master**: Leli Liliana Díaz Izquierdo
- **Product Owner**: Estudiante líder del equipo
- **Development Team**: Todos los integrantes del equipo

---

## Sprint 1 – Refactorización y Preparación

### Objetivo
Reestructurar el proyecto para separar la lógica de almacenamiento (`storage.js`) y dejar la base preparada para nuevas funcionalidades como la edición de productos.

### Historias de Usuario
1. Como desarrollador, quiero separar la lógica de almacenamiento en un archivo independiente, para mantener el código organizado y reutilizable.
2. Como usuario, quiero poder ver los productos almacenados aunque cierre el navegador.

### Tareas
- [x] Crear archivo `storage.js`
- [x] Delegar persistencia desde `productoManager.js`
- [x] Verificar funcionamiento de agregar y eliminar productos
- [ ] Restaurar funcionalidad de **editar producto**

### Retroalimentación
El sistema ahora tiene una mejor arquitectura, pero falta recuperar la opción de edición que estaba en la versión anterior.

