
var seconds = 0;
var control = 0;

function myFunction() {
    window.setInterval("actualizarTime()", 1000);
}

function actualizarTime() {
    if (control == 0) {
        if (seconds > 20) {
            window.alert('La página lleva más de 20 segundos en ejecución');
            control = 1;
        }
    }
    ++seconds;
    document.getElementById("demo").innerHTML = seconds;
}
