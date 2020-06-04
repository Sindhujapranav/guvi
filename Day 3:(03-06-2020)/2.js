//ANONYMOUS
//2. Do the below programs in anonymous function
//2.1. Print odd numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
//odd is anonymous function variable
let odds = arr.filter(function(n){return n%2})//filters array for odd numbers
console.log(odds)//calling anonymous function

//2.2. Convert all the strings to title caps in a string array
var titleCase=function(string) {//anonymous fn with variable titlecase
  //converts all string to lowecase    
  var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){//iterate through for loop
        //changing the firt letter to caps &adds remaining letters
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
  console.log(sentence.join(" "));//joins as string
   }
titleCase("sindhu raja pranav");//calling anonymous fn

// 2.3. Sum of all numbers in an array

let array=[1,2,3,4,5,6,7,8,9,10,11,12]//array values to add
//anonymous function to add the array numbers
array.reduce(function(acc, val) { return acc + val; }, 0)

//2.4. Return all the prime numbers in an array

var arr=[1,2,3,4,5,6,7,8,9,11,12];
//anonymous fn to check its prime number
var prime=arr.filter(function(num){
for (let i = 2; i < num; i++) {//iterate the number from array to check its prime
    if (num % i === 0) return false;
  }
  return num !== 1;
	});
console.log(prime);

//2.5 Return all the palindromes in an array
var arr = ['hello', 'hi', 'madam', 'ada','hih','mam'];  //to check the word is palindrome 
//anonymous fun to check palindrome
var pali = arr.filter(function(c,d){
var Cur = c.split('').reverse().join('');
if(c == Cur){
console.log(arr[d]);
}
});

//2.6.Return median of two sorted arrays of same size
var array1 = [1,2,3,4]; 
var array2 = [5,6,7,8];
// declare anonymous function with the variable name of medianOf2
var medianOf2 = function(array1,array2)
{
  var array=[...array1,...array2]
  var med=array.sort();
  var len=array.length;
  const mid = Math.ceil(len / 2);
  return med[mid]
}
medianOf2(array1,array2);





//2.7. Remove duplicates from an array
var arr=["sindhu","raja","raja","pranav","hi"];
//anonymous function to Remove duplicates from an array
var unique=function removeDup(arr){
    var array=[...new Set(arr)];
    return array;
}
console.log(unique(arr));


//2.8. Rotate an array by k times and return the rotated array

var array=[1,2,3,4,5,6,7];
//anonymous function to rotate an array
var shifts=function rotate(array,k){
    var newArray=[...array],s;
    for(var i=0;i<k;i++){
        s=newArray.shift();
        newArray.push(s);
    }
    return newArray;
}
console.log(shifts(array,4))





