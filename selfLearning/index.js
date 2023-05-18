// const para = document.querySelectorAll('p');
// console.log(para[0]);

// para.forEach(para => {
//      console.log(para);
// });

// // get an element by ID 
// const title = document.getElementById('page-title');
// console.log(title);
// // expected print: <h1 id="page-title"> Hello </h1>

// // get elements by their calls name 
// const errors = document.getElementsByClassName('errors');
// console.log(errors);
/* expected print creates a "HTMLCollection"
HTMLCollection []
length: 0
[[Prototype]]: HTMLCollection
item: ƒ item()
length: (...)
namedItem: ƒ namedItem()
constructor: ƒ HTMLCollection()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "HTMLCollection"
get length: ƒ length()
[[Prototype]]: Object

*/


// // get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// /* expected print: 
// 1st log > HTMLCollection(3) [p, p, p.error]
// 2nd log > <p>lorem ipsum</p>
// */


//console.log(para.innerText);

// putting 'para.' causes it to be a property and not a method 
// (doesn't use parenthesis as it's only for methods).

//para.innerText += ' ninjas are awesome!';

// para.innerText = 'ninjas are awesome!';

// paras.forEach( para => {
//      console.log(para.innerText);
//      para. innerText += ' new text';
// });

// console.log(content.innerHTML);
// content.innerHTML = '<h2>THIS IS A NEW  H2 </h2>';

const para = document.querySelector('p');
const paras = document.querySelectorAll('p');
const content = document.querySelector('.content');

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
     content.innerHTML += `<p>${person} </p>`;
});