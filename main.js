 document.querySelector("#countUp").addEventListener('click', countUp)
 document.querySelector("#countDown").addEventListener('click', countDown)
 document.querySelector("#reset").addEventListener('click', reset)
 let h2 = document.querySelector('h2')
 let value =  localStorage.getItem('count') 
 
 value == null ? localStorage.setItem('count', 0) : h2.innerHTML = value

 
 

function countUp(){
 let f =  localStorage.getItem('count')
 localStorage.setItem('count', Number(f) + 1)
   h2.innerHTML = Number(f) + 1
}

function countDown(){
    let f =  localStorage.getItem('count')
    localStorage.setItem('count', Number(f) - 1)
      h2.innerHTML = Number(f) - 1
   }

   function reset(){
   
    localStorage.setItem('count', 0)
      h2.innerHTML = 0
   }