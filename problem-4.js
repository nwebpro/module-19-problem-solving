/*
4. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
        - Has return + Has parameter
        - No return + Has parameter
*/

function odd_even(number){
    if(number % 2 === 0){
        return (number + " is even number.");
    }
    else{
        return (number + " is odd number.");
    }
}
var type = odd_even(4);
console.log(type);