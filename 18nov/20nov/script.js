

// let operator1=document.getElementById("operator")
// function addition(){
//   let num1=parseInt(document.getElementById('input1').value)
//    let num2=parseInt(document.getElementById('input2').value)  
   
//    var result=num1+num2
//    operator1.innerHTML=result;
// }
// console.log(addition())

// function subtraction(){
//      let num1=parseInt(document.getElementById('input1').value)
//    let num2=parseInt(document.getElementById('input2').value)  
   
//    var result=num1-num2
//    operator1.innerHTML=result;
// }

// function multiplication(){
//      let num1=parseInt(document.getElementById('input1').value)
//    let num2=parseInt(document.getElementById('input2').value)  
   
//    var result=num1*num2
//    operator1.innerHTML=result;
// }

let head=document.getElementById('head')
function displayName(){
    let name1=document.getElementById('text1').value
     head.innerHTML=name1
     window.alert(name1)
     console.log(name1)
    
}

    let hading=document.getElementById('headone')
    let button=document.getElementById('mine')

    button.addEventListener('click',()=>{
        hading.innerHTML="akshay namdev"
    })

    let hading1=document.getElementById('headd')
   let button1=document.getElementById('mybtn')

  

   button1.addEventListener('click',()=>{
     const n4=document.getElementById('in1').value
   const n5=document.getElementById('in2').value
   const n6=document.getElementById('in3').value

    hading1.innerHTML= n4 + " "+ n5+" "+n6
   })
