//>>>>>>>Part1<<<<<<<<<<
let names = ['Sofia', 'David', 'Juan'];

//>>>>>>>Part2<<<<<<<<<<
//Two more people get added to the back of the line - Sara and Augustin
names.push('Sara','Augustin');  
console.log(names); // [ 'Sofia', 'David', 'Juan', 'Sara', 'Augustin' ]

//The first person in line is called to the teller
names.shift();

//What does the queue look like?
console.log(names); //[ 'David', 'Juan', 'Sara', 'Augustin' ]

//>>>>>>>Part3<<<<<<<<<<
//It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line.
names.splice(1, 0, 'Renata');
console.log(names); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]

//One more person (Elena) shows up and goes to the end of the line.
names.push('Elena');  

// What does the queue look like?
console.log(names); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena' ]