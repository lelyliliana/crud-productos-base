const gestor = ProductoManager.getInstancia();

// DOM
const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.getElementById("inputPrecio");
const btnAgregar = document.getElementById("btnAgregar");
const listaProductos = document.getElementById("listaProductos");

let modoEdicion = false;
let idProductoEditando = null;

// Evento: Agregar o Editar
btnAgregar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();
  const precio = parseInt(inputPrecio.value.trim());

  if (nombre === "" || isNaN(precio)) {
    alert("Por favor ingresa un nombre y un precio válido.");
    return;
  }

  if (modoEdicion) {
    gestor.actualizar(idProductoEditando, { id: idProductoEditando, nombre, precio });
    modoEdicion = false;
    idProductoEditando = null;
    btnAgregar.textContent = "Agregar";
  } else {
    const producto = {
      id: Date.now(),
      nombre,
      precio
    };
    gestor.agregar(producto);
  }

  inputNombre.value = "";
  inputPrecio.value = "";
  mostrarProductos();
});

// Mostrar productos
function mostrarProductos() {
  const productos = gestor.obtenerTodos();
  listaProductos.innerHTML = "";

  productos.forEach(p => {
    const item = document.createElement("li");
    item.innerHTML = `
      ${p.nombre} - $${p.precio.toLocaleString()}
      <button onclick="editarProducto(${p.id})">Editar</button>
      <button onclick="eliminarProducto(${p.id})">Eliminar</button>
    `;
    listaProductos.appendChild(item);
  });
}

// Eliminar producto
function eliminarProducto(id) {
  gestor.eliminar(id);
  mostrarProductos();
}

// Editar producto
function editarProducto(id) {
  const producto = gestor.buscarPorId(id);
  if (producto) {
    inputNombre.value = producto.nombre;
    inputPrecio.value = producto.precio;
    idProductoEditando = producto.id;
    modoEdicion = true;
    btnAgregar.textContent = "Guardar";
  }
}

mostrarProductos();

