const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var f=[];
for(let i=0;i<=a;i+=2){
    if(a%i===0)
      f.push(i);
  }
  if(f.length>0)
  console.log(f.join(" "));
  else
  console.log("-1");
});
