const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("").map(x=>+x);
  var s=0
  for(var i=0;i<a.length;i++){
      sum=a[i]*a[i]
      s=s+sum
  }
  console.log(s)
 
});
