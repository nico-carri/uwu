// Función para actualizar la cantidad de productos en el carrito
export function actualizarCantidadCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const cantidad = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const badge = document.getElementById('carrito-cantidad');
  badge.textContent = cantidad;
  badge.style.display = cantidad > 0 ? 'block' : 'none';
}

// Función para agregar un producto al carrito
export function agregarAlCarrito(id) {
  fetch('../assets/data/productos.json')
      .then(response => response.json())
      .then(data => {
          const producto = data.find(p => p.Id === id);
          if (!producto) return;

          const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
          const item = carrito.find(p => p.id === id);
          if (item) {
              item.cantidad += 1;
          } else {
              carrito.push({ id: producto.Id, cantidad: 1, nombre: producto.Nombre });
          }

          localStorage.setItem('carrito', JSON.stringify(carrito));
          actualizarCantidadCarrito();
      })
      .catch(error => console.error('Error al agregar al carrito:', error));
}

// Función para listar los productos del carrito
export function listarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const carritoDiv = document.getElementById('carrito-items');
  carritoDiv.innerHTML = carrito.map(item => `
      <div>
          <p>${item.nombre}</p>
          <p>${item.cantidad}</p>
      </div>
  `).join('');
}

// Función para vaciar el carrito
export function vaciarCarrito() {
  localStorage.removeItem('carrito');
  listarCarrito();
  actualizarCantidadCarrito();
}
