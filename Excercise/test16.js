class Foo {
    constructor() {
        this.x = 10;
}

    greet() {
        console.log("I am Foo");
    }

    static getClassName() {
        return "Foo";
    }
}

class Bar extends Foo {
    constructor() {
        super();
    }
}