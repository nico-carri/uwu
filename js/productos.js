const productos = [
    {
        id: 1,
        nombre: "Buzo Hunter x Hunter",
        precio: 25000,
        descripcion: "Buzo HUNTER X HUNTER",
        imagen: "../imagenes/productos/buzos/buzo-HxH.jpg"
    },
    {
        id: 2,
        nombre: "Buzo My Hero Academia",
        precio: 25000,
        descripcion: "Buzo de My Hero Academia",
        imagen: "../imagenes/productos/buzos/buzo-MHA.jpg"
    },
    {
        id: 3,
        nombre: "Buzo Nana",
        precio: 25000,
        descripcion: "Buzo de Nana",
        imagen: "../imagenes/productos/buzos/buzo-nana.jpg"
    },
    {
        id: 4,
        nombre: "Buzo Attack on Titan",
        precio: 20000,
        descripcion: "Buzo de algodón color verde",
        imagen: "../imagenes/productos/buzos/buzo-aot.jpg"
    }
];

const productosOferta = [
    {
        id: 1,
        nombre: "Bolso Haikyu",
        precio: 25000,
        descripcion: "Bolso Haikyu",
        imagen: "../imagenes/productos/ofertas/bolso-haikyu.jpg"
    },
    {
        id: 2,
        nombre: "Peluche Gojo",
        precio: 25000,
        descripcion: "Peluche de Satoru Gojo",
        imagen: "../imagenes/productos/ofertas/peluche-Jujutsu-Kaisen-Satoru-Gojo.jpg"
    },
    {
        id: 3,
        nombre: "Haori Naruto",
        precio: 25000,
        descripcion: "Haori de Naruto",
        imagen: "../imagenes/productos/ofertas/ropa-naruto.jpg"
    },
    {
        id: 4,
        nombre: "Taza Demon Slayer",
        precio: 25000,
        descripcion: "Taza de Demon Slayer",
        imagen: "../imagenes/productos/ofertas/taza-Demon-Slayer.jpg"
    }
];

const contenedorProductos = document.querySelector("#productos");
const contenedorOfertas = document.querySelector(".productos-ofertas");

function renderizarProductos(productos, contenedor) {
    if (!contenedor) return;
    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto-caja">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="add-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}

// Renderizar productos y ofertas
renderizarProductos(productos, contenedorProductos);
renderizarProductos(productosOferta, contenedorOfertas);
