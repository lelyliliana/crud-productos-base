// Asegúrate que storage.js esté cargado antes que este archivo

const productoManager = (function () {
  let productos = Storage.obtenerProductos(); // Usamos storage.js

  function agregar(producto) {
    productos.push(producto);
    Storage.guardarProductos(productos); // Guardamos cambios
  }

  function listar() {
    return productos;
  }

  function eliminar(id) {
    productos = productos.filter(p => p.id !== id);
    Storage.guardarProductos(productos);
  }

  function editar(id, nuevosDatos) {
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
      productos[index] = { ...productos[index], ...nuevosDatos };
      Storage.guardarProductos(productos);
    }
  }

  return {
    agregar,
    listar,
    eliminar,
    editar
  };
})();

