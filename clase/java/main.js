let Euro = 320
let Dolar=310
let resultado= 0

function calculadora() {

    let  operacion = prompt ("Elige una moneda a convertir \n1-Dolar \n2- Euro\n3- Presione X para finalizar   ")
    
while (operacion !="X") {

         Dolar = alert("El valor del Dolar es de 310");
    Dolar = parseInt(Dolar);
        resultado = prompt("Ingrese el valor que desea convertir");
    resultado = parseInt(resultado);

    if (operacion == "multiplicar") {
      return "La multiplicacion es: " + multiplicar(Dolar, resultado)};
      alert

        Euro = alert("El valor del Euro es de 320");
    Euro= parseInt(Euro);
    resultado = prompt("Ingrese el valor que desea convertir");
    resultado = parseInt(resultado);

  
     if (operacion == "multiplicar") {
      return "La multiplicacion es: " + multiplicar(Euro, resultado);}
        break;
 
    } 
  }

calculadora();

function multiplicar (a, b) {
    return a * b;
  }