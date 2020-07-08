window.addEventListener("load",function(){});

var cantProd;
var carrito = document.querySelector(".log-cart");
var sumaProd = document.querySelector(".sumaProd");

console.log(carrito);
console.log(sumaProd);


fetch("http://localhost:3000/api/carritos")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(info){
        console.log(info.products.length)
        cantProd = info.products.length;
        console.log("Eu en el carrito tenes " + cantProd + " productos");
        if (cantProd >= 0 && sumaProd == null){
            carrito.classList.add("sumaProd");
            carrito.innerHTML += "<p>" + cantProd + "</p>";
            console.log("agregue la clase");
        } else {
            carrito.innerHTML += "<p>" + cantProd + "</p>";
            console.log("seguimos igual");
        }
    });

