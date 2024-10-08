//función que agrega el evento al formulario 
/* const formulario = document.getElementById("task-form"); */

const formulario = document.querySelector("#task-form");

const taskList = document.getElementById("task-list");

//ejecuto la función al comienzo para que cargue las tareas guardads apenas inicia la página.
loadTask();

formulario.addEventListener("submit",(event)=>{
    event.preventDefault(); //prevenimos su comportamiento por defecto del formulario.

    const taskInput = document.getElementById("task-input"); //tenemos el input.

    const taskValue = taskInput.value; //obtenemos el valor 
    
    console.log(taskValue);

    //compruebo si el task esta, de estarlo llamo a la función createTaskElement para crear el elemento junto con sus botones
    if(taskValue){
        taskList.append(createTaskElement(taskValue));
        storeTaskInLocalStorage(taskValue);
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

//usamos la delegacion de evento. para obtener el tipo de botón que estamos tocando.
taskList.addEventListener("click", (event) =>{
    console.log(event.target );
    if(event.target.classList.contains ("delete-btn")){
        deleteTask(event.target.parentElement);
    }else if(event.target.classList.contains ("edit-btn")){
        editTask(event.target.parentElement);
    }
})



function deleteTask (taskItem){
    if(confirm ("Estas seguro que quiere borrar esta tarea?")){
        taskItem.remove();
        updateLocalStorage();
    }
}


function editTask(taskItem){
    const newTask = prompt("Edita tu tarea: ",taskItem.firstChild.textContent);
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    }
}


//creamos una función para guardar cosas el localStorage

function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); //Json.parse convierte una cadena de texto a un obejto en JS.

    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}


function loadTask(){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach( (task) => {
        taskList.appendChild(createTaskElement(task));
    });
}


function updateLocalStorage(){
    const tasks = Array.from(taskList.querySelectorAll("li")).map(
        (li) => li.firstChild.textContent); //aca busco y traigo los li de la lista de tareas, y con una función map obtengo el contenido de texto que tienen.
    //ahora actualizo el localStorage.
    localStorage.setItem("tasks",JSON.stringify(tasks));
    console.log()
}


const themeToogleButton = document.getElementById("toggle-theme-btn");
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

themeToogleButton.addEventListener("click",() =>{
    document.body.classList.toggle("dark-theme");

    const theme = document.body.classList.contains("dark-theme")? "dark" : "ligth";
    localStorage.setItem("theme",theme);
});

if(currentTheme === "dark"){
    document.body.classList.add("dark-theme");
}