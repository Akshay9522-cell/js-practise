
const head=document.getElementById("head")

const user=prompt("enter name")
const color=prompt("enter color")
const bgcolor=prompt("enter bg color")
const align=prompt("enter alignment")

head.innerHTML=user
head.style.color=color
head.style.backgroundColor=bgcolor
head.style.alignItems=align
