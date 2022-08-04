/*
4. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
        - Has return + Has parameter
        - No return + Has parameter
*/

function odd_even(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'
}

console.log(odd_even(45));