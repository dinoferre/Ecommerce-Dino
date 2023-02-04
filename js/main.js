// PRODUCTOS lo agrego dentro de un array de objetos
const productos = [
  // Abrigos
  {
      id: "abrigo-01",
      titulo: "Abrigo 01",
      imagen: "./img/abrigos/01.jpg",
      categoria: {
          nombre: "Abrigos",
          id: "abrigos"
      },
      precio: 1000
  },
  {
      id: "abrigo-02",
      titulo: "Abrigo 02",
      imagen: "./img/abrigos/02.jpg",
      categoria: {
          nombre: "Abrigos",
          id: "abrigos"
      },
      precio: 1200
  },
  {
      id: "abrigo-03",
      titulo: "Abrigo 03",
      imagen: "./img/abrigos/03.jpg",
      categoria: {
          nombre: "Abrigos",
          id: "abrigos"
      },
      precio: 2000
  },
  {
      id: "abrigo-04",
      titulo: "Abrigo 04",
      imagen: "./img/abrigos/04.jpg",
      categoria: {
          nombre: "Abrigos",
          id: "abrigos"
      },
      precio: 1000
  },
  {
      id: "abrigo-05",
      titulo: "Abrigo 05",
      imagen: "./img/abrigos/05.jpg",
      categoria: {
          nombre: "Abrigos",
          id: "abrigos"
      },
      precio: 1500
  },
  // Camisetas
  {
      id: "camiseta-01",
      titulo: "Camiseta 01",
      imagen: "./img/camisetas/01.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 1400
  },
  {
      id: "camiseta-02",
      titulo: "Camiseta 02",
      imagen: "./img/camisetas/02.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 1600
  },
  {
      id: "camiseta-03",
      titulo: "Camiseta 03",
      imagen: "./img/camisetas/03.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 2000
  },
  {
      id: "camiseta-04",
      titulo: "Camiseta 04",
      imagen: "./img/camisetas/04.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 1000
  },
  {
      id: "camiseta-05",
      titulo: "Camiseta 05",
      imagen: "./img/camisetas/05.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 1000
  },
  {
      id: "camiseta-06",
      titulo: "Camiseta 06",
      imagen: "./img/camisetas/06.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 2000
  },
  {
      id: "camiseta-07",
      titulo: "Camiseta 07",
      imagen: "./img/camisetas/07.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 1800
  },
  {
      id: "camiseta-08",
      titulo: "Camiseta 08",
      imagen: "./img/camisetas/08.jpg",
      categoria: {
          nombre: "Camisetas",
          id: "camisetas"
      },
      precio: 1000
  },
  // Pantalones
  {
      id: "pantalon-01",
      titulo: "Pantalón 01",
      imagen: "./img/pantalones/01.jpg",
      categoria: {
          nombre: "Pantalones",
          id: "pantalones"
      },
      precio: 1000
  },
  {
      id: "pantalon-02",
      titulo: "Pantalón 02",
      imagen: "./img/pantalones/02.jpg",
      categoria: {
          nombre: "Pantalones",
          id: "pantalones"
      },
      precio: 1200
  },
  {
      id: "pantalon-03",
      titulo: "Pantalón 03",
      imagen: "./img/pantalones/03.jpg",
      categoria: {
          nombre: "Pantalones",
          id: "pantalones"
      },
      precio: 1000
  },
  {
      id: "pantalon-04",
      titulo: "Pantalón 04",
      imagen: "./img/pantalones/04.jpg",
      categoria: {
          nombre: "Pantalones",
          id: "pantalones"
      },
      precio: 1050
  },
  {
      id: "pantalon-05",
      titulo: "Pantalón 05",
      imagen: "./img/pantalones/05.jpg",
      categoria: {
          nombre: "Pantalones",
          id: "pantalones"
      },
      precio: 1000
  }
];

//Coloco las cosas para llamar del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");

//llamo a los botones
const botonesCategorias = document.querySelectorAll(".btn-categoria");

//modifico el titulo
const tituloPrincipal = document.querySelector("#titulo-principal");

//accedo a los botones
let botonAgregar = document.querySelectorAll(".producto-agregar");

//accedo al numero del carrito
const numero = document.querySelector("#numero");

//Funcion para cargar los productos en el dom
function cargarProductos(productosElegidos){
    //Elimino todo de entrada para que este vacio
    contenedorProductos.innerHTML = " ";
    //for each del array para que cargue los produtos
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo} ">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonAgregar();
}

cargarProductos(productos);

/* Este div es el que genero con la funcion cargarProductos
div class="producto">
    <!-- Img del producto -->
    <img class="producto-imagen" src="./img/abrigos/01.jpg" alt="">
    <!-- Un div para contener el detalle, el precio y el boton para agregar -->
    <div class="producto-detalles">
        <h3 class="producto-titulo">Abrigo 01</h3>
        <p class="producto-precio">$1000</p>
        <button class="producto-agregar">Agregar</button>
    </div>
</div> 
*/

//botonescategoria es un array que trae todos los elementos, hago un addeventlistener
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos);
        }
    })
});

//agregar productos al carrito
function actualizarBotonAgregar() {
    botonAgregar = document.querySelectorAll(".producto-agregar");

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

//array de productos carrito vacio
let productosCarrito;

let productosCarritoLocalStorage = localStorage.getItem("productos-carrito");

if(productosCarritoLocalStorage){
    productosCarrito = JSON.parse(productosCarritoLocalStorage);
    actualizarNumero();
} else {
    productosCarrito = [];
}



//funcion agregar al carrito
function agregarAlCarrito(e) {

    //tomo el id, lo busco con find y lo agrego al array productoscarrito, aumento la cantidad de productos iguales (some=se fija si hay algo que coincida)
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosCarrito.some(producto => producto.id === idBoton)) {
        const index = productosCarrito.findIndex(producto => producto.id === idBoton);
        productosCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }

    actualizarNumero();

    //agrego el localstorage
    localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
};

//funcion para actualizar numero de carrito, con(reduce=tiene dos parametros, el acumulador y los productos.) le indico que arranque en 0
function actualizarNumero() {
    let nuevoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
};
