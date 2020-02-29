const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[ ];
inp.on("line",(data)=>{
   n.push(data);});
inp.on("close",()=>{
  var a=n[0];
for(var i=1;i<=a;i++)
{
  if(i%2!==0)
  {
    console.log(i)
  }
}
});
