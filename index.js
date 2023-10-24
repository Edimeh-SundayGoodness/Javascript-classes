let yourName = document.querySelector('.name')
let yourAge = document.querySelector('.age')
let yourHeight = document.querySelector('.height')
let lengths = document.querySelectorAll('.length');
let yourCourse = document.querySelector('.course')
let yourAttendance = document.querySelector('.attendance')
let lengthValue;
let submitBtn = document.querySelector('button')
let display = document.querySelector('p')

lengths.forEach(length => {
    length.addEventListener('click', () =>{
        lengthValue =length.value
        console.log(lengthValue)
    })
});

class Person{
    constructor(name, age, height, hair, course){
        this.fullname = name;
        this.age = age;
        this.height = height;
        this.hairsize = hair;
        // this.courseRegistered = course;
    }

    details(){
        let acceptedHair;
        if(this.hairsize === 'short'){
            acceptedHair = 'accepted'
        }else{
            acceptedHair = 'not accepted'
        }
        return `your hair is ${this.hairsize}, therefore you are ${acceptedHair}`
    }
}
class Child extends Person{
    constructor(name, age, height, hair, course, attendance){
        super(name, age, height, hair)
        this.yourCourse = course
        this.yourAttendance = attendance
    }
    attendance(){
        return `${this.fullname} is student of ${this.yourCourse} and attends classes ${this.yourAttendance}`
    }
}

// console.log(details())
submitBtn.addEventListener('click', (event) => {
    let nameEntered = yourName.value
    let age = yourAge.value
    let height = yourHeight.value
    let courseSelected = yourCourse.value
    let frequency = yourAttendance.value 
    
    let newPerson = new Child(nameEntered, age, height,lengthValue, courseSelected, frequency)
    display.innerHTML = newPerson.attendance()
    event.preventDefault()
})