/*
3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

var array = [20, 45, 50, 33, 20, 66, 45, 78, 40];

function make_array_avg(arr){
  var total = 0;
  for (i in arr){
    total += arr[i];
  }
  var average = total / array.length;
  return average.toFixed(2);
}

console.log(make_array_avg(array));