const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var year=parseInt(n[0]);
  if((year%4)==0){
    if((year%100)==0){
      if((year%400)==0){
        console.log("Y")}
      else{
        console.log("N")}}
    else{
      console.log("Y")}}
  else{
    console.log("N")}

});
