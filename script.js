let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")// pass in argument 
let count = 0 




 function increment(){
    count   += 1
   countEl.innerText = count 
 }



function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0 
    countEl.innerText = count 
}
 





