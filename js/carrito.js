const productosEnCarrito = JSON.parse(localStorage.getItem('carrito'));
const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');

console.log(contenedorCarritoVacio);

if (productosEnCarrito) {
    // add class disabled

    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.remove('disabled');
    contenedorCarritoAcciones.classList.remove('disabled');
    contenedorCarritoComprado.classList.add('disabled');

    contenedorCarritoProductos.innerHTML = '';

    productosEnCarrito.forEach(producto => {
        const div = document.createElement('div');
    div.classList.add('carrito-producto')
    div.innerHTML = ` 
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-nombre">
            <small>Titulo</small>
            <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i>Eliminar</button>
    `;
    contenedorCarritoProductos.append('div');
    });
    

} else {

}