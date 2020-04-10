const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ").map(x=>+x);
  var ar1=n[1].split(" ").map(x=>+x);
  var ar2=n[2].split(" ").map(x=>+x);
  var arr=ar1.concat(ar2).map(x=>+x);
  arr.sort((a, b) => a - b);
  console.log(arr.join(" "))
});
