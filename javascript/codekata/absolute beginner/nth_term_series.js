const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
var a=n[0];
var a=n[0];
if(a==0){
    console.log("0")}
else if(a<0){
    console.log("Error")}
else{
    console.log(a*a)}
});
   
