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