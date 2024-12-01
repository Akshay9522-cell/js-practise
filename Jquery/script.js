// ASYNC AWAIT

// async function abcd(){
//       let raw=await fetch('https://randomuser.me/api/')
//       let data= await raw.json()
//       console.log(data)
// }
// abcd()



// setTimeout(function(){
   
// },3000)

// let ans=new Promise(function(res,rej){
//      return res('sbse pehle ghr pr aao')
// })

// let p2=ans.then(function(data){
//     console.log(data)
//     return new Promise(function(res,rej){
//         return res("gate kholo or lgao")
//     })
// })

// let p3=p2.then(function(data){
//     console.log(data)
//     return new Promise(function(res,rej){
//         return res("khana bnao")
//     })
// })

// p3.then(function(data){
//     console.log(data)
// })

async function abcd(){
  let raw=  await fetch('https://randomuser.me/api/')
  let data=await raw.json()
  console.log(data)
}
abcd()