
let carrito = [];


function agregarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

 
    if (!isNaN(precioProducto)) {
        let producto = {
            nombre: nombreProducto,
            precio: precioProducto
        };
        carrito.push(producto);
        alert("El producto se ha agregado al carrito.");
    } else {
        alert("El precio ingresado no es válido.");
    }
}

function mostrarCarrito() {
    let mensaje = "Contenido del carrito:\n";
    if (carrito.length === 0) {
        mensaje += "El carrito está vacío.";
    } else {
        carrito.forEach(function(producto, numero) {
            mensaje += (numero + 1) + ". " + producto.nombre + " - $" + producto.precio.toFixed(2) + "\n";
        });
        mensaje += "Total de productos: " + carrito.length;
    }
    alert(mensaje);
}


function main() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Salir");
        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                alert("Gracias por su compra.");
                break;
            default:
                alert("Opción no valida");
        }
    } while (opcion !== "3");
}

main();
