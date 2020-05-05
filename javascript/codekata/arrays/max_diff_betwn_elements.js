const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var arr=n[1].split(" ").map(x=>+x);
  var min=Math.min.apply(null, arr);
  var max=Math.max.apply(null, arr); 
  console.log(max-min)
});

