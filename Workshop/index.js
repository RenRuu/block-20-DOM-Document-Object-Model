// Array of users 
const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

// Making connection to class 'root' within HTML over to JS and associating to variable 'root'
// linked to the DIV element node within the <body>
const root = document.getElementById("root");
// Connection to 'root' allows the ability to create a new element node 'h1' within the <div> element node
const h1 = document.createElement("h1");
// Creating text node within the newly create element node
        h1.innerText = "FREELANCERS"
// Establishes newly created
        root.appendChild(h1);

// Creates 'ul' element node within 'root'
const unorderedList = document.createElement("ul")
// Establish content
        unorderedList.innerText = "Users:" 
// prints list in console
        console.log("ul:", unorderedList.innerText)

// forEach loop to list out the names in the array into an li nodes 
    users.forEach((element) =>{
        console.log("name:", element.name)

// Creating 'li' element node within the 'ul' element
const li = document.createElement("li");
        li.innerText = element.name; 
        li.setAttribute('style', 'display: block;');
        unorderedList.appendChild(li)
    })

        root.appendChild(unorderedList)
//Fin
