let questions=document.querySelectorAll('.list-items');
let fact=true;
questions.forEach(element => {
element.addEventListener('click',(e)=>{
let answer=e.target.parentNode.parentNode.childNodes[3];
answer.classList.toggle('hidden')
let img=e.target.parentNode.childNodes[3]
if(fact)
{
  img.src="assets/images/icon-minus.svg"
  fact=false
}
else{
  img.src="assets/images/icon-plus.svg"
  fact=true;
}
  })
});