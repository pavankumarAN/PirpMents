var pTags = document.getElementsByTagName('p');
console.log(pTags);

for(let i=0; i<pTags.length; i++) {
    pTags[i].innerHTML = "<h1>Pavan</h1>"
}