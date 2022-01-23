//Código del Cuadrado
console.group("Cuadrados");
    function perimetroCuadrado(lado){
        return lado * 4;
    } 

    function areaCuadrado (lado) {  
        return lado * lado;
    } 
console.groupEnd();

//Código del Triángulo
console.group("Triángulos");
    function perimetroTriangulo (lado1, lado2, base) { 
        return lado1 + lado2 + base;
     } 

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    } 
console.groupEnd();

//Código del Circulo
console.group("Circulos");
    function diametroCirculo(radio) { 
        return radio * 2;
     }

    const PI = Math.PI; 

    function perimetroCirculo(diametro) {
        return diametro * PI;
    } 

    function areaCirculo(radio) { 
        return (radio * radio) / 2;
     }  
console.groupEnd();



//Aquí interactuamos con el HTML

//CUADRADO
function calcularPerimetroCuadrado() { 
    const input = document.getElementById("InputCuadrado"); //obtenemos todo el input
    const value = input.value; // aqui guardamos solo el valor que necesitamos

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
 }

 function calcularAreaCuadrado() { 
    const input = document.getElementById("InputCuadrado"); //obtenemos todo el input
    const value = input.value; // aqui guardamos solo el valor que necesitamos

    const area = areaCuadrado(value);
    alert(area);
  }

  
//TRIANGULO

function calcularPerimetroTriangulo() { 
    const input1 = document.getElementById("InputTrianguloLado1"); 
    const value1 = input1.value;

    const input2 = document.getElementById("InputTrianguloLado2"); 
    const value2 = input2.value;

    const input3 = document.getElementById("InputTrianguloBase"); 
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
 }

 function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTrianguloBase"); 
    const value3 = input3.value;

    const input4 = document.getElementById("InputTrianguloAltura"); 
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
  }


