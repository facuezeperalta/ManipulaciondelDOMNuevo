//función que agrega el evento al formulario 
/* const formulario = document.getElementById("task-form"); */

const formulario2 = document.querySelector("#task-form");

const taskList = document.getElementById("task-list");

formulario2.addEventListener("submit",(event)=>{
    event.preventDefault(); //prevenimos su comportamiento por defecto del formulario.
    const taskInput = document.getElementById("task-input"); //tenemos el input.
    const taskValue = taskInput.value; //obtenemos el valor 
    console.log(taskValue);


});






//se generarán dos funciones una que genera el evento y la otra que genera los botones
