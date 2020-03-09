const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
var ans=Math.sin(a * Math.PI / 180);
console.log(ans.toFixed(1))
});
