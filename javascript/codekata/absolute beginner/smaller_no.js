const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var z=n[0].split(" ")
if(z[0]<z[1])
{
  console.log(z[0])
}
else if(z[1]<z[0])
{
  console.log(z[1])
}
});
       
