const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var a=n[0].split(" ").map(x=>+x)
var arr=n[1].split(" ").map(x=>+x);
console.log(arr);
//concat
var concats=arr.concat(a);
console.log(concats)

// without using concat
console.log(arr+','+a)
//output 5
//12 13 14 15 16
//[ 12, 13, 14, 15, 16, 5 ]
});
