class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`สวัสดีค่ะ ผมชื่อ ${this.name} และอายุ ${this.age} ปี`);
    }
  }
  
  const person1 = new Person('แอลิซ', 25);
  person1.greet(); // สวัสดีค่ะ ผมชื่อ แอลิซ และอายุ 25 ปี
  