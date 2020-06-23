let operador = "";
let valor = "";
let primerValor = 0;
let segundoValor = 0;
let resultado;

console.log(primerValor)
// TECLADO NUMERICO
function uno() {
    console.log("Uno");
    valor = valor + "1";
    console.log(valor);
    let uno = document.getElementById("entrada");
    console.log(uno);

    uno.innerText = valor;
}

function dos() {
    console.log("Dos");
    valor = valor + "2";
    console.log(valor);

    let dos = document.getElementById("entrada");
    console.log(dos);

    dos.innerText = valor;
}

function tres() {
    console.log("tres");
    valor = valor + "3";
    console.log(valor);

    let tres = document.getElementById("entrada");
    console.log(tres);

    tres.innerText = valor;
}

function cuatro() {
    console.log("cuatro");
    valor = valor + "4";
    console.log(valor);

    let cuatro = document.getElementById("entrada");
    console.log(cuatro);

    cuatro.innerText = valor;
}

function cinco() {
    console.log("cinco");
    valor = valor + "5";
    console.log(valor);

    let cinco = document.getElementById("entrada");
    console.log(cinco);

    cinco.innerText = valor;
}

function seis() {
    console.log("seis");
    valor = valor + "6";
    console.log(valor);

    let seis = document.getElementById("entrada");
    console.log(seis);

    seis.innerText = valor;
}

function siete() {
    console.log("siete");
    valor = valor + "7";
    console.log(valor);

    let siete = document.getElementById("entrada");
    console.log(siete);

    siete.innerText = valor;
}

function ocho() {
    console.log("ocho");
    valor = valor + "8";
    console.log(valor);

    let ocho = document.getElementById("entrada");
    console.log(ocho);

    ocho.innerText = valor;
}

function nueve() {
    console.log("nueve");
    valor = valor + "9";
    console.log(valor);

    let nueve = document.getElementById("entrada");
    console.log(nueve);

    nueve.innerText = valor;
}

function cero() {
    console.log("cero");
    valor = valor + "0";
    console.log(valor);

    let cero = document.getElementById("entrada");
    console.log(cero);

    cero.innerText = valor;
}

// OPERADORES
function suma() {
    console.log("suma");
    operador = "+";
    console.log(operador);
    document.getElementById("entrada").innerText = "0";
    if (operador == "+") {
        primerValor = parseFloat(valor);
        console.log("primer valor float: " + primerValor);
        valor = "";
        console.log(valor);
    }
}

function resta() {
    console.log("resta");
    operador = "-";
    console.log(operador);
    document.getElementById("entrada").innerText = "0";
    if (operador == "-") {
        primerValor = parseFloat(valor);
        console.log("primer valor float: " + primerValor);
        valor = "";
        console.log(valor);
    }
}

function multiplicacion() {
    console.log("multiplicacion");
    operador = "x";
    console.log(operador);
    document.getElementById("entrada").innerText = "0";
    if (operador == "x") {
        primerValor = parseFloat(valor);
        console.log("primer valor float: " + primerValor);
        valor = "";
        console.log(valor);
    }
}

function division() {
    console.log("division");
    operador = "/";
    console.log(operador);
    document.getElementById("entrada").innerText = "0";
    if (operador == "/") {
        primerValor = parseFloat(valor);
        console.log("primer valor float: " + primerValor);
        valor = "";
        console.log(valor);
    }
}

// RESULTADO
function igual() {
    segundoValor = parseFloat(valor);

    switch (operador) {
        case "+":
            resultado = primerValor + segundoValor;
            break;

        case "-":
            resultado = primerValor - segundoValor;
            break;

        case "x":
            resultado = primerValor * segundoValor;
            break;

        case "/":
            resultado = primerValor / segundoValor;
            break;

        default:
            resultado = "Error!";
    }

    document.getElementById("entrada").innerText = String(resultado);
    reset();
}

// RESETEO DE VARIABLES
function reset() {
    primerValor = 0;
    segundoValor = 0;
    resultado;
    operador = "";
    valor = "";
}

function clearAll() {
    console.log("clear");
    reset();
    document.getElementById("entrada").innerText = "0";
}
