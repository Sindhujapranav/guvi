const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("#");
  var b=n[1].split("#");
  var a1=a[0];
  var b1=b[0];
  var suma=parseInt(a[1])+parseInt(a[2])+parseInt(a[3]);
  var sumb=parseInt(b[1])+parseInt(b[2])+parseInt(b[3]);
if(suma>sumb) console.log(a1) 
else console.log(b1)
});
