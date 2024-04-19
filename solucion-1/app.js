
function myFunction() {
    setTimeout(showAlert, 20000);
}

function showAlert() {
    window.alert('La página lleva más de 20 segundos en ejecución');
}

var bodySection = document.getElementsByName('body');
bodySection.addEventListener('onload', myFunction());
