/*
6. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
*/
function multiplication(number){
    for(i = 1; i <= 10; i++){
        console.log(number, "x", i, "=", number*i);
    }
}

multiplication(13);