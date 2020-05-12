const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ")
  var s=arr.sort((a,b)=>a.length<b.length);
  console.log(s.reverse().join(' '))
});
