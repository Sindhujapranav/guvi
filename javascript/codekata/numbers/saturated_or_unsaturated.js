const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data)})
inp.on("close",()=>{
  var a=n[0].split("").map(x=>+x);
  var b=[...new Set(a)];
  if(b.length===2){console.log("Saturated")}
  else { comsole.log("Unsaturated")}
});
