const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[]
  a=n[0].split("");
var len=a.length
var sum=0;
for(var i=0;i<=a.length-1;i++)
{
    var p=Math.pow(a[i],len)
    sum=sum+p
}
console.log(sum)
});
