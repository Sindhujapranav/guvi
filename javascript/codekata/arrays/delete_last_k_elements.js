const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ").map(x=>+x)
  var arr=n[1].split(" ").map(x=>+x);
  var t=a[1];
  arr.splice(-t)
console.log(arr.join(" "));
});
