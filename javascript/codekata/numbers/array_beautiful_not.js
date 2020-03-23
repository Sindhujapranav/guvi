const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  var sum=0;
  for(var i=0;i<a.length;i++){
      sum+=parseInt(a[i])
  }
  if(sum%2===0 || sum%3===0 || sum%5===0){
      console.log("1")}
      else{console.log("0")}
});  
