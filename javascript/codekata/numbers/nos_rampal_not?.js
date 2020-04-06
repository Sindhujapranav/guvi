const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  var a1=a.split("").map(x=>+x);
var b=a.split("").reverse().map(x=>+x)
if( a > 0) {
    var sum=b[0]+b[1];
    if(sum%4===0){console.log("yes")}
    else{console.log("no")}
}
else if( a < 0)
{
    var sum1=a1[1]+b[0];
    if(sum1%4===0){console.log("yes")}
    else{console.log("no")}
    
}
});
