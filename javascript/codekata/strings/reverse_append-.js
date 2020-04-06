const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("");
  var s=a.reverse().map(x=> x+"-").join("");
  var w=s.split("");
  w.pop();
  console.log(w.join(""))
});
