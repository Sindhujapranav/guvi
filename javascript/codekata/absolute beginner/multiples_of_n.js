const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],b=2*n[0],c=3*n[0];
  console.log(a+" "+b+" "+c);
});
