//traigo la informacion de localstorage
let productosCarrito = localStorage.getItem("productos-carrito");
productosCarrito = JSON.parse(productosCarrito);

//traigo parte del DOM
const contendorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

//agrego los productos al carrito
function cargarProductosCarrito(){
if(productosCarrito && productosCarrito.length > 0) {

  contendorCarritoVacio.classList.add("disabled");
  contenedorCarritoProductos.classList.remove("disabled");
  contenedorCarritoAcciones.classList.remove("disabled");
  contenedorCarritoComprado.classList.add("disabled");

  contenedorCarritoProductos.innerHTML = " ";

  productosCarrito.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
    <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-producto-titulo">
          <small>Titulo</small>
          <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
          <small>Cantidad</small>
          <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
          <small>Precio</small>
          <p>$${producto.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
          <small>Subtotal</small>
          <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
    `;

    contenedorCarritoProductos.append(div);
  })

} else {
    contendorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }
  
  actualizarBotonEliminar();
  actualizarTotal()
}

cargarProductosCarrito()


function actualizarBotonEliminar() {
  botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonEliminar.forEach(boton => {
      boton.addEventListener("click", eliminarDelCarrito);
  });
};

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosCarrito.findIndex(producto => producto.id === idBoton);

  productosCarrito.splice(index , 1);
  cargarProductosCarrito();

  localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
};

//vaciar carrito
botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  productosCarrito.length = 0;
  localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
  cargarProductosCarrito();
};

//total
function actualizarTotal() {
  const totalCalculado= productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  total.innerText = `$${totalCalculado}`;
};

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
  productosCarrito.length = 0;
  localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
  
  contendorCarritoVacio.classList.add("disabled");
  contenedorCarritoProductos.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  contenedorCarritoComprado.classList.remove("disabled");
};