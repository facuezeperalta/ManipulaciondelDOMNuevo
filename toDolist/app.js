//función que agrega el evento al formulario 
/* const formulario = document.getElementById("task-form"); */

const formulario = document.querySelector("#task-form");

const taskList = document.getElementById("task-list");

formulario.addEventListener("submit",(event)=>{
    event.preventDefault(); //prevenimos su comportamiento por defecto del formulario.

    const taskInput = document.getElementById("task-input"); //tenemos el input.

    const taskValue = taskInput.value; //obtenemos el valor 
    
    console.log(taskValue);

    //compruebo si el task esta, de estarlo llamo a la función createTaskElement para crear el elemento junto con sus botones
    if(taskValue){
        taskList.append(createTaskElement(taskValue));
        taskInput.value = "";
    }
});

//se generarán dos funciones una que genera el evento y la otra que genera los botones

function createTaskElement (task){
    //creo el li
    const li = document.createElement("li");
    //le paso el texto desntro de task.
    li.textContent = task;
    // inserto el elemento con append llamando a la función de crear boton 2 veces, una para cada botón.
    li.append(createButton("❌","delete-btn"),createButton("✏️","edit-btn"));
    return li;
}


function createButton(text,className){
    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className = className;
    return btn;    
}