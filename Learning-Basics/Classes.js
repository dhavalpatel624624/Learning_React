class Human{
    gender = "Male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    
    name = "Mike";
    //change property from male to female
    gender = "Female";

    printMyName= () => {console.log(this.name);}
}

const person = new Person();

person.printGender();
person.printMyName();

export default Person;