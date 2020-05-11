const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var arr=n[0].split("");
  var asci=[];
  for(var i=0;i<arr.length;i++){
    var aski=arr[i].charCodeAt(0);
    asci.push(aski);
  }
var sum1 = asci.reduce(function(a, b)
    {return a + b;})
console.log(sum1); 
});
  
