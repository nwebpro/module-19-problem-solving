/*
2. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(num1, num2, num3){
    const total = num1 + num2 + num3;
    const avarage = total / 3;
    return avarage;
}

const myAvarage = make_avg(33, 26, 20);
console.log("Avarage Marks: ", myAvarage.toFixed(2));