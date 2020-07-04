//REST
//Without rest
function mul(){
  let args=Array.from(arguments)
  console.log(args.reduce(function(acc,curr){
    return acc*curr
  }))
}
mul (2,4,5)
//With rest
function mul(...args){
  console.log(args.reduce(function(acc,curr){
    return acc*curr
  }))
}
mul (2,4)

//SPREAD
//Without spread
function sums(n1,n2,n3){
  console.log(n1+n2+n3)
}
let params=[1,2,3]
sums(params)
//With Spread
function sums(n1,n2,n3){
  console.log(n1+n2+n3)
}
let param=[1,2,3]
sums(...param);

// with apply instead of spread
function sums(n1,n2,n3){
  console.log(n1+n2+n3)
}
let para=[1,2,3]
sums.apply(null,para)


//Concat array
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]


//conact objects
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
console.log(clonedObj)
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj)

// Object { foo: "baz", x: 42, y: 13 }
