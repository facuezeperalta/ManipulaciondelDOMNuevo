const contentArea = document.getElementById("contentArea");

//innerHTML.
contentArea.innerHTML = "<p>Este es un nuevo parrafo.</p>" 

//insert adjacentHTML
//primera posición de donde insertar
contentArea.insertAdjacentHTML("beforeend","<p>Este es otro parrafo nuevo. </p>");

//beforebegin 
//afterbegin
//afterend

//usar esta manera de insertar, tiene un impacto fuerte en la performance. Pq renderizamos todos el contenido por mas que el contenido no tenga un cambio.
const listArea = document.getElementById("listArea");
listArea.innerHTML+= "<li>Item 5</li>";

//insertAdjacentHTML es un mejor método
listArea.insertAdjacentHTML("beforeend","<li>Item 6</li>");

//createElement
const newPElement = document.createElement("p"); //creo la etiqueta.

newPElement.textContent = "creado con createElement"; //le asigno el contenido a la etiqueta.

contentArea.append(newPElement);


//creando con prepend al inicio del elemento 
// after elemento antes del otro elemento en base al que queremos
//before antes del elemento elegido.
/* const itemNuevo = document.createElement("li");
itemNuevo.textContent = "Nuevo item!";

listArea.prepend(itemNuevo);

const itemNuevo2 = document.createElement("li");
itemNuevo2.textContent = "Nuevo Item! Pero con before.";
listArea.before(itemNuevo2); */


/* const itemAfter = document.createElement("li");
itemAfter.textContent = "Item after";
listArea.after(itemAfter); */

//remove child
/* 
const firsItem = document.querySelector("li"); //nos devuelve el primer li que encuentra.

const lista = document.querySelector("ul");

lista.removeChild(lista.firstElementChild); */


//cloneNode
/* const areaSelection = document.querySelector("#contentArea");  

const originalP = areaSelection.querySelector("p");

const cloneP = originalP.cloneNode(true); */

//replaceWith

const listaReplace = document.querySelector("#listArea");


