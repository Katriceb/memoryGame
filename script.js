//const start = document.getElementById("button1") ;
const memoryCard =document.querySelectorAll('.memory-card');
const startbutton =document.getElementById('start-button');
 



console.log (memoryCard);
for (let i = 0; i< memoryCard.length; i++){


memoryCard[i].addEventListener("click",  function(evt){
    evt.preventDefault();
    console.log (evt.target);
   console.log(evt.target.parentNode.children);
   let childNodes =evt.target.parentNode.children;
   for (let i =0; i < childNodes.length; i++){
    childNodes[i].classList.toggle("hide");
    
   }
});
}