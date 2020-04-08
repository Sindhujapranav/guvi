const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data)})
inp.on("close",()=>{
  var a=parseInt(n[0]);
  var c=[];
  for(var i=1;i<=a;i++){
    var n1=(i*i+1)
    c.push(n1)
  }
  console.log(c.join(" "))
});
