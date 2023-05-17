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

const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "FREELANCERS"
root.appendChild(h1);


const filteredUsers = users.filter(user => {
    return user.age <= 100;
});

console.log(filteredUsers);




/*
function main() {

}

//call the main function
main();



const ul = document.createElement('ul');

for (i = 0; i <= users.length - 1; i++) {
    const li = document.createElement('li');
    li.innerHTML = users[i];
    li.setAttribute('style', 'display: block;');
    ul.appendChild(li);
}

cont.appendChild(ul);




for (let user of users) {
    console.log(user);
}



*/
