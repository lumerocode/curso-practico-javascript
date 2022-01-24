//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePrecioDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento) { 
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
 }

 function onClickButtonPriceDiscount() {
     const Price = document.getElementById("InputPrice");
     const priceValue = Price.value;

     const Discount = document.getElementById("InputDiscount");
     const discountValue = Discount.value;

     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
     
     const resultadoPrecio = document. getElementById("Result");
     resultadoPrecio.innerText = "El precio con descuento es de: $" + precioConDescuento;
 }