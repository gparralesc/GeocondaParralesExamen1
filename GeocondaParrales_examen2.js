

/*Muestra los n�meros del 660 al 360, contando de 20 en 20 hacia atr�s utilizando un bucle
for. Guardar archivo con el nombre TuNombre_Examen2*/


function numeros660-360() {
    let i;
    for (i = 660; i >= 360; i--) {
        if (i % 20 == 0)
            console.log(i);
    }
}
