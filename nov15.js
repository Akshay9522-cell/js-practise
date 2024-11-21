
const name="Akshay"
const age=24
const city="Bhopal"
const country="India"
const course="Full stack java developer"
const hobby="chess"

console.log(name + ", " +age+", "+city+", "+country+", "+course)


const name1="akshay"
const lname="namdev"
window.alert(name +" "+ lname)


const para=document.getElementById('para')
para.innerHTML=name+" "+ lname+" "+hobby

const userN=document.getElementById('user')
const user2=prompt("enter name")
userN.innerHTML=user2
const user1=prompt("enter age")
userN.innerHTML=user1


const person={
    name:"akshay",
    age:24,
    role:"senior web developer"
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.role)  


// Aarray

const num=[2,3,4,5,4,3]

for(const number of num){
    console.log(number)
}

add = (a,b) => a + b
add(3,4)

function user(name,age){
    return name,age
}
console.log(user('akshay','24'))
// const head=document.getElementById("head")
// const para=document.getElementById("para")
// const button=document.getElementById("btn")


//

// head.innerHTML="akshay namdev";
// let userName=prompt("enter your name")
// let userAge=prompt("enter your age")

// head.innerHTML=userName + " " + userAge


// let txtcolor=prompt("enter your color")
// let bgcolor=prompt("enter your bgcolor")
// head.style.color=txtcolor ;
// head.style.backgroundColor=bgcolor


// const dog=document.getElementById("dog")
// function myfunction(){
//     dog.src="german.webp"
// }