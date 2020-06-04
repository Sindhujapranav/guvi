//4. Do the below programs in arrow functions
//4.1. Print odd numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let odds = arr.filter(n => n%2)//arrow function to get odd numbers from array
console.log(odds)

////4.2. Convert all the strings to title caps in a string array

var caseconv=["sindhu raja pranav"]//to convert this with titlecase
//arrow function to convert the string array
var titleCase= caseconv.map((string)=>{
  //converts all string to lowecase    
  var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){//iterate through for loop
        //changing the firt letter to caps &adds remaining letters
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
  console.log(sentence.join(" "));//joins as string
   });                      

//4.3. Sum of all numbers in an array
var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
//arrow function to sum all the numbers in array
var sums=arr.reduce((a, b) => a + b);
console.log(sums)

//4.4. Return all the prime numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10,11,12];//array nos to check prime
//arrow fn to get prime nos rom array
var prime = arr.filter(num => {
  for (let i = 2; i < num; i++) {//iterate the number from array to check its prime
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(prime);

//4.5 Return all the palindromes in an array
var arr = ['hello', 'hi', 'madam', 'ada','hih','mam'];  //to check the word is palindrome 
//arrow fun to check palindrome
var pali = arr.filter((c,d)=>{
var Cur = c.split('').reverse().join('');
if(c == Cur){
console.log(arr[d]);
}
});


