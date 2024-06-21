function tomarValor(x) {
    document.getElementById('Resultado').innerHTML += x;
}

function borrarEntrada() {
    document.getElementById('Resultado').innerHTML = "";
}

function calcularResultado() {
    var resultado = eval(document.getElementById('Resultado').innerHTML);
    document.getElementById('Resultado').innerHTML = resultado;
}

var cero = document.getElementById('cero');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

var sumar = document.getElementById('sumar');
var restar = document.getElementById('restar');
var dividir = document.getElementById('dividir');
var multiplicar = document.getElementById('multiplicar');
var igual = document.getElementById('igual');
var borrar = document.getElementById('Borrar');

uno.addEventListener("click", function(){
    tomarValor(1);
})
dos.addEventListener("click", function(){
    tomarValor(2);
})
tres.addEventListener("click", function(){
    tomarValor(3);
})
cuatro.addEventListener("click", function(){
    tomarValor(4);
})
cinco.addEventListener("click", function(){
    tomarValor(5);
})
seis.addEventListener("click", function(){
    tomarValor(6);
})
siete.addEventListener("click", function(){
    tomarValor(7);
})
ocho.addEventListener("click", function(){
    tomarValor(8);
})
nueve.addEventListener("click", function(){
    tomarValor(9);
})
cero.addEventListener("click", function(){
    tomarValor(0);
})
coma.addEventListener("click", function(){
    tomarValor(".");
})
sumar.addEventListener("click", function(){
    tomarValor("+");
})
restar.addEventListener("click", function(){
    tomarValor("-");
})
multiplicar.addEventListener("click", function(){
    tomarValor("*");
})
dividir.addEventListener("click", function(){
    tomarValor("/");
})
igual.addEventListener("click", function(){
    calcularResultado();
})
borrar.addEventListener("click", function(){
    borrarEntrada();
})


// Obtener el elemento de entrada y configurar el listener de eventos
var inputField = document.getElementById('Result');

inputField.addEventListener('keydown', function(event) {
    // Obtener la posición actual del cursor dentro del texto
    var cursorPosition = inputField.selectionStart;

    // Manejar la tecla izquierda (ArrowLeft)
    if (event.key === 'ArrowLeft') {
        // Mover el cursor una posición hacia la izquierda, si es posible
        if (cursorPosition > 0) {
            inputField.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        }
    }

    // Manejar la tecla derecha (ArrowRight)
    else if (event.key === 'ArrowRight') {
        // Mover el cursor una posición hacia la derecha, si es posible
        if (cursorPosition < inputField.value.length) {
            inputField.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
    }
});

