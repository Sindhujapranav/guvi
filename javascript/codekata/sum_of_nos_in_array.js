const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});gggm
inp.on("close",()=>{2
a=[], ze=0;
var a=n[0].split(" ");
sortarray(a);
});
function sortarray(a){
  for(var i=0;i<=a.length; i++)
{
    for(var j=i+1;j<=a.length ;j++)
{
    if(parseInt(a[i])>parseInt(a[j]))
    {
        ze=a[i];
        a[i]=a[j];
        a[j]=ze;
    }
}
}
console.log(a);
console.log(minimum=a[0])
console.log(maximum=a[a.length-1])
}
