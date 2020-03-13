const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  console.log(a)
  var hexa = parseInt(a, 2).toString(16).toUpperCase();
console.log(hexa)
});

