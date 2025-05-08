function getDivisorsCount(number) {

let i = 0
let sum = 0

    if (number < 0 || !Number.isInteger(number)) {
        alert(`${number} должен быть целым числом и больше нуля!`)
    }
    
    while (i <= number) {
     let a = number % i
     if ( a == 0) {
        sum++
        i++
     } else {
        i++
     }
    }
    return sum;

}

console.log (getDivisorsCount(12));