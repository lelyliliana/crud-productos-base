const ProductoManager = (function () {
  let instancia;

  function getProductsFromStorage() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  function saveProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  function crearInstancia() {
    let productos = getProductsFromStorage();

    return {
      agregar: function (producto) {
        productos.push(producto);
        saveProductsToStorage(productos);
      },
      obtenerTodos: function () {
        return productos;
      },
      eliminar: function (id) {
        productos = productos.filter(p => p.id !== id);
        saveProductsToStorage(productos);
      },
      actualizar: function (id, nuevoProducto) {
        productos = productos.map(p => (p.id === id ? nuevoProducto : p));
        saveProductsToStorage(productos);
      },
      buscarPorId: function (id) {
        return productos.find(p => p.id === id);
      }
    };
  }

  return {
    getInstancia: function () {
      if (!instancia) {
        instancia = crearInstancia();
      }
      return instancia;
    }
  };
})();

