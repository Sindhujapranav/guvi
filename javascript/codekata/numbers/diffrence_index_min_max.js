const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data)})
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ").map(x=>+x);
  var maxi=Math.max.apply(null, arr);   
  var mini=Math.min.apply(null, arr);
  var indexmax=arr.indexOf(maxi);
  var indexmin=arr.indexOf(mini);
  console.log(indexmax-indexmin)
  });
