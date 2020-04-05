const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
var a1=n[1].split(" ").map(x=>+x);
var sum=a1[0]+a1[1]+a1[2];
var a2=a1.reverse();
var sum1=a2[0]+a2[1]+a2[2];
if(sum===sum1) { console.log("1") }
else { console.log("0") }
});
