const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var ar1=n[1].split(" ").map(x=>+x);
  var ar2=n[2].split(" ").map(x=>+x);
  var array=[];
  array=ar1.concat(ar2).map(x=>+x);
array.sort((a, b) => a - b);
var middle = array[Math.floor((array.length - 1) / 2)];
var middle1 = array[Math.round((array.length - 1) / 2)];
console.log(parseInt(middle)+parseInt(middle1));
});
