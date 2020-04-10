const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("")
  var f=a[0]
  var l=a[a.length-1];
  var sum=parseInt(f)+parseInt(l)
  console.log(sum)
});
