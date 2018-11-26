let current = 0;
let next = 0;

let elem = Array.from(document.querySelectorAll(".slider-item"));

elem.forEach((x,i)=>{
   i===0? false :x.style.display = "none"
})

let slider = document.getElementById("slider");

let arrow = Array.from(document.querySelectorAll(".arrow"));

arrow.forEach(x => {
  
  x.addEventListener("click", e => {
    
    elem[current].style.display = 'none'
    if (e.target.id === "left") {
      if (current >= elem.length - 1) {
        next = 0;
      } else {
        next = current + 1;
      }
     
      elem[next].style.display='inline-block'
     
    } else {
      if (current === 0) {
        next = elem.length - 1;
      } else {
        next = current - 1;
      }
      elem[next].style.display= 'inline-block'
    }
    current = next;
  });
});


