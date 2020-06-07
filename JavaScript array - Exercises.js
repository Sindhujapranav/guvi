//CHUNK
/1*Creates an array of elements split into groups the length of size. If array can't be split evenly,
the final chunk will be the remaining elements.*/
//
const chunk = (arr, size) =>
//itwerate through the array and splits the array length
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
     arr.slice(i * size, i * size + size) //splits the array of required size
  );
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));

//Compact
/*2.Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are falsey.*/
//Compact
const compact=(arr)=>{
 arr = arr.filter(function (n) { 
    return (n !== undefined && n !== null && n !== false && 
            n !==0 && n !== "" && isNaN()!=NaN); });//removes the value 
  return arr;
}
compact([7, "ate", "", false, 9, NaN]);

/*3.Creates a new array concatenating and flattens array a single level deep.
with any additional arrays and/or values.*/
const arr1 = [1, 2, [3, 4]];
const arr2=[9,8]
//combine arrays
const arr=[...arr1,...arr2]
arr.flat();
// To flat single level array
const flattened = arr => [].concat(...arr);


/*4- drop
Creates a slice of array with n elements dropped from the beginning.*/
var arr = [1,2,3]; 
console.log(arr.slice(1));


/*5 - dropRight
Creates a slice of array with n elements dropped from the end.*/
var arr = [1,2,3,4,5]; 
console.log(arr.slice(0,-1));


/*6 - dropWhile
Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey.
 The predicate is invoked with three arguments: (value, index, array).*/
 function dropright(arr){
	var arrays=arr.filter(function(value,index,array){
		return value%2!==0;
	});
	return newarr
}
console.log(dropright([1,2,3,5,6,7,8,9,10]));

/*7 - findLastIndex
This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left.*/
let myArr = [1,2,3,4,5];
var lasts = myArr.lastIndex(function(e) { return (e)<=3; }); 
console.log(lasts);

/*8flattenDeep
Recursively flattens array.*/
const flattendeep=[1,2,3,[5,6],[[7,8,9]]];
console.log(flattendeep.flat(Infinity))

/*9 - flattenDepth
Recursively flatten array up to depth times.*/
const flattendepth=[1,2,3,[5,6],[[7,8,9]]];
console.log(flattendepth.flat())

/*10 - fromPairs
this method returns an object composed from key-value pairs.*/
const entries = new Map([['a', 1],['b', 2]]);
const obj = Object.fromEntries(entries);
console.log(obj)





