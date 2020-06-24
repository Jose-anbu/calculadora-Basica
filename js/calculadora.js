let operador = "";
let valor = "";
let primerValor = 0;
let segundoValor = 0;
let resultado;
let digitos = 0;
let limiteDigitos = 10;

// TECLADO NUMERICO
function uno() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "1";
        let uno = document.getElementById("entrada");
        uno.innerText = valor;
    }
}

function dos() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "2";
        let dos = document.getElementById("entrada");
        dos.innerText = valor;
    }
}

function tres() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "3";
        let tres = document.getElementById("entrada");
        tres.innerText = valor;
    }
}

function cuatro() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "4";
        let cuatro = document.getElementById("entrada");
        cuatro.innerText = valor;
    }
}

function cinco() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "5";
        let cinco = document.getElementById("entrada");
        cinco.innerText = valor;
    }
}

function seis() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "6";
        let seis = document.getElementById("entrada");
        seis.innerText = valor;
    }
}

function siete() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "7";
        let siete = document.getElementById("entrada");
        siete.innerText = valor;
    }
}

function ocho() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "8";
        let ocho = document.getElementById("entrada");
        ocho.innerText = valor;
    }
}

function nueve() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "9";
        let nueve = document.getElementById("entrada");
        nueve.innerText = valor;
    }
}

function cero() {

    contarDigitos()

    if (digitos < limiteDigitos) {
        valor = valor + "0";
        let cero = document.getElementById("entrada");
        cero.innerText = valor;
    }
}

// CONTAR DIGITOS
function contarDigitos() {
    digitos++;
}

// OPERADORES
function suma() {
    operador = "+";
    document.getElementById("entrada").innerText = "0";
    digitos = 0;

    if (operador == "+") {
        valorPrimero();
        valor = "";
    }
}

function resta() {
    operador = "-";
    document.getElementById("entrada").innerText = "0";
    digitos = 0;

    if (operador == "-") {
        valorPrimero();
        valor = "";
    }
}

function multiplicacion() {
    operador = "x";
    document.getElementById("entrada").innerText = "0";
    digitos = 0;

    if (operador == "x") {
        valorPrimero();
        valor = "";
    }
}

function division() {
    operador = "/";
    document.getElementById("entrada").innerText = "0";
    digitos = 0;

    if (operador == "/") {
        valorPrimero();
        valor = "";
    }
}

// PRIMER VALOR FLOAT
function valorPrimero(){
    primerValor = parseFloat(valor);
}

// SEGUNDO VALOR FLOAT
function valorSegundo(){
    segundoValor = parseFloat(valor);
}

// RESULTADO
function igual() {
    valorSegundo();

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
    digitos = 0;
}

function clearAll() {
    reset();
    document.getElementById("entrada").innerText = "0";
}
