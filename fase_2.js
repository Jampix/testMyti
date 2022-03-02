class Student {
    constructor(firstname, lastname, birthdate, grades) {
        this.firstname = firstname
        this.lastname = lastname
        this.birthdate = Date.parse(birthdate)
        this.grades = grades
    }

    age() {
        let milliseconds = Date.now() - this.birthdate
        let differenceToDate = new Date(milliseconds)
        let age = Math.abs(differenceToDate.getUTCFullYear() - 1970)

        return age;
    }

    avg_grade(separator) {
        let grades = this.grades.split(separator)
        let sum = 0
        grades.forEach(grade => sum += parseFloat(grade));
        let average = sum / grades.length
        
        return average;
    }
}

// let pasquale = new Student('Pasquale', 'Mazzei', '08/03/1988', '10,10,10,9.9,9.85,10,10,9')

// console.log('Student Age: ' + pasquale.age())
// console.log('Student Average Grade: ' + pasquale.avg_grade(','))

export { Student }