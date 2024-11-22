// function expression

function display(){
    alert("hello")
}


//function expression

const display1=function(){
    alert("hello")
}

//arrow function

const display2=()=>{

}
let head=document.getElementById('heading')
let bttn=document.getElementById('btn')

bttn.addEventListener("mouseenter",()=>{
    head.innerHTML="hello manu"

})

bttn.addEventListener('click',()=>{
    head.style.color='orange'
})