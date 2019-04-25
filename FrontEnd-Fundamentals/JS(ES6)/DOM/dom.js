// var pTags = document.getElementsByTagName('p');
// console.log(pTags);

// for(let i=0; i<pTags.length; i++) {
//     pTags[i].innerHTML = "<h1>Pavan</h1>"
// }


const divs = document.querySelectorAll(".divi");
console.log(divs);
divs.forEach(function(div){
  div.style.color = "red";
});
