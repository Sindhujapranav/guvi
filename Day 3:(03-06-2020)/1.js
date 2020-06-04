//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
var num = 10;
// Function to returns 5 added to that number
function addFive(num) {
 if(num>=0)//if numn is greater or equal to 0
   return num+5;
else
   return num-5;//if num is negative
}
addFive(5);//calling func
addFive(0);
addFive(-5);

//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = 5;
// declare function with the name of getOpposite
function getOpposite(num) {
  if(num===0) return 0 //if num is 0
  else if(num>0)//if positive
   return num*-1;
  else if(num<0)
   return num*(-1);//if num is negative
  else             // num is not valid
    return -1
 }
var result = getOpposite(num);
getOpposite(5);

/*getOpposite(0); // 0
getOpposite(-5);// 5
getOpposite(“5a”);//-1
getOpposite(5.5);//-1*/

//Fill in your code that takes an number minutes and converts it to seconds.

function toSeconds(min) {// fun with variable name toSeconds
  return min*60  //converts min to seconds
}
var secs = toSeconds(min)
toSeconds(3)//calling func
//toSeconds(5) 300
//toSeconds(3) 180
//toSeconds(2) 120


//Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
  return parseInt(mystr)
}
var myint = toInteger(mystr)
toInteger("500")
/*toInteger(“6”) ➞ 6
toInteger(“1000”) ➞ 1000
toInteger(“12”) ➞ 12*/

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

var myint = 0;
function nextNumber(myint) {
  return myint+1;
}
var myNextint = nextNumber(myint)
nextNumber(-1)
/*nextNumber(0) ➞ 1
nextNumber(9) ➞ 10
nextNumber(-3) ➞ -2*/

//Create a function that takes an array and returns the first element.

var arr = [80,1,2];
function getFirstElement(arr) {
  return (arr[0])
}
var data = getFirstElement(arr)
getFirstElement(arr)
/*getFirstElement([1, 2, 3]) //➞ 1
getFirstElement([80, 5, 100]) ➞ 80
getFirstElement([-500, 0, 50]) ➞ -500*/


//Convert Hours into Seconds
//Write a function that converts hours into seconds.

var arr = [];
var newarr=[];//get seconds value
function hourToSeconds(arr) {
  for(var i=0;i<arr.length;i++){
    newarr.push(arr[i]*3600)
  }
    return newarr
}
var data = hourToSeconds(arr)
hourToSeconds([1,2,7])

//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.


//func name findPerimeter with argument as num1 and mun2
function findPerimeter(num1,num2) {
    var peri=2*(num1+num2);//formula(2*(l+b))
  return peri //returns perimeter
}
var perim = findPerimeter(6,7)//calling func
console.log(perim)
findPerimeter(20,10)

//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
  var sum=num1+num2;//adds
  if(sum<100) return true//checks < 100 prints true
  else return false //>100 false printed
}
var res = lessThan100(22,15)//calling func
lessThan100(50,60)


/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder,
 possibly zero. Return that value.*/
 function remainder(num1,num2) {
  return(num1%num2)
}
var res = remainder(1,3)
console.log(res)
remainder(-9,45)

 
 
 /*Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the 
total number of legs of all the animals.*/

function CountAnimals(tur,horse,pigs) {
  var legss=((2*tur)+(4*horse)+(4*pigs))
  return legss
}
var legs = CountAnimals(2,3,5)
console.log(legs)
CountAnimals(1,2,3)


//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1,num2) {
  var frame=num1*num2*60
  return frame
}
var fps = frames(1,2)
console.log(fps)
frames(10,1)

//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num) {
  if(num%5==0) return true
  else return false
}
var divisible = divisibleByFive(5)
divisibleByFive(100)


//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.

function isEven(num){
 if(typeof(num)=="number")
 {
   if(num%2===0) return true
   else  return false
 }
 else return -1
 }
var even = isEven(5)
isEven("5h")


//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2){
 if((num1%2!==0)&&(num2%2!==0)) return true
  else return false
}
areBothOdd(5,3)


//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space

function getFullName(firstName, lastName){
     return firstName+" "+lastName;
}
getFullName("pranav","sindhu")

//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word){
    if(typeof(word)==="string") 
      return word.length;
    else return -1;
}
getLengthOfWord("sindhu")


//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2){
 if((word1.length)===(word2.length))
   return true
  else return false
}
isSameLength("sindhu","pranav")


//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
 return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1); 
}
getDistance(100, 100, 400, 300);


//Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
// If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,n){
  return(array[n])
}
getNthElement([1,2,3,4],2)




//Write a function called “getLastElement”.
//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

function getLastElement(array){
 if (array.length>0)
    return(array[array.length-1])
 else 
    return -1
}
getLastElement([1,3


//Write a function called “getProperty”.
/*Given an object and a key, “getProperty” returns the value of the property at the given key. 
If there is no property at the given key, it should return undefined.*/

var obj = {
 mykey: 'value'
};
function getProperty(obj, key) {
 if(typeof(obj[key])=="undefined") return "NA";
 else return obj[key];
}
getProperty(obj,'mykey');


//Write a function called “addProperty”.
//Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

var obj = {
 mykey: "value"
};
function addProperty(obj, key){
    return obj[key]=true;
}
addProperty(obj,"myproperty");
console.log(obj)

//Write a function called “removeProperty”.
//Given an object and a key, “removeProperty” removes the given key from the given object.

var obj = {
 mykey: "value"
};
function addProperty(obj, key){
    return obj[key]=true;
}
addProperty(obj,"myproperty");
function removeProperty(obj, key){
  delete (obj[key])
}
removeProperty(obj,"mykey");
console.log(obj)


//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// function with the  variable countPositivesSumNegatives
function countPositivesSumNegatives(arr) {
    var pos=arr.filter((number)=>number>0);
    var neg=arr.filter((number)=>number<0);
    return [pos.length,neg.reduce((a, b) => a + b)]
}
countPositivesSumNegatives(arr);


//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
 var pos=ar.filter((n)=>n>0);
  return pos
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
getPositives(ar);


//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
  var res=[];
  for(var i=0;i<=n;i++){
    res.push(Math.pow(2,i))
    res.join(",")
  }
  return res;
}
powersOfTwo(2)


//Find the maximum number in an array of numbers
function findMax(ar)
{
  return (Math.max(...ar))
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var maxi =findMax(ar);
console.log('Max:',maxi);

//Reverse a string

function reverseString(str)
{
   var rev=str.split("").reverse().join("")
   return rev
}
reverseString("JavaScript");


//Create a function that will merge two arrays and return the result as a new array

function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 var res=[...result,...ar2]
 
 return res;
}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);


//Calculate the sum of numbers received in a comma delimited string
function sumCSV(s)
{
    var arr=s.split("");//split the s array
    arr=s.split(",").map(x=>+x);
    return arr.reduce((a, b) => a + b);

}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"
