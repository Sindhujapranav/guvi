const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  count=0;
for(var i=2;i<=a;i++)
{
  if(a%i==0)
  {
    count=count+1
  }
  else{
    break;
  }
}
if(count>=1){console.log("yes")}
else{console.log("no")}
});
  
    
