function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    this.greeting = function() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  // Creating new objects using the constructor function
  const john = new Person('John', 30, 'male');
  const jane = new Person('Jane', 25, 'female');
  const bonn = new Person('Bonn', 28, 'male');


  john.greeting(); // Output: Hi, my name is John and I'm 30 years old.
  jane.greeting(); // Output: Hi, my name is Jane and I'm 25 years old.
  bonn.greeting(); 