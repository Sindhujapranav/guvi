const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
hexString = n[0].toString(16);
var dec = parseInt(hexString, 16);
console.log(dec)
});
