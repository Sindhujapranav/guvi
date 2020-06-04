// callback function
//3. Write a callback which is called
//3.1. if the give number is even

function even(num)//function with variable even
{
if((num%2)===0) return true;//if num is even true
else return false // if num is odd then false
}
//callback function
var evenNumber=((num,fun)=>fun(num));
// callback with variable name evenNumber to check the num is even or not
console.log(evenNumber(5,even))

//3.2. if the given number is prime

function prime(n){ 
  for (var i = 2; i <= Math.sqrt(n); i++) 
  {
    if (n % i === 0) 
    return "not prime";
  }
  return "prime";
}
//callback function
var primeNumber=((num,fun)=>fun(num));
console.log(primeNumber(10,prime))


//3.3. if the number is palindrome
function pali(str) {
var rev= str.split('').reverse().join('');
if(str === rev)return true;
 else return false
}
//callback function
var isPalindrome=((str,fun)=>fun(str));
console.log(isPalindrome("eyes",pali))
