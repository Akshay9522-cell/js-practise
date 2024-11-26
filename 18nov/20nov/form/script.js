
  



  const mybtn=document.querySelector('#mybtn')

mybtn.addEventListener('click',()=>{

      const myname=document.getElementById('name').value
  const myemail=document.getElementById('email').value
  const mypsw=document.getElementById('psw').value
  const myconfirm=document.getElementById('confirmPsw').value

  if(  typeof myname ==='string' || myemail==='string' || mypsw==='string')


    if( mypsw===myconfirm){
        return alert( " invalid ")
    }



   
  
    else{
        alert("submitted")
    }


})

