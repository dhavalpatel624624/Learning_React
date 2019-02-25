class Human{
    constructor(){
        this.gender = "Male";
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name = "Mike";

        //change property from male to female
        this.gender = "Female";
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();

person.printGender();
person.printMyName();