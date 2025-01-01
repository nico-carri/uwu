import { actualizarCantidadCarrito, agregarAlCarrito, listarCarrito, vaciarCarrito } from './carrito.js';

window.addEventListener('DOMContentLoaded', () => {
    resaltarPaginaActual();
    inicializarEventos();
});

function inicializarEventos() {
    actualizarCantidadCarrito();

    if (document.getElementById('carrito')) {
        listarCarrito();
    }

    if (document.getElementById('vaciar-carrito')) {
        document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
    }

    document.addEventListener('click', event => {
        if (event.target.classList.contains('agregar')) {
            const id = parseInt(event.target.dataset.id, 10);
            agregarAlCarrito(id);
        }
    });
}
