// app.js – versión 2.1 con integración de storage.js

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const lista = document.getElementById("lista");

  // Mostrar productos al cargar
  renderizarLista();

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = formulario.nombre.value.trim();
    const precio = parseFloat(formulario.precio.value);
    const cantidad = parseInt(formulario.cantidad.value);

    if (nombre === "" || isNaN(precio) || isNaN(cantidad)) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      precio,
      cantidad
    };

    productoManager.agregar(nuevoProducto);
    renderizarLista();
    formulario.reset();
  });

  function renderizarLista() {
    const productos = productoManager.listar();
    lista.innerHTML = "";

    if (productos.length === 0) {
      lista.innerHTML = "<p>No hay productos registrados.</p>";
      return;
    }

    productos.forEach(producto => {
      const item = document.createElement("div");
      item.className = "producto";
      item.innerHTML = `
        <strong>${producto.nombre}</strong><br>
        Precio: $${producto.precio.toFixed(2)}<br>
        Cantidad: ${producto.cantidad}<br>
        <button data-id="${producto.id}" class="eliminar">Eliminar</button>
      `;
      lista.appendChild(item);
    });

    // Manejar eliminación
    document.querySelectorAll(".eliminar").forEach(boton => {
      boton.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        productoManager.eliminar(id);
        renderizarLista();
      });
    });
  }
});

