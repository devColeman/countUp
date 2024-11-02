 document.querySelector("#countUp").addEventListener('click', countUp)
 document.querySelector("#countDown").addEventListener('click', countDown)
 document.querySelector("#reset").addEventListener('click', reset)
 document.querySelector("#submit").addEventListener('click', add)
 document.querySelector("#submit2").addEventListener('click', remove)
 let input = document.querySelector('#input1')
 let input1 = document.querySelector('#input2')
 let h2 = document.querySelector('h2')
 let value =  localStorage.getItem('count') 
 
 value == null ? localStorage.setItem('count', 0) : h2.innerHTML = value

 function add(){
    if(Number.isInteger(Number(input.value))){
        console.log(input.value)
        console.log("a number")
        let f =  localStorage.getItem('count')
        localStorage.setItem('count', Number(f) + Number(input.value))
        h2.innerHTML = Number(f) + Number(input.value)
    }else{
        alert('That is not a number please try again')
    }
 }

 function remove(){
    if(Number.isInteger(Number(input1.value))){
        console.log(input1.value)
        console.log("a number")
        let f =  localStorage.getItem('count')
        localStorage.setItem('count', Number(f) - Number(input1.value))
        h2.innerHTML = Number(f) - Number(input1.value)
    }else{
        alert('That is not a number please try again')
    }
 }

 
 

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