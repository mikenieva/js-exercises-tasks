/*

El programador Bruce tarda dos días laborables en completar una tarea que se le ha asignado. Recibe 4 tareas por semana.

Escribe una expresión para calcular el número de tareas que Bruce no tendrá tiempo de realizar durante un periodo de cuatro semanas, y registra el resultado en la consola. 

Comienza con el número de días que trabaja a la semana, dividido por el número de tareas que realiza semanalmente.

Trabaja cinco días a la semana. Al igual que antes, muestra un número. Para ello, sólo escribe números y operadores matemáticos dentro de console.log().

*/

// CALCULAR EL NÚMERO DE TAREAS QUE BRUCE

// A. DETERMINAMOS VARIABLES
// 1. DETERMINAR CUÁNTOS DÍAS TRABAJA A LA SEMANA
const totalWorkdays = 5

// 2. DETERMINAR EL NÚMERO DE TAREAS POR SEMANA
const homeworkPerWeek = 4

// B. DETERMINAMOS TAREAS QUE BRUCE PUEDE TERMINAR
// 3. DETERMINAR CUÁNTAS TAREAS PUEDE COMPLETAR BRUCE EN UNA SEMANA
const tasksCompletedPerWeek = totalWorkdays / 2
console.log("tasksCompletedPerWeek:", tasksCompletedPerWeek)

// 4. DETERMINAR CUÁNTAS TAREAS PUEDE COMPLETAR BRUCE EN CUATRO SEMANAS
const tasksCompletedInFourWeeks = tasksCompletedPerWeek * 4
console.log("tasksCompletedInFourWeeks: ",tasksCompletedInFourWeeks)

// C. DETERMINAMOS CUÁNTAS TAREAS SE RECIBEN
// 5. DETERMINAR CUÁNTAS TAREAS SE RECIBEN EN CUATRO SEMANAS
const tasksReceivedInFourWeeks = homeworkPerWeek * 4
console.log("tasksReceivedInFourWeeks: ", tasksReceivedInFourWeeks)

// 6. CALCULAR EL NÚMERO DE TAREAS QUE BRUCE NO PUEDE COMPLETAR
const notCompletedTasks = tasksReceivedInFourWeeks - tasksCompletedInFourWeeks
console.log("notCompletedTasks:", notCompletedTasks)


// 7. EJECUTAR EN CONSOLA EL RESULTADO
console.log(notCompletedTasks)

