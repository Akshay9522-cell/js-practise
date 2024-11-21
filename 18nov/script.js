//arrow function
add=(a,b)=>a+b
console.log(add(4,5))


//regular function
function multi(a,b){
    return a*b
}
console.log(multi(5,4))


function Divi(a,b){
    return a/b
}

let divid=Divi(20,4)
console.log(divid)


function intro(name,age){
      let para=document.getElementById("intro")
      para.textContent=` my name is ${name} and my age is ${age}  `

}
intro("akshay",24)