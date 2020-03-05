const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var z= parseInt(n[0]);
var f=1;
for(var i=1;i<=z;i++)
{
  f=parseInt(f*i);
}
console.log(f)
});
