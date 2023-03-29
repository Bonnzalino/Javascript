class personal {
    constructor(name, year, email, password){
        this._name = name;
        this._year = year;
        this._email = email;
        this._password = password;
    }

    get name() { 
        return this._name; 
    }
    get year() { 
        return this._year; 
    }
    get email() { 
        return this._email; 
    }
    get password() { 
        return this._password; 
    }

    age(year) {
      let  age = year - this._year;
      return age;
    }
}

const john = new personal('John', 1994, 'john@email.com', 'amamamam' );
console.log(john.age(2023));
console.log(john);

console.log(`Hi! my name is ${john.name} I was born in ${john.year}. Now, I'm ${john.age(2023)} years old.`);