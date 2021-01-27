//1 

const content = document.querySelector('div#content'); 

console.log(content); 


// 2

const cont2 = document.querySelectorAll('div#content'); 

console.log(cont2); 


// 3

let li = document.querySelector('li.important');

console.log(li);



// 4

let lis = document.querySelectorAll('li.important');

console.log(lis); 


// 5 

Array.from(lis).forEach( (e) => {
    console.log(e.innerText.slice(0, e.innerText.length-1) + e.innerText.charAt(e.innerText.length-1).toUpperCase());
})


// 6 
const d = document.getElementById("content"); 

const p = d.getElementsByClassName('grandParagraphe');


console.log(p); 