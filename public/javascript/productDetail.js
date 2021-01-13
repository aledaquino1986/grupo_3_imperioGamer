window.addEventListener("load", function () {});

var cantProd;
var carrito = document.querySelector(".log-cart");
var sumaProd = document.querySelector(".sumaProd");
var ingresar = document.querySelector("#ingresar");
var agregar = document.querySelector("#carrito");
var comprar = document.querySelector("#comprar");

if (ingresar != null) {
  carrito.addEventListener("click", function (event) {
    alert("Inicia sesión para ingresar a tu carrito");
  });
}
if (ingresar != null) {
  agregar.addEventListener("click", function (event) {
    alert("Inicia sesión para agregar este producto al carrito");
  });
}
if (ingresar != null) {
  comprar.addEventListener("click", function (event) {
    alert("Inicia sesión para comprar este producto");
  });
}

fetch("http://localhost:3000/api/carritos")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (info) {
    cantProd = info.products.length;

    if (cantProd >= 0 && sumaProd == null) {
      carrito.classList.add("sumaProd");
      carrito.innerHTML += "<p>" + cantProd + "</p>";
    } else {
      carrito.innerHTML += "<p>" + cantProd + "</p>";
    }
  });
