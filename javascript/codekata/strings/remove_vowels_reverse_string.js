const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("");
  var count=0;
  var str=''
for(var i=0;i<=a.length-1;i++)
{
if ((a[i]=="a") || (a[i]=="e")|| (a[i]=="i")||(a[i]=="o")||(a[i]=="u"))
    {
    count=count+1;
    }
else{
    str=str+a[i];
}
}
var rev=str.split("").reverse().join("");
if(rev==='') {console.log("-1")}
else {console.log(rev)}
});
