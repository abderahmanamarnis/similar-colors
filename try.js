let windo = document.querySelectorAll(".window");
 let second = document.querySelectorAll(".mask")
let data = []
let two  = 0;
windo.forEach((element) => {       
element.addEventListener("click", (e) => {  
   if(e.target.classList.contains("mask"))   {    
      e.target.parentElement.classList.toggle("active");
      e.target.parentElement.classList.toggle("open");
      data.push(e.target.parentElement)
      two++

   }
      
   if(e.target.classList.contains("window"))   {    
         e.target.classList.toggle("active");}
 if (data.length==3){
   if(data[0].style.background !==data[1].style.background){
      data[0].classList.toggle("open")
      data[1].classList.toggle("open")
   }
   two = 0
   data = []
   data=[e.target.parentElement]
   
   // e.target.parentElement.classList.toggle("open");   

 }
});
 });
 
// mask.forEach((second)=>{
//    second.addEventListener("click",function second(){
//       windo.style.width = "90vw"
//       windo.style.height = "90vh"
//       windo.style.position = "fixed"
//       windo.style.top = "1vh"
//       windo.style.left = "100%"
//    } )
// }); console.log(second);