const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
var c=parseInt(a[0])*parseInt(a[1]);
var d=parseInt(Math.sqrt(c))
if(a[0]==d)
{
console.log('yes')
}
else
{
console.log('no')
}
});

