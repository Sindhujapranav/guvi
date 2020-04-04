const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ").map(x=>+x);
  var sum=0
 var neg = arr.filter(e => e < 0);
 for(var i=0;i<neg.length;i++){
     sum=sum+neg[i]
 }
console.log(sum)
});
