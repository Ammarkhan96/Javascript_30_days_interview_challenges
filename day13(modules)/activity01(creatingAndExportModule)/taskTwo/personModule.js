export const person = {
    name: 'John Doe',
    age: 30,
    profession: "Software Developer",
    hobbies: ["reading", "coding", "hiking"],

    greet(){
        return `Hello, my name is ${this.name}, and I am a ${this.profession}`
    },

    celebrateBirthday(){
        this.age += 1
        return `Happy Birthday! I am now ${this.age} years old.`
    },

    listHobbies(){
        return `My hobbies include: ${this.hobbies.join(', ')}.`
    },

    displayInfo(){
        return `${this.greet()} I'm ${this.age} years old. ${this.listHobbies()}`
    }
}