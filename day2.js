
const fruits=["banan","apple","orange","chikuu"]
const array=document.getElementById("array")



//array.innerHTML= fruits.toString(); // convert array into string

// full array can be accessed by refering the array name
//array.innerHTML=fruits

// sort() function sort the array
//array.innerHTML=fruits.sort()



// for loop
// for(const fruit of fruits){
//    console.log(fruit)

// }




//foreach function

// if we find the type of arry by typeof function so we get result as a object;

// but if we use Array.isAarray function so  we see output as true;

fruits.forEach(fruit=>{
   console.log(typeof(fruit))
   console.log(Array.isArray(fruits))
})


//The easiest way to add a new element to an array is using the push() method: