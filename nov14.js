
// const para=document.getElementById('mode')

// para.innerHTML="hello akshay"
// para.style.color='red'
// para.style.backgroundColor="black"


let btn=document.getElementById('button')

// btn.innerHTML=" click me to see today time and date"
// btn.style.backgroundColor='yellow'
btn.style.fontSize='50px'
// btn.style.border='1px solid black'
// btn.style.borderRadius='30px'
// btn.style.boxShadow='10px 10px 20px orange'
// btn.style.fontFamily='mullish'

function myDate(){
    btn.innerHTML=Date()
}

const Staff=(name,dob,id)=>{
        const teacher ={
             name:name,
             dob:dob,
             id:id,
        }

        const data= `mr ${name} sir,his date of birth ${dob} july and id is ${id}`
        return data;
}

console.log(Staff("akshay",25,5656));



