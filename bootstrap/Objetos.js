var actual = "Contenido Banda Pink Floyd";
//alert("actual);
alert(actual);

var id1 = document.getElementById("item 1").innerHTML = "Guitarra 1             David gilmour";
var id2 = document.getElementById("item 2").innerHTML = "Guitarra 2  Syd Barrett";
var id3 = document.getElementById("item 3").innerHTML = "Bajo Roger Waters";
var id4 = document.getElementById("item 4").innerHTML = "Teclado Richard Wright";
var id5 = document.getElementById("item 5").innerHTML = "Bateria Nick Manson";

/*Cambio de contenido */

function cambiarContenido1(id, contenido) {
    document.getElementById(id).innerHTML = contenido;
}

function cambiarContenido1(id) {
    var contenidoDiv1 = "Pink Floyd - The Wall es una película británica lanzada el 23 de mayo de 1982 dirigida por el director británico Alan Parker y basada en el álbum de Pink Floyd The Wall (1979). El guion fue escrito por el vocalista y bajista de Pink Floyd, Roger Waters. Altamente metafórica y rica en simbolismo y sonido, la película contiene pocos diálogos y es conducida principalmente por las canciones de Pink Floyd";

    
    document.getElementById(id).innerHTML = contenidoDiv1;
    
}

function cambiarContenido2(id) {
    var contenidoDiv2 = "Conoce mas sobre la banda";
    document.getElementById(id).innerHTML = contenidoDiv2;
    
}

var vid = document.getElementById("myVideo");
vid.onvolumechange = function() {
    alert("The volume has been changed!");
};