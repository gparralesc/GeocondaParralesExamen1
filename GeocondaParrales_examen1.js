
/* Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta
que las horas ordinarias (40 primeras horas de trabajo) se pagan a 265.00 USD la hora. A
partir de la hora 41, se pagan a 350.00 USD la hora. 

Tomando en cuenta que un trabajador
acumulo en la semana, 53 horas, el programa debe mostrar el monto a pagar por las horas
ordinarias y el monto a pagar por las horas extra. Ejemplo:
*/

let sueldoSemanal;

console.log ("Ingrese el número de horas trabajadas durante la semana: ");
    let HorasTrabajadas = Integer.parseInt(System.console().readLine());

if (HorasTrabajadas <= 40) {
    sueldoSemanal = 256 * HorasTrabajadas;

} else {
    sueldoSemanal = (40 * 256) + ((HorasTrabajadas - 40) * 350);
}
console.log("El sueldo semanal que le corresponde al trabajador es " + sueldoSemanal + " USD");

