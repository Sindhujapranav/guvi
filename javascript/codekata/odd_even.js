const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
   n.push(data);});
inp.on("close",()=>{
var A=n[0];
if(A==0){
      console.log("Zero")}
else if(A%2==0){
    console.log("Even")}
else{
    console.log("Odd")}
});																
//You are provided with a number check whether its odd or even. 

