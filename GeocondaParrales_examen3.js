/* Escribir un programa JavaScript orientado a objetos, llamado TuNombre_Examen3, que
realice las siguientes operaciones:

• Crear dos matrices de tamaño con los siguientes datos.
• Rellenar la primera con los datos: 3, 2, 1, 1, 2, 3, 2, 3, 1.
• Rellenar la segunda con los datos: 1, 1, 2, 2, 1, 1, 1, 2, 1.
* Mostrar el contenido de ambas matrices.
• Multiplicar la primera por la segunda y mostrar el resultado.
• Sumar la primera por la segunda y mostrar el resultado.
*/

class Matrices {
    public static void main(String args[]) {
Matriz m1 = new Matriz(2);
Matriz m2 = new Matriz(2);
        int[] v1 = { 3 , 2 , 1 , 1 , 2 , 3 , 2 , 3 , 1 };
        int[] v2 = { 1 , 1 , 2 , 2 , 1 , 1 , 1 , 2 , 1 };
       
        m1.asignarDatos(v1);
        m2.asignarDatos(v2);
        m1.mostrar();
        m2.mostrar();
        m1.producto(m2);
        m1.mostrar();
        m1.suma(m2);
        m1.mostrar();
        m1.traspuesta();
        m1.mostrar();
    }