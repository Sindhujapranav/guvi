const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var z=n[0].split(" ");
var p= parseFloat (z[0]);
var t= parseFloat (z[1]);
var r= parseFloat(z[2]),SI;
SI=parseFloat(((p*t*r)/100));
console.log(SI.toFixed(2))
});
