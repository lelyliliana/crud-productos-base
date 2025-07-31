// js/storage.js

const Storage = {
  /**
   * Guarda la lista de productos en localStorage
   * @param {Array} productos - Lista de productos a guardar
   */
  guardarProductos: function (productos) {
    localStorage.setItem('productos', JSON.stringify(productos));
  },

  /**
   * Obtiene la lista de productos almacenados en localStorage
   * @returns {Array} - Lista de productos
   */
  obtenerProductos: function () {
    const datos = localStorage.getItem('productos');
    return datos ? JSON.parse(datos) : [];
  }
};

