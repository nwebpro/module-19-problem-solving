/*
7. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
*/

// Uppercase to LowerCase
function lowerCase(name){
    return name.toLowerCase();
}
var name = lowerCase("Hi, How are you. I'm fine and you");
console.log(name);

// Lowercase to Uppercase
function upperCase(name){
    return name.toUpperCase();
}
var name = upperCase("Hi, How are you. I'm fine and you");
console.log(name);
