//Declaro las variables.
const contenedor = document.querySelector(".container");
const boton = document.querySelector("#btn");

//agregamos a nuestro boton el event listener 
contenedor.addEventListener("mouseover",()=>{
    contenedor.style.backgroundColor = "blue";
})

contenedor.addEventListener("mouseout",()=>{
    contenedor.style.backgroundColor = "red";
})


/* boton.addEventListener("click",()=>{
    alert("Button clicked!");
});
 */

/* const buttonClickCallback = ()=>{
    alert("Button clicked!");
}; */
/* 
boton.addEventListener("click",buttonClickCallback); */

/* 
remover el evento.
setTimeout(()=>{
    boton.removeEventListener("click",buttonClickCallback)
},2000);
 */


const buttonClicked = (event) =>{
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
};

boton.addEventListener("click",buttonClicked);



