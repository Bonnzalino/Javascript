function p(num) {
    try {
        if (num <=5)
        throw new Error(" The given number should contain a value more than 5");
        console.log("The given number is " + num);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Bye Bye");
    }
}

p(6);