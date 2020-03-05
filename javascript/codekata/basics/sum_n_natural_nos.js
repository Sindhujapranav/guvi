const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var a=n[0];
var sum=0;
 for(var i=1; i<=a; i++)
 {sum=sum+i;}
console.log(sum)
});
