const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
 var arr=n[1].split(" ");
var max=arr.sort((a, b) => a-b);
max.splice(arr.indexOf(max), 1); // remove max from the arra
var smax=Math.max.apply(null, arr); // get the 2nd max
console.log(smax);
});
