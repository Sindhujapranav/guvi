const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],x,m;
  a=n[1].split(" ")
  m=Math.min.apply(null,a);
  x=Math.max.apply(null,a);
  console.log(a.indexOf(String(m))+1,a.indexOf(String(x))+1);
});
