 
//  let para='Akshay'
//   let id=9522
//  let ans=`this is ${para} and his id is ${id}`

//  const head=document.getElementById('heading')

// //  head.innerHTML=ans
//  const mybtn=document.getElementById('btn')

//  let name="khushi"
//  let city='Bhopal'
//  let ans=` hi my name is ${name} and i live in ${city}`
// mybtn.addEventListener('click',()=>{
//     head.innerHTML=ans
// })

function reverse(num){

    return num.toString().split('').reverse().join('')
}

console.log(reverse(2259))


function palidrome(str){
    let original=str.toLowerCase()

    let reverse=str.split('').reverse().join('')
    return original==reverse
}

console.log(palidrome('akki'))
console.log(palidrome('ikki'))



//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function uppercase(str){

    let array1=str.split(' ')

    let newarray1=[]

    for(let x=0;x<str.length;x++){
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1))
    }
    return newarray1.join('')
}

console.log(uppercase('the akshay namdev hubby of khushi namdev'))

